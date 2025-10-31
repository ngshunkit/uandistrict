import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Members = () => {
  const { t } = useTranslation();
  
  const leadership = [
    {
      name: "David Wong",
      title: t("membersTeam.leadership.davidTitle"),
      specialties: [t("membersTeam.leadership.specialty.leadership"), t("membersTeam.leadership.specialty.teamBuilding"), t("membersTeam.leadership.specialty.mdrt")],
      bio: t("membersTeam.leadership.davidBio"),
      initials: "DW",
      linkedin: "#",
      email: "david.wong@example.com",
    },
    {
      name: "Sarah Chen",
      title: t("membersTeam.leadership.sarahTitle"),
      specialties: [t("membersTeam.leadership.specialty.training"), t("membersTeam.leadership.specialty.mentorship"), t("membersTeam.leadership.specialty.mdrt")],
      bio: t("membersTeam.leadership.sarahBio"),
      initials: "SC",
      linkedin: "#",
      email: "sarah.chen@example.com",
    },
    {
      name: "Michael Lee",
      title: t("membersTeam.leadership.michaelTitle"),
      specialties: [t("membersTeam.leadership.specialty.businessDev"), t("membersTeam.leadership.specialty.highNetWorth"), t("membersTeam.leadership.specialty.cot")],
      bio: t("membersTeam.leadership.michaelBio"),
      initials: "ML",
      linkedin: "#",
      email: "michael.lee@example.com",
    },
  ];

  const members = [
    {
      name: "Jennifer Chan",
      role: t("membersTeam.team.jenniferRole"),
      team: t("membersTeam.team.jenniferTeam"),
      achievements: [t("membersTeam.team.achievements.mdrt"), t("membersTeam.team.achievements.topRecruiter")],
      initials: "JC",
    },
    {
      name: "Kevin Tam",
      role: t("membersTeam.team.kevinRole"),
      team: t("membersTeam.team.kevinTeam"),
      achievements: [t("membersTeam.team.achievements.rising")],
      initials: "KT",
    },
    {
      name: "Amy Liu",
      role: t("membersTeam.team.amyRole"),
      team: t("membersTeam.team.amyTeam"),
      achievements: [t("membersTeam.team.achievements.mdrt"), t("membersTeam.team.achievements.mentorAward")],
      initials: "AL",
    },
    {
      name: "Raymond Ng",
      role: t("membersTeam.team.raymondRole"),
      team: t("membersTeam.team.raymondTeam"),
      achievements: [t("membersTeam.leadership.specialty.cot"), t("membersTeam.team.achievements.teamLeader")],
      initials: "RN",
    },
    {
      name: "Grace Cheung",
      role: t("membersTeam.team.graceRole"),
      team: t("membersTeam.team.graceTeam"),
      achievements: [t("membersTeam.team.achievements.outstanding")],
      initials: "GC",
    },
    {
      name: "Peter Lam",
      role: t("membersTeam.team.peterRole"),
      team: t("membersTeam.team.peterTeam"),
      achievements: [t("membersTeam.team.achievements.mdrt")],
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
                {t("membersTeam.hero.title")}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t("membersTeam.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {t("membersTeam.leadership.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {t("membersTeam.hero.subtitle")}
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
                {t("membersTeam.team.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {t("membersTeam.hero.subtitle")}
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
