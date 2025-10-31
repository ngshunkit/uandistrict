import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Shield, Target, MessageSquare, FileCheck, Wrench, ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CoreAgentTraining = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4">
            <Link to="/offerings" className="mb-6 inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t("offerings.subpages.back")}
            </Link>
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {t("offerings.subpages.training.title")}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t("offerings.subpages.training.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold">{t("offerings.subpages.training.overview.title")}</h2>
                <p className="text-lg text-muted-foreground">
                  {t("offerings.subpages.training.overview.description")}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <Shield className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.training.features.underwriting.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.training.features.underwriting.description")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <BookOpen className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.training.features.product.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.training.features.product.description")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Target className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.training.features.needs.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.training.features.needs.description")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <MessageSquare className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.training.features.psychology.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.training.features.psychology.description")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <MessageSquare className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.training.features.objection.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.training.features.objection.description")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <FileCheck className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.training.features.claims.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.training.features.claims.description")}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{t("offerings.subpages.training.schedule.title")}</CardTitle>
                  <CardDescription>{t("offerings.subpages.training.schedule.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t("offerings.subpages.training.schedule.items", { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  {t("offerings.cta.title")}
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/90">
                  {t("offerings.subpages.training.cta.description")}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/jobs">
                    <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                      {t("offerings.cta.apply")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                      {t("offerings.cta.contact")}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoreAgentTraining;
