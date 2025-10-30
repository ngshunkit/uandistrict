import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  TrendingUp,
  Award,
  Briefcase,
  Target,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "World-Class Training",
      description: "Comprehensive programs designed to transform you into a top-performing agent with proven sales methodologies.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from MDRT and COT qualifiers who have built successful careers and are committed to your growth.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Excellence",
      description: "Access cutting-edge marketing tools, campaigns, and materials to help you connect with clients effectively.",
    },
    {
      icon: Award,
      title: "Career Advancement",
      description: "Clear pathways to professional recognition with support for MDRT, COT, and TOT qualifications.",
    },
  ];

  const stats = [
    { value: "15+", label: "MDRT Qualifiers", icon: Award },
    { value: "500+", label: "Active Members", icon: Users },
    { value: "98%", label: "Satisfaction Rate", icon: Target },
    { value: "10+", label: "Years Excellence", icon: Briefcase },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground md:py-32">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Build Your Career with UAN District
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
                Join Hong Kong's premier insurance district at AIA. Transform your potential into success with comprehensive training, expert mentorship, and proven systems.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/jobs">
                  <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                    Explore Opportunities
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/offerings">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 flex justify-center">
                    <stat.icon className="h-8 w-8 text-primary-foreground/80" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Welcome to UAN District
              </h2>
              <p className="text-lg text-muted-foreground">
                At UAN District, we don't just recruit agents—we build careers. As a leading district within AIA Hong Kong, we combine the strength of a global insurance leader with personalized support, cutting-edge training, and a culture of excellence. Our mission is to empower you with the skills, knowledge, and resources needed to serve clients exceptionally and achieve your professional goals.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Why Choose UAN District?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We provide everything you need to thrive in the insurance industry
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                      <highlight.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="border-primary/20 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-6 text-6xl text-primary">"</div>
                  <blockquote className="mb-6 text-lg italic text-foreground md:text-xl">
                    Joining UAN District was the best career decision I've made. The training is exceptional, the support is genuine, and the opportunities are limitless. Within my first year, I achieved MDRT qualification and built lasting relationships with clients.
                  </blockquote>
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-lg font-bold text-primary-foreground">
                      JC
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-foreground">Jennifer Chan</div>
                      <div className="text-sm text-muted-foreground">MDRT Qualifier, Senior Agent</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-primary py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Join our team and discover what you're truly capable of achieving
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/jobs">
                <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                  View Open Positions
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/members">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
