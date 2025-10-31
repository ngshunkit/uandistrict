import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, TrendingUp, ChevronRight, ChevronLeft, User, Banknote, Shield, Star, FileText, Home, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RetirementWorkshops = () => {
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
                {t("offerings.subpages.retirement.title")}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t("offerings.subpages.retirement.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold">{t("offerings.subpages.retirement.overview.title")}</h2>
                <p className="text-lg text-muted-foreground">
                  {t("offerings.subpages.retirement.overview.description")}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-12">
                <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0ms' }}>
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 inline-block">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <Calendar className="relative mx-auto h-12 w-12 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{t("offerings.subpages.retirement.features.regular.title")}</h3>
                    <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{t("offerings.subpages.retirement.features.regular.description")}</p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 inline-block">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <Users className="relative mx-auto h-12 w-12 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{t("offerings.subpages.retirement.features.senior.title")}</h3>
                    <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{t("offerings.subpages.retirement.features.senior.description")}</p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 inline-block">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <TrendingUp className="relative mx-auto h-12 w-12 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{t("offerings.subpages.retirement.features.leads.title")}</h3>
                    <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{t("offerings.subpages.retirement.features.leads.description")}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle>{t("offerings.subpages.retirement.benefits.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t("offerings.subpages.retirement.benefits.items", { returnObjects: true }) as string[]).map((benefit, idx) => (
                      <li key={idx} className="group flex items-start transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <ChevronRight className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-125" />
                        <span className="transition-colors duration-300 group-hover:text-primary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Three Retirement Products Section */}
        <section className="bg-gradient-to-br from-accent/5 to-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center animate-fade-in">
                <h2 className="mb-4 text-4xl font-bold">退休3寶</h2>
                <p className="text-lg text-muted-foreground">三大退休理財產品</p>
              </div>

              {/* Three Products Cards */}
              <div className="grid gap-8 md:grid-cols-3 mb-12">
                {[
                  {
                    number: 1,
                    title: "香港年金計劃",
                    description: "利用一筆過現金(保費)轉化為穩定及終身的現金流，為退休人士「自製長糧」。(60歲或以上人士)",
                    delay: 0
                  },
                  {
                    number: 2,
                    title: "安老按揭計劃",
                    description: "讓55歲或以上人士利用自住物業作為抵押品，獲取每月定額年金，終身毋須還款。",
                    delay: 100
                  },
                  {
                    number: 3,
                    title: "保單逆按計劃",
                    description: "讓55歲或以上人士利用壽險保單作為抵押品，提取每月年金，終身毋須還款。",
                    delay: 200
                  }
                ].map((product) => (
                  <Card 
                    key={product.number}
                    className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-3 animate-fade-in"
                    style={{ animationDelay: `${product.delay}ms` }}
                  >
                    {/* Number badge */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20" />
                    <div className="relative">
                      <div className="flex items-center justify-center pt-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                            <span className="text-2xl font-bold text-white">{product.number}</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary mt-4" />
                    </div>
                    <CardContent className="p-6 pt-8 text-center">
                      <h3 className="mb-4 text-xl font-bold transition-colors duration-300 group-hover:text-primary">{product.title}</h3>
                      <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                <p className="text-lg font-medium text-foreground">目的：確保申請人在退休後可獲得穩定的收入</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Product Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl space-y-16">
              
              {/* Hong Kong Annuity Scheme Details */}
              <div className="animate-fade-in">
                <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">香港年金計劃詳情</h2>
                <p className="mb-8 text-center text-muted-foreground">香港年金有限公司由外匯基金全資擁有，提供終身保證每月年金金額作為穩定收入。</p>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <User className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-3 text-lg font-semibold">申請資格</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>60歲或以上</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>香港永久性居民</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Banknote className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-3 text-lg font-semibold">保費範圍</h3>
                      <p className="text-sm text-muted-foreground mb-2">整付保費：</p>
                      <p className="text-lg font-bold text-primary">50,000 - 5,000,000 港元</p>
                    </CardContent>
                  </Card>

                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Shield className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-3 text-lg font-semibold">保障期間</h3>
                      <p className="text-sm text-muted-foreground mb-2">保障年期及年金入息期：</p>
                      <p className="text-lg font-bold text-primary">終身</p>
                    </CardContent>
                  </Card>

                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Star className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-3 text-lg font-semibold">特別提取</h3>
                      <p className="text-sm text-muted-foreground">最高可提取百分百已繳保費的餘額以支付醫療相關開支</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Reverse Mortgage Details */}
              <div className="animate-fade-in">
                <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">安老按揭計劃詳情</h2>
                
                <div className="grid gap-8 lg:grid-cols-3 mb-8">
                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <User className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-lg font-semibold">申請資格</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>55歲或以上香港身份證持有人</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>物業為香港住宅物業，樓齡50年或以下</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>物業為借款人作為唯一受益人或以聯權共有形式擁有</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Star className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-lg font-semibold">主要特色</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>靈活年金年期：10年、15年、20年或終身</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>可申請一筆過貸款滿足個人需要</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>終身安居於原有物業</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>終身毋須還款</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Home className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-lg font-semibold">好處</h3>
                      <p className="text-sm text-muted-foreground">利用他們在本港的自住住宅物業作為抵押品，從貸款機構獲取安老按揭貸款，借款人更可繼續住在該物業內毋須遷出，直至百年歸老(有錢又有權)</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-l-4 border-l-primary bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-lg font-semibold">貸款終止時的安排</h3>
                    <p className="text-sm text-muted-foreground">當安老按揭貸款被終止時，物業業主(或其遺產代理人)可優先全數清還安老按揭貸款以贖回抵押物業，否則貸款機構將出售抵押物業以清還安老按揭貸款。如有差額，將根據與貸款機構的保險安排，由按證保險公司承擔。如有任何餘額，將退還給物業業主(或其遺產代理人)。</p>
                  </CardContent>
                </Card>
              </div>

              {/* Policy Reverse Mortgage Details */}
              <div className="animate-fade-in">
                <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">保單逆按計劃詳情</h2>
                <p className="mb-8 text-center text-muted-foreground">為持有壽險保單的長者提供每月定額年金，終身毋須還款。</p>
                
                <div className="grid gap-8 lg:grid-cols-3">
                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <User className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-lg font-semibold">申請資格</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>55歲或以上香港身份證持有人</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>持有有效人壽保險保單</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>保單的受益人為申請人本人或其配偶</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-lg font-semibold">主要特色</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>每月固定年金，保證終身領取</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>保單價值高於一定金額可申請</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>毋須出售保單，保單價值仍歸長者所有</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <CreditCard className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-lg font-semibold">資金運用</h3>
                      <p className="text-sm text-muted-foreground mb-3">提取的資金可用於：</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>醫療開支</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>日常消費</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>提升退休生活品質</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

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
                  {t("offerings.subpages.retirement.cta.description")}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/jobs">
                    <Button size="lg" className="bg-white text-primary shadow-lg hover:bg-white/95 hover:shadow-xl hover:scale-105">
                      {t("offerings.cta.apply")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/contact#contact-form">
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

export default RetirementWorkshops;
