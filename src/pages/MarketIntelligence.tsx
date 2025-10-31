import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, MessageCircle, Users2, ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MarketIntelligence = () => {
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
                {t("offerings.subpages.market.title")}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t("offerings.subpages.market.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold">{t("offerings.subpages.market.overview.title")}</h2>
                <p className="text-lg text-muted-foreground">
                  {t("offerings.subpages.market.overview.description")}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.market.features.investment.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.market.features.investment.description")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <BarChart3 className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.market.features.comparison.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.market.features.comparison.description")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <MessageCircle className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.market.features.social.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.market.features.social.description")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Users2 className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{t("offerings.subpages.market.features.clientbase.title")}</h3>
                    <p className="text-muted-foreground">{t("offerings.subpages.market.features.clientbase.description")}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{t("offerings.subpages.market.benefits.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t("offerings.subpages.market.benefits.items", { returnObjects: true }) as string[]).map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{benefit}</span>
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
                  {t("offerings.subpages.market.cta.description")}
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

export default MarketIntelligence;
