import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  TrendingUp,
  Megaphone,
  Wrench,
  Users2,
  Award,
  BookOpen,
  BarChart,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Offerings = () => {
  const { t } = useTranslation();
  
  const offerings = [
    {
      icon: GraduationCap,
      title: t("offerings.categories.coaching.title"),
      subtitle: t("offerings.categories.coaching.title"),
      description: t("offerings.categories.coaching.description"),
      features: t("offerings.categories.coaching.points", { returnObjects: true }) as string[],
    },
    {
      icon: BookOpen,
      title: t("offerings.categories.training.title"),
      subtitle: t("offerings.categories.training.title"),
      description: t("offerings.categories.training.description"),
      features: t("offerings.categories.training.points", { returnObjects: true }) as string[],
    },
    {
      icon: Megaphone,
      title: t("offerings.categories.marketing.title"),
      subtitle: t("offerings.categories.marketing.title"),
      description: t("offerings.categories.marketing.description"),
      features: t("offerings.categories.marketing.points", { returnObjects: true }) as string[],
    },
    {
      icon: Wrench,
      title: t("offerings.categories.tools.title"),
      subtitle: t("offerings.categories.tools.title"),
      description: t("offerings.categories.tools.description"),
      features: t("offerings.categories.tools.points", { returnObjects: true }) as string[],
    },
    {
      icon: Users2,
      title: t("offerings.categories.support.title"),
      subtitle: t("offerings.categories.support.title"),
      description: t("offerings.categories.support.description"),
      features: t("offerings.categories.support.points", { returnObjects: true }) as string[],
    },
    {
      icon: Award,
      title: t("offerings.categories.development.title"),
      subtitle: t("offerings.categories.development.title"),
      description: t("offerings.categories.development.description"),
      features: t("offerings.categories.development.points", { returnObjects: true }) as string[],
    },
  ];

  const subPages = [
    {
      icon: Users2,
      title: t("offerings.subpages.retirement.title"),
      description: t("offerings.subpages.retirement.subtitle"),
      link: "/offerings/retirement-workshops"
    },
    {
      icon: Megaphone,
      title: t("offerings.subpages.social.title"),
      description: t("offerings.subpages.social.subtitle"),
      link: "/offerings/social-media-skills"
    },
    {
      icon: BookOpen,
      title: t("offerings.subpages.training.title"),
      description: t("offerings.subpages.training.subtitle"),
      link: "/offerings/core-agent-training"
    },
    {
      icon: BarChart,
      title: t("offerings.subpages.market.title"),
      description: t("offerings.subpages.market.subtitle"),
      link: "/offerings/market-intelligence"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {t("offerings.hero.title")}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t("offerings.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Programs Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {t("offerings.subpages.sectionTitle")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {t("offerings.subpages.sectionSubtitle")}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {subPages.map((subPage, index) => (
                <Link key={index} to={subPage.link}>
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                        <subPage.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{subPage.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{subPage.description}</p>
                      <div className="flex items-center text-sm font-medium text-primary">
                        {t("offerings.subpages.learnMore")}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:gap-12">
              {offerings.map((offering, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="grid md:grid-cols-[auto_1fr] md:gap-8">
                    <div className="flex items-center justify-center bg-gradient-primary p-8 md:w-48">
                      <offering.icon className="h-16 w-16 text-primary-foreground md:h-20 md:w-20" />
                    </div>
                    <div className="p-6 md:py-8 md:pr-8">
                      <CardHeader className="p-0 pb-4">
                        <div className="mb-2 text-sm font-medium text-primary">
                          {offering.subtitle}
                        </div>
                        <CardTitle className="text-2xl md:text-3xl">
                          {offering.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {offering.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ul className="space-y-2">
                          {offering.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {t("offerings.hero.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {t("offerings.hero.subtitle")}
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-8 text-center">
                  <BarChart className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <div className="mb-2 text-4xl font-bold text-foreground">92%</div>
                  <div className="text-sm text-muted-foreground">
                    First-year retention rate
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <TrendingUp className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <div className="mb-2 text-4xl font-bold text-foreground">3x</div>
                  <div className="text-sm text-muted-foreground">
                    Average productivity growth
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <div className="mb-2 text-4xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">
                    MDRT qualifiers annually
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="border-primary/20 bg-gradient-to-br from-primary via-primary to-accent shadow-elegant">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  {t("offerings.cta.title")}
                </h2>
                <p className="mb-8 text-lg text-white/95">
                  {t("offerings.hero.subtitle")}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/jobs">
                    <Button size="lg" className="bg-white text-primary shadow-lg hover:bg-white/95 hover:shadow-xl hover:scale-105">
                      {t("offerings.cta.apply")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button size="lg" className="border-2 border-white/90 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white">
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

export default Offerings;
