import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, Target, Trophy, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Performance = () => {
  const kpis = [
    {
      icon: Award,
      value: "15+",
      label: "MDRT Qualifiers",
      period: "2024",
      trend: "+25%",
    },
    {
      icon: Trophy,
      value: "5",
      label: "COT Qualifiers",
      period: "2024",
      trend: "+40%",
    },
    {
      icon: Users,
      value: "500+",
      label: "Active Agents",
      period: "Current",
      trend: "+15%",
    },
    {
      icon: Target,
      value: "98%",
      label: "Target Achievement",
      period: "2024",
      trend: "Excellent",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Record-Breaking Year",
      description: "Achieved highest district performance in AIA Hong Kong with 15 MDRT and 5 COT qualifiers.",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Top District Award",
      description: "Recognized as Top Performing District for excellence in training and development.",
      icon: Award,
    },
    {
      year: "2022",
      title: "500 Agent Milestone",
      description: "Reached 500 active agents, marking significant growth and expansion.",
      icon: Users,
    },
    {
      year: "2021",
      title: "Innovation Excellence",
      description: "Launched digital transformation initiative, leading to 40% productivity increase.",
      icon: Star,
    },
    {
      year: "2020",
      title: "Resilience Award",
      description: "Maintained 100% business continuity during challenging times, supporting all agents.",
      icon: TrendingUp,
    },
  ];

  const achievements = [
    {
      category: "Team Growth",
      stats: [
        { label: "New Recruits (2024)", value: "120+" },
        { label: "Retention Rate", value: "92%" },
        { label: "Promotion Rate", value: "35%" },
      ],
    },
    {
      category: "Performance Excellence",
      stats: [
        { label: "Average Productivity Growth", value: "3x" },
        { label: "Client Satisfaction", value: "96%" },
        { label: "Sales Target Achievement", value: "115%" },
      ],
    },
    {
      category: "Recognition",
      stats: [
        { label: "District Awards", value: "8" },
        { label: "Individual Awards", value: "45+" },
        { label: "Convention Qualifiers", value: "20+" },
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
                Our Performance
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                Excellence through results, growth through dedication
              </p>
            </div>
          </div>
        </section>

        {/* KPI Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                2024 Key Performance Indicators
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Measurable results that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {kpis.map((kpi, index) => (
                <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                        <kpi.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
                      </div>
                    </div>
                    <div className="mb-2 text-4xl font-bold text-foreground">{kpi.value}</div>
                    <div className="mb-1 text-sm font-medium text-foreground">{kpi.label}</div>
                    <div className="mb-2 text-xs text-muted-foreground">{kpi.period}</div>
                    <Badge variant="secondary" className="text-xs">
                      {kpi.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Achievements by Category
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {achievements.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                          <span className="text-lg font-bold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Milestones & Recognition
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                A journey of consistent excellence and breakthrough achievements
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border last:before:hidden">
                    <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <milestone.icon className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <CardContent className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-border bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> Past performance is not indicative of future results. All performance figures are based on actual district data and comply with AIA Hong Kong and applicable Hong Kong regulations. Individual results may vary based on effort, market conditions, and other factors.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Performance;
