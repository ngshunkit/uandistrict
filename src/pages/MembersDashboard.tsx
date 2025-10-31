import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  Award, 
  TrendingUp, 
  User as UserIcon,
  Shield
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { User } from "@supabase/supabase-js";
import MembersHeader from "@/components/MembersHeader";
import Footer from "@/components/Footer";
import { SignupRequests } from "@/components/admin/SignupRequests";
import { verifyAdminStatus } from "@/lib/adminCheck";
import JobApplications from "@/components/admin/JobApplications";

interface Profile {
  full_name: string | null;
  email: string;
}

const MembersDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVerifyingAdmin, setIsVerifyingAdmin] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session && isMounted) {
          navigate("/auth");
          return;
        }

        if (session && isMounted) {
          setUser(session.user);
          
          // Check if user is admin using server-side verification
          try {
            const { data, error } = await supabase.functions.invoke('verify-admin');
            
            if (isMounted) {
              setIsAdmin(!error && !!data?.isAdmin);
              setIsVerifyingAdmin(false);
            }
          } catch (err) {
            if (isMounted) {
              setIsAdmin(false);
              setIsVerifyingAdmin(false);
            }
          }
          
          // Fetch user profile
          const { data, error } = await supabase
            .from('profiles')
            .select('full_name, email')
            .eq('id', session.user.id)
            .maybeSingle();

          if (isMounted && data) {
            setProfile(data);
          }
          
          if (isMounted) {
            setIsLoading(false);
          }
        }
      } catch (error) {
        if (isMounted) {
          setIsLoading(false);
          setIsVerifyingAdmin(false);
        }
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' && isMounted) {
        navigate("/auth");
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Error signing out");
    }
  };

  if (isLoading || isVerifyingAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MembersHeader />
      
      <main className="flex-1 bg-gradient-subtle">
        {/* Welcome Section */}
        <section className="border-b border-border bg-background py-8">
          <div className="container mx-auto px-4">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">
                {t("members.dashboard.welcome")}{profile?.full_name ? `, ${profile.full_name}` : ''}!
              </h1>
              <p className="text-muted-foreground">
                {t("members.dashboard.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={isAdmin ? "admin" : "dashboard"} className="w-full">
              <TabsList className={isAdmin ? "grid w-full grid-cols-3 mb-8" : "hidden"}>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="admin">
                  <Shield className="h-4 w-4 mr-2" />
                  Admin Panel
                </TabsTrigger>
                <TabsTrigger value="applications">
                  <FileText className="h-4 w-4 mr-2" />
                  Job Applications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard">
                {/* Quick Access Cards */}
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">{t("members.dashboard.quickAccess")}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{t("members.dashboard.cards.training.title")}</CardTitle>
                    <CardDescription>
                      {t("members.dashboard.cards.training.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {t("members.dashboard.cards.training.action")}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{t("members.dashboard.cards.events.title")}</CardTitle>
                    <CardDescription>
                      {t("members.dashboard.cards.events.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {t("members.dashboard.cards.events.action")}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{t("members.dashboard.cards.directory.title")}</CardTitle>
                    <CardDescription>
                      {t("members.dashboard.cards.directory.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {t("members.dashboard.cards.directory.action")}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{t("members.dashboard.cards.resources.title")}</CardTitle>
                    <CardDescription>
                      {t("members.dashboard.cards.resources.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {t("members.dashboard.cards.resources.action")}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{t("members.dashboard.cards.performance.title")}</CardTitle>
                    <CardDescription>
                      {t("members.dashboard.cards.performance.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {t("members.dashboard.cards.performance.action")}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <UserIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{t("members.dashboard.cards.profile.title")}</CardTitle>
                    <CardDescription>
                      {t("members.dashboard.cards.profile.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {t("members.dashboard.cards.profile.action")}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Guidelines Section */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">{t("members.dashboard.guidelines.title")}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      {t("members.dashboard.guidelines.included.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(t("members.dashboard.guidelines.included.items", { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      {t("members.dashboard.guidelines.started.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(t("members.dashboard.guidelines.started.steps", { returnObjects: true }) as string[]).map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">{idx + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="admin">
            {isAdmin && <SignupRequests />}
          </TabsContent>

          <TabsContent value="applications">
            <JobApplications />
          </TabsContent>
        </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MembersDashboard;
