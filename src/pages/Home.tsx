import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Target, Users, TrendingUp, Award, Briefcase, Rocket, Shield, Zap, ArrowRight, Sparkles, Heart, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PhotoGallery } from "@/components/home/PhotoGallery";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { HexagonPattern, FloatingHexagon } from "@/components/home/HexagonPattern";
import aiaBackground from "@/assets/aia-background.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import trophiesBackground from "@/assets/trophies-background.jpg";
const Home = () => {
  const {
    t
  } = useTranslation();
  const stats = [{
    value: "15+",
    label: "MDRT Members",
    icon: Award
  }, {
    value: "40+",
    label: "Team Members",
    icon: Users
  }, {
    value: "98%",
    label: "Client Satisfaction",
    icon: Target
  }, {
    value: "30+",
    label: "Years Excellence",
    icon: Briefcase
  }];
  const services = [{
    icon: Users,
    title: "Retirement Workshops",
    description: "Regular lectures and high‑motivation workshops on retirement planning to attract senior clients and deliver steady monthly leads for agents."
  }, {
    icon: Sparkles,
    title: "Social Media Skills",
    description: "Practical training in vibe coding, prompt engineering, AI‑powered video editing, and image/video generation to create standout posts and posters."
  }, {
    icon: Award,
    title: "Core Agent Training",
    description: "Twice‑weekly sessions covering underwriting rules, product knowledge, needs analysis, client psychology, objection handling, claims, and essential tools."
  }, {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Ongoing briefings on investment trends from our investment team, cross‑company product comparisons, current social topics, and client‑base development support."
  }];
  const awards = [
    { year: "2006", title: "Districts of the Year, 1st Runner-up" },
    { year: "2015", title: "Corporate Solutions, Top Districts, 1st Runner-up" },
    { year: "2016", title: "AIA PT Top Sales, Retail Business, Top Agency Units, Champion" },
    { year: "2017", title: "ULB Award, Top Districts by Case, 1st Runner-up" },
    { year: "2018", title: "Corporate Solutions Award, District of the Year (with Agency Members from 50 to 100), 1st Runner-up" },
    { year: "2019", title: "CS – Pension Produce District Award, Top Super Grand District of the Year, Champion" },
    { year: "2025", title: "District Award (By ANP), UNI ANDY NG, 3rd Runner-up" },
    { year: "2025", title: "District Award (By Case Count), UNI ANDY NG, 3rd Runner-up" },
    { year: "2025", title: "District Award (By Distinct Producer), UNI ANDY NG, 2nd Runner-up" },
    { year: "2025", title: "CS Monthly Ranking (Regional Director Group), UNI ANDY NG, 7th Runner-up" },
    { year: "2025", title: "CS Monthly Ranking (Sales Manager Group, Individual Pension Business — FYC + Asset Transfer Total), ANDY NG — UNI ANDY NG, Champion" },
    { year: "2025", title: "CS Monthly Ranking (Sales Manager Group, Individual Pension Business — Case Count), ANDY NG — UNI ANDY NG, Champion" },
    { year: "2025", title: "CS Monthly Ranking (Sales Supervisor Group, Individual Pension Business — FYC + Asset Transfer Total), ANDY NG — UNI ANDY NG, 7th Runner-up" },
    { year: "2025", title: "CS Monthly Ranking (Financial Planning Consultant Group, FYC + Asset Transfer Total), KATIE CHAN — UNI ANDY NG, 9th Runner-up" },
    { year: "2025", title: "CS Monthly Ranking (Financial Planning Consultant Group, Case Count), KATIE CHAN — UNI ANDY NG, 3rd Runner-up" },
  ];
  const testimonials = [{
    quote: "Our team may not be large, but we are an MDRT district because we specialize in serving high-net-worth clients and providing group insurance. This focus enables higher commissions with a lighter workload.",
    name: "Sarah Chen",
    role: "Senior Unit Manager",
    company: "UAN District"
  }, {
    quote: "The training program provides a practical and systematic approach that helps agents pick up skills and follow market trends. The trainers are specialists in their respective areas. Therefore, I find the training highly practical and useful.",
    name: "Michael Leung",
    role: "Wealth Management Manager",
    company: "UAN District"
  }, {
    quote: "Our district provides comprehensive training and support for agents. We also have a regional secretary to assist with administrative processing, management tasks, and inquiries. While delivering training, my goal is to offer a high degree of flexibility; therefore, our district does not require official working hours.",
    name: "Andy Ng",
    role: "District Director",
    company: "UAN District"
  }];
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const values = [{
    label: "Excellence",
    icon: Sparkles
  }, {
    label: "Integrity",
    icon: Shield
  }, {
    label: "Innovation",
    icon: Zap
  }, {
    label: "Community",
    icon: Heart
  }];
  const blogPosts = [{
    title: "Building a Sustainable Insurance Practice",
    excerpt: "Learn the key strategies for creating long-term client relationships and recurring revenue.",
    date: "Oct 15, 2025"
  }, {
    title: "The Power of Team Culture in Sales",
    excerpt: "Discover how a supportive team environment accelerates individual and collective success.",
    date: "Oct 10, 2025"
  }, {
    title: "Digital Marketing for Financial Advisors",
    excerpt: "Master modern marketing techniques to attract and convert high-value clients online.",
    date: "Oct 5, 2025"
  }];
  return <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-dusk py-24 md:py-32 lg:py-40">
          <HexagonPattern />

          {/* Floating Hexagons */}
          <div className="absolute top-20 right-10">
            <FloatingHexagon delay={0} />
          </div>
          <div className="absolute bottom-32 left-20">
            <FloatingHexagon delay={1} />
          </div>
          <div className="absolute top-40 right-1/4">
            <FloatingHexagon delay={2} />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                Empowering Insurance Professionals
              </Badge>

              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-7xl animate-fade-up">
                UAN District
              </h1>

              <p className="mb-10 text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
                Join Hong Kong's premier insurance district. Build your career with world-class training, expert
                mentorship, and a community dedicated to your success.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/jobs">
                  <Button size="lg" className="group">
                    Join Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/offerings">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                    Our Offerings
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mx-auto mt-20 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => <div key={index} className="group text-center animate-fade-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                      <stat.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white font-display tabular-nums">{stat.value}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Trusted By / Logo Strip */}
        <section className="relative py-12 border-y border-border overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: `url(${aiaBackground})`
        }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
          <div className="container relative mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-8">
              Trusted by Leading Organizations
            </p>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              <a href="https://www.mdrt.org" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-foreground hover:text-primary opacity-50 hover:opacity-100 transition-all duration-300">
                MDRT
              </a>
              <a href="https://members.mdrt.org/zh-cht/about-MDRT/for-companies/top-25-companies-by-cot-members/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-foreground hover:text-primary opacity-50 hover:opacity-100 transition-all duration-300">
                COT
              </a>
              <a href="https://www.aia.com.hk" target="_blank" rel="noopener noreferrer" className="text-4xl font-bold text-primary transition-all duration-300 hover:scale-110">
                AIA
              </a>
              <a href="https://www.mdrt.org/tot" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-foreground hover:text-primary opacity-50 hover:opacity-100 transition-all duration-300">
                TOT
              </a>
              <a href="https://www.ia.org.hk" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-foreground hover:text-primary opacity-50 hover:opacity-100 transition-all duration-300">
                IA
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent-warm/50 text-foreground border-accent-warm">What We Offer</Badge>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">Customer base development
Professional training </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive support designed to accelerate your growth and maximize your potential.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => <Card key={index} className="group border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-ocean shadow-md group-hover:shadow-glow transition-all">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Photo Rolling Gallery */}
        <section className="py-20 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Our Community</Badge>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">Life at UAN District</h2>
            </div>
          </div>

          <PhotoGallery images={galleryImages} />
        </section>

        {/* Awards & Achievements */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${trophiesBackground})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
          
          <div className="container relative mx-auto px-4">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/50">Excellence Recognized</Badge>
              <h2 className="mb-6 font-display text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent md:text-5xl drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                Awards & Achievements
              </h2>
              <p className="text-lg text-yellow-100/80">
                A legacy of excellence spanning nearly two decades.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4 md:gap-6">
                {awards.map((award, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-gradient-to-r from-yellow-900/30 via-yellow-800/20 to-yellow-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <div className="flex-shrink-0">
                        <div className="text-3xl font-bold bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent font-display drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                          {award.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-yellow-50 text-base md:text-lg leading-relaxed group-hover:text-yellow-100 transition-colors">
                          {award.title}
                        </p>
                      </div>
                      <Award className="h-6 w-6 text-yellow-400/60 group-hover:text-yellow-300 transition-colors flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-yellow-200/60 text-sm mt-8 italic">
                Note: This is only a partial list and does not include all the awards we have received.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Success Stories</Badge>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">What Our Team Says</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </section>

        {/* About / Values */}
        <section className="py-20 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-accent-warm/50 text-foreground border-accent-warm">Our Story</Badge>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                  Building the Future of Insurance Together
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  UAN District is more than a workplace—it's a community of driven professionals committed to
                  excellence, innovation, and making a meaningful impact in people's lives.
                </p>
                <p className="text-lg text-muted-foreground">
                  Since our founding, we've helped hundreds of advisors build thriving practices while maintaining the
                  highest standards of integrity and client service.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => <Card key={index} className="border-accent-warm/30 bg-accent-warm/20 hover:bg-accent-warm/30 transition-all duration-300 text-center p-6">
                    <value.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-display font-semibold text-lg text-foreground">{value.label}</h3>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* Blog/Insights */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Latest Insights</Badge>
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">From the Blog</h2>
              </div>
              <Link to="/blog" className="text-accent hover:text-accent/80 font-medium hidden sm:block">
                View All →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => <Card key={index} className="group border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                    <CardTitle className="font-display text-xl group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center text-accent font-medium text-sm">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-20 bg-gradient-subtle border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest insights, tips, and opportunities delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1 rounded-xl border-2 h-12" />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-ocean py-20 md:py-32">
          <HexagonPattern />

          <div className="container relative mx-auto px-4 text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Ready to Begin?</Badge>

            <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-5xl">Launch Your Career With Us</h2>

            <p className="mb-10 text-lg text-white/90 max-w-2xl mx-auto">
              Join a community of high-achievers and start building the career you've always wanted.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/jobs">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/members">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                  See the Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Home;