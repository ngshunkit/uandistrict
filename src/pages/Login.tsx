import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Login = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast.error(t("login.error"));
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex flex-1 items-center justify-center bg-gradient-subtle py-12">
        <div className="container px-4">
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <Lock className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{t("login.title")}</CardTitle>
                <CardDescription>
                  {t("login.subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="username">{t("login.username")}</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder={t("login.username")}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">{t("login.password")}</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder={t("login.password")}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <a href="#" className="text-primary hover:underline">
                      {t("login.forgot")}
                    </a>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : t("login.submit")}
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>
                    Don&apos;t have access?{" "}
                    <Link to="/jobs" className="text-primary hover:underline">
                      {t("nav.jobs")}
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              This portal is for authorized UAN District members only. Unauthorized access is prohibited.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
