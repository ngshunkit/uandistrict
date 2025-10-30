import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Members = () => {
  const leadership = [
    {
      name: "David Wong",
      title: "District Manager",
      specialties: ["Leadership", "Team Building", "MDRT"],
      bio: "With over 15 years in the insurance industry, David has built UAN District into one of AIA Hong Kong's top-performing districts. A 10-time MDRT qualifier and 3-time COT achiever, he is passionate about developing future leaders.",
      initials: "DW",
      linkedin: "#",
      email: "david.wong@example.com",
    },
    {
      name: "Sarah Chen",
      title: "Senior Unit Manager",
      specialties: ["Training", "Mentorship", "MDRT"],
      bio: "Sarah leads our flagship training programs and has personally mentored over 50 agents to MDRT qualification. Her innovative approach to sales coaching has become a model across the organization.",
      initials: "SC",
      linkedin: "#",
      email: "sarah.chen@example.com",
    },
    {
      name: "Michael Lee",
      title: "Senior Unit Manager",
      specialties: ["Business Development", "High Net Worth", "COT"],
      bio: "Specializing in high-net-worth clientele, Michael brings expertise in sophisticated financial planning and wealth management. A consistent COT qualifier, he shares his strategies with the team.",
      initials: "ML",
      linkedin: "#",
      email: "michael.lee@example.com",
    },
  ];

  const members = [
    {
      name: "Jennifer Chan",
      role: "Senior Financial Consultant",
      team: "Sales Excellence",
      achievements: ["MDRT 2024", "Top Recruiter"],
      initials: "JC",
    },
    {
      name: "Kevin Tam",
      role: "Financial Consultant",
      team: "Growth Team",
      achievements: ["Rising Star 2024"],
      initials: "KT",
    },
    {
      name: "Amy Liu",
      role: "Senior Financial Consultant",
      team: "Professional Development",
      achievements: ["MDRT 2024", "Mentor Award"],
      initials: "AL",
    },
    {
      name: "Raymond Ng",
      role: "Unit Manager",
      team: "Leadership Track",
      achievements: ["COT 2024", "Team Leader"],
      initials: "RN",
    },
    {
      name: "Grace Cheung",
      role: "Financial Consultant",
      team: "Client Services",
      achievements: ["Outstanding Performance"],
      initials: "GC",
    },
    {
      name: "Peter Lam",
      role: "Senior Financial Consultant",
      team: "Business Development",
      achievements: ["MDRT 2024"],
      initials: "PL",
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
                Meet Our Team
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                Driven professionals committed to excellence and your success
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Leadership Team
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Our experienced leaders are here to guide, support, and inspire you
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {leadership.map((leader, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="h-32 bg-gradient-primary" />
                  <CardContent className="relative -mt-16 px-6 pb-6">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-lg">
                        {leader.initials}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="mb-1 text-xl font-bold text-foreground">{leader.name}</h3>
                      <p className="mb-3 text-sm text-primary">{leader.title}</p>
                      
                      <div className="mb-4 flex flex-wrap justify-center gap-2">
                        {leader.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="mb-4 text-sm text-muted-foreground">{leader.bio}</p>
                      
                      <div className="flex justify-center space-x-2">
                        <a
                          href={leader.linkedin}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:bg-primary/10"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-4 w-4 text-primary" />
                        </a>
                        <a
                          href={`mailto:${leader.email}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:bg-primary/10"
                          aria-label="Email"
                        >
                          <Mail className="h-4 w-4 text-primary" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our Team Members
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                High-performing professionals making a difference every day
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center space-x-4">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-primary text-lg font-bold text-primary-foreground">
                        {member.initials}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-xs text-primary">{member.team}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Members;
