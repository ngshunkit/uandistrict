import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Jobs = () => {
  const { t } = useTranslation();
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobs = [
    {
      id: 1,
      title: t("jobs.positions.advisor.title"),
      location: t("jobs.positions.advisor.location"),
      type: t("jobs.positions.advisor.type"),
      experience: "Entry Level",
      salary: "Competitive + Commission",
      postedDate: "2 days ago",
      status: "Open",
      summary: t("jobs.positions.advisor.summary"),
      description: t("jobs.positions.advisor.summary"),
      responsibilities: t("jobs.positions.advisor.responsibilities").split(","),
      requirements: t("jobs.positions.advisor.requirements").split(","),
      benefits: t("jobs.positions.advisor.benefits").split(","),
    },
    {
      id: 2,
      title: t("jobs.positions.senior.title"),
      location: t("jobs.positions.senior.location"),
      type: t("jobs.positions.senior.type"),
      experience: "3+ years",
      salary: "HKD 30K - 50K + Commission",
      postedDate: "1 week ago",
      status: "Open",
      summary: t("jobs.positions.senior.summary"),
      description: t("jobs.positions.senior.summary"),
      responsibilities: t("jobs.positions.senior.responsibilities").split(","),
      requirements: t("jobs.positions.senior.requirements").split(","),
      benefits: t("jobs.positions.senior.benefits").split(","),
    },
    {
      id: 3,
      title: t("jobs.positions.manager.title"),
      location: t("jobs.positions.manager.location"),
      type: t("jobs.positions.manager.type"),
      experience: "5+ years",
      salary: "HKD 50K+ Base + Override",
      postedDate: "3 days ago",
      status: "Open",
      summary: t("jobs.positions.manager.summary"),
      description: t("jobs.positions.manager.summary"),
      responsibilities: t("jobs.positions.manager.responsibilities").split(","),
      requirements: t("jobs.positions.manager.requirements").split(","),
      benefits: t("jobs.positions.manager.benefits").split(","),
    },
  ];

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("jobs.form.success"));
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {t("jobs.hero.title")}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t("jobs.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Listing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{t("jobs.hero.title")}</h2>
                <p className="text-muted-foreground">{jobs.length} {t("jobs.hero.subtitle")}</p>
              </div>
            </div>

            <div className="grid gap-6">
              {jobs.map((job) => (
                <Card key={job.id} className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{job.type}</Badge>
                      <Badge variant="outline">{job.experience}</Badge>
                      {job.status === "Open" && (
                        <Badge className="bg-green-500/10 text-green-700 hover:bg-green-500/20">
                          {job.status}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <CardDescription className="text-base">
                      {job.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4 text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="mr-2 h-4 w-4 text-primary" />
                        {job.experience}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="mr-2 h-4 w-4 text-primary" />
                        {job.salary}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4 text-primary" />
                        Posted {job.postedDate}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Dialog>
                        <Button
                          className="flex-1"
                          onClick={() => setSelectedJob(job)}
                        >
                          {t("jobs.apply")}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{selectedJob?.title}</DialogTitle>
                            <DialogDescription>
                              {selectedJob?.location} • {selectedJob?.type} • {selectedJob?.experience}
                            </DialogDescription>
                          </DialogHeader>
                          
                          {selectedJob && (
                            <div className="space-y-6">
                              <div>
                                <h3 className="mb-2 font-semibold text-foreground">About the Role</h3>
                                <p className="text-muted-foreground">{selectedJob.description}</p>
                              </div>

                              <div>
                                <h3 className="mb-2 font-semibold text-foreground">Key Responsibilities</h3>
                                <ul className="space-y-1">
                                  {selectedJob.responsibilities.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start">
                                      <ChevronRight className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                      <span className="text-sm text-muted-foreground">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="mb-2 font-semibold text-foreground">Requirements</h3>
                                <ul className="space-y-1">
                                  {selectedJob.requirements.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start">
                                      <ChevronRight className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                      <span className="text-sm text-muted-foreground">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="mb-2 font-semibold text-foreground">Benefits</h3>
                                <ul className="space-y-1">
                                  {selectedJob.benefits.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start">
                                      <ChevronRight className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                      <span className="text-sm text-muted-foreground">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <Button
                                className="w-full"
                                onClick={() => {
                                  setShowApplicationForm(true);
                                }}
                              >
                                {t("jobs.apply")}
                                <Send className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="outline" onClick={() => handleApply(job)}>
                        {t("jobs.apply")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Dialog */}
        <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{t("jobs.form.title")} {selectedJob?.title}</DialogTitle>
              <DialogDescription>
                {t("jobs.hero.subtitle")}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmitApplication} className="space-y-4">
              <div>
                <Label htmlFor="name">{t("jobs.form.name")}</Label>
                <Input id="name" required placeholder={t("jobs.form.name")} />
              </div>
              
              <div>
                <Label htmlFor="email">{t("jobs.form.email")}</Label>
                <Input id="email" type="email" required placeholder={t("jobs.form.email")} />
              </div>
              
              <div>
                <Label htmlFor="phone">{t("jobs.form.phone")}</Label>
                <Input id="phone" type="tel" required placeholder={t("jobs.form.phone")} />
              </div>
              
              <div>
                <Label htmlFor="resume">{t("jobs.form.resume")}</Label>
                <Input id="resume" type="file" required accept=".pdf,.doc,.docx" />
              </div>
              
              <div>
                <Label htmlFor="message">{t("jobs.form.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("jobs.form.message")}
                  rows={4}
                />
              </div>

              <div className="text-xs text-muted-foreground">
                {t("jobs.form.consent")}
              </div>
              
              <Button type="submit" className="w-full">
                {t("jobs.form.submit")}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;
