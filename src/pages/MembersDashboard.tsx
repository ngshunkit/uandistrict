import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  Award, 
  TrendingUp, 
  LogOut,
  User
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Profile {
  full_name: string | null;
  email: string;
}

const MembersDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
          // Fetch user profile
          setTimeout(async () => {
            const { data, error } = await supabase
              .from('profiles')
              .select('full_name, email')
              .eq('id', session.user.id)
              .maybeSingle();

            if (error) {
              console.error('Error fetching profile:', error);
            } else if (data && isMounted) {
              setProfile(data);
            }
            
            if (isMounted) {
              setIsLoading(false);
            }
          }, 0);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        if (isMounted) {
          setIsLoading(false);
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

  if (isLoading) {
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
      <Header />
      
      <main className="flex-1 bg-gradient-subtle">
        {/* Welcome Section */}
        <section className="border-b border-border bg-background py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">
                  Welcome back{profile?.full_name ? `, ${profile.full_name}` : ''}!
                </h1>
                <p className="text-muted-foreground">
                  Access your exclusive member resources and training materials
                </p>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Quick Access Cards */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Quick Access</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Training Materials</CardTitle>
                    <CardDescription>
                      Access comprehensive training guides, videos, and resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      View Materials
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Events & Workshops</CardTitle>
                    <CardDescription>
                      Upcoming training sessions, webinars, and team meetings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      View Schedule
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Team Directory</CardTitle>
                    <CardDescription>
                      Connect with other members and mentors
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Browse Directory
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Resources</CardTitle>
                    <CardDescription>
                      Marketing materials, templates, and sales tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Access Resources
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Performance Tracker</CardTitle>
                    <CardDescription>
                      Monitor your progress and achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      View Stats
                    </Button>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>My Profile</CardTitle>
                    <CardDescription>
                      Update your information and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Guidelines Section */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Member Guidelines</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">•</span>
                        Access to exclusive training materials and certifications
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">•</span>
                        Monthly webinars and workshops with industry experts
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">•</span>
                        Marketing resources and campaign templates
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">•</span>
                        Performance tracking and analytics tools
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">•</span>
                        Direct communication with mentors and team leaders
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">•</span>
                        Priority access to district events and conventions
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      Getting Started
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">1.</span>
                        Complete your profile with accurate contact information
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">2.</span>
                        Review the onboarding materials in Training section
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">3.</span>
                        Schedule a meeting with your assigned mentor
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">4.</span>
                        Join the upcoming orientation webinar
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">5.</span>
                        Explore marketing resources and download templates
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">6.</span>
                        Set your quarterly goals in the Performance Tracker
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MembersDashboard;
