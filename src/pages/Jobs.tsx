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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Financial Services Consultant",
      location: "Hong Kong",
      type: "Full-time",
      experience: "Entry Level",
      salary: "Competitive + Commission",
      postedDate: "2 days ago",
      status: "Open",
      summary: "Join our team as a Financial Services Consultant and help clients secure their financial future.",
      description: "We're seeking motivated individuals to join UAN District as Financial Services Consultants. You'll work with clients to understand their needs, recommend suitable insurance and financial solutions, and build long-term relationships.",
      responsibilities: [
        "Conduct comprehensive needs analysis with prospective clients",
        "Present and explain insurance products and financial planning solutions",
        "Develop and maintain a strong client base through networking and referrals",
        "Achieve sales targets while maintaining high ethical standards",
        "Participate in ongoing training and professional development",
      ],
      requirements: [
        "Bachelor's degree or equivalent work experience",
        "Strong communication and interpersonal skills",
        "Self-motivated with entrepreneurial mindset",
        "Willingness to obtain necessary industry licenses",
        "Fluency in English; Cantonese/Mandarin highly preferred",
      ],
      benefits: [
        "Comprehensive training program",
        "Unlimited earning potential with competitive commission structure",
        "Medical and life insurance coverage",
        "MDRT/COT/TOT qualification support",
        "Ongoing mentorship and career development",
      ],
    },
    {
      id: 2,
      title: "Senior Insurance Advisor",
      location: "Hong Kong",
      type: "Full-time",
      experience: "3+ years",
      salary: "HKD 30K - 50K + Commission",
      postedDate: "1 week ago",
      status: "Open",
      summary: "Experienced insurance professional wanted to lead client relationships and mentor junior team members.",
      description: "We're looking for an experienced Senior Insurance Advisor to join our high-performing team. You'll manage a portfolio of high-net-worth clients while mentoring new consultants.",
      responsibilities: [
        "Manage relationships with high-net-worth clients",
        "Develop sophisticated insurance and wealth management strategies",
        "Mentor and support junior team members",
        "Represent UAN District at networking and industry events",
        "Contribute to team sales targets and strategic initiatives",
      ],
      requirements: [
        "Minimum 3 years of proven success in insurance or financial services",
        "IIQE/HKCSI licenses (or equivalent)",
        "Established client network preferred",
        "MDRT qualification or track record of high performance",
        "Excellent presentation and relationship management skills",
      ],
      benefits: [
        "Leadership development opportunities",
        "Premium commission structure",
        "Comprehensive benefits package",
        "International convention trips",
        "Executive-level recognition programs",
      ],
    },
    {
      id: 3,
      title: "Team Leader / Unit Manager",
      location: "Hong Kong",
      type: "Full-time",
      experience: "5+ years",
      salary: "HKD 50K+ Base + Override",
      postedDate: "3 days ago",
      status: "Open",
      summary: "Build and lead your own team while growing your personal practice in a supportive district environment.",
      description: "Are you ready to take your career to the next level? As a Team Leader, you'll recruit, develop, and manage your own team of consultants while continuing to serve your own client base.",
      responsibilities: [
        "Recruit, train, and develop a team of financial consultants",
        "Set team goals and drive performance to achieve targets",
        "Provide ongoing coaching and mentorship",
        "Maintain and grow your personal client relationships",
        "Represent the team at district leadership meetings",
      ],
      requirements: [
        "Minimum 5 years in insurance with proven leadership ability",
        "Track record of MDRT/COT qualification",
        "Strong network and recruitment capabilities",
        "Relevant management certifications preferred",
        "Passion for developing others and building teams",
      ],
      benefits: [
        "Override commission on team production",
        "Management training and support",
        "Equity and profit-sharing opportunities",
        "District leadership role",
        "Priority access to company resources",
      ],
    },
  ];

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll be in touch soon.");
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
                Career Opportunities
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                Find your perfect role and start building the career you've always wanted
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Listing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Open Positions</h2>
                <p className="text-muted-foreground">{jobs.length} opportunities available</p>
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
                          View Details
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
                                Apply for this Position
                                <Send className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="outline" onClick={() => handleApply(job)}>
                        Apply Now
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
              <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
              <DialogDescription>
                Fill out the form below and we'll get back to you soon
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmitApplication} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" required placeholder="John Doe" />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" required placeholder="+852 XXXX XXXX" />
              </div>
              
              <div>
                <Label htmlFor="resume">Resume/CV *</Label>
                <Input id="resume" type="file" required accept=".pdf,.doc,.docx" />
              </div>
              
              <div>
                <Label htmlFor="message">Why are you interested in this position?</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interest and relevant experience..."
                  rows={4}
                />
              </div>

              <div className="text-xs text-muted-foreground">
                By submitting this form, you consent to the collection and use of your personal data in accordance with Hong Kong's Personal Data (Privacy) Ordinance.
              </div>
              
              <Button type="submit" className="w-full">
                Submit Application
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
