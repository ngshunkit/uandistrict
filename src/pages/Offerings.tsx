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
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Offerings = () => {
  const offerings = [
    {
      icon: GraduationCap,
      title: "Sales Coaching & Training",
      subtitle: "Learn from the Best",
      description: "Our comprehensive training programs teach you how to serve clients effectively and close sales with confidence. From fundamental techniques to advanced strategies, we equip you with proven methodologies used by top performers.",
      features: [
        "Client relationship building techniques",
        "Needs analysis and solution design",
        "Objection handling and closing strategies",
        "Product knowledge workshops",
        "Role-playing and practical simulations",
      ],
    },
    {
      icon: BookOpen,
      title: "Continuous Learning Programs",
      subtitle: "Never Stop Growing",
      description: "Access a structured curriculum designed to support your development at every career stage. Our programs combine classroom learning, online resources, and practical application.",
      features: [
        "New agent onboarding bootcamp",
        "Monthly skill-building workshops",
        "Industry certification support",
        "Leadership development track",
        "Advanced sales masterclasses",
      ],
    },
    {
      icon: Megaphone,
      title: "Latest Marketing Intelligence",
      subtitle: "Stay Ahead of the Curve",
      description: "Get instant access to cutting-edge marketing campaigns, proven materials, and best practices from across the industry. We keep you informed about trends, regulations, and opportunities.",
      features: [
        "Weekly market insights and updates",
        "Proven marketing campaign templates",
        "Digital marketing toolkit",
        "Social media content library",
        "Compliance-approved materials",
      ],
    },
    {
      icon: Wrench,
      title: "Professional Tools & Systems",
      subtitle: "Work Smarter, Not Harder",
      description: "Leverage state-of-the-art technology and systems to streamline your workflow, manage client relationships, and maximize your productivity.",
      features: [
        "Advanced CRM platform",
        "Lead generation tools",
        "Automated follow-up systems",
        "Performance analytics dashboard",
        "Mobile app for on-the-go access",
      ],
    },
    {
      icon: Users2,
      title: "Mentorship & Peer Support",
      subtitle: "You're Never Alone",
      description: "Connect with experienced mentors and a supportive peer network. Learn from those who have achieved what you aspire to, and grow alongside ambitious colleagues.",
      features: [
        "One-on-one mentor assignment",
        "Weekly team huddles",
        "Success story sharing sessions",
        "Peer accountability groups",
        "District-wide networking events",
      ],
    },
    {
      icon: Award,
      title: "Recognition & Incentives",
      subtitle: "Celebrate Your Success",
      description: "We celebrate achievements at every level. Our recognition programs and incentives motivate you to reach new heights while enjoying the rewards of your hard work.",
      features: [
        "MDRT/COT/TOT qualification support",
        "Monthly and annual awards",
        "Performance-based bonuses",
        "International convention opportunities",
        "Career milestone celebrations",
      ],
    },
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
                What We Offer
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                Comprehensive support designed to help you excel at every stage of your insurance career
              </p>
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
                Proven Results
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Our comprehensive support system delivers measurable outcomes
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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Ready to Access These Resources?
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/90">
                  Join UAN District and start benefiting from our comprehensive support system
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/jobs">
                    <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                      View Open Positions
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                      Learn More About Us
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
