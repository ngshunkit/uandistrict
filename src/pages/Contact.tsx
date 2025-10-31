import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { contactSchema } from "@/lib/validationSchemas";
import { z } from "zod";

// Rednote/小紅書 icon component (custom SVG)
const RednoteIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3h2v10h-2V5zm-4 4h2v6H8V9zm8 2h2v4h-2v-4z"/>
  </svg>
);

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.address.title"),
      content: t("contact.info.address.content"),
      delay: "0ms"
    },
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      content: t("contact.info.phone.content"),
      delay: "100ms"
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      content: t("contact.info.email.content"),
      delay: "200ms"
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      content: t("contact.info.hours.content"),
      delay: "300ms"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/uan.district/",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10",
      delay: "0ms"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/p/UAN-District-100064070500817/",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-600/10",
      delay: "100ms"
    },
    {
      name: "Rednote",
      icon: RednoteIcon,
      url: "https://xiaohongshu.com",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-500/10",
      delay: "200ms"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@uandistrict7120",
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-600/10",
      delay: "300ms"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      // Validate input data
      const validated = contactSchema.parse(rawData);

      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: validated.name,
          email: validated.email,
          phone: validated.phone || null,
          message: validated.message,
        });

      if (error) throw error;

      toast.success(t("contact.form.success"));
      e.currentTarget.reset();
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        const firstError = (error as any).issues[0];
        toast.error(firstError?.message || "Invalid form data");
      } else {
        toast.error(t("contact.form.error"));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-16 text-primary-foreground md:py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {t("contact.hero.title")}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t("contact.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-scale-in"
                  style={{ animationDelay: info.delay }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                        <info.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Social Media */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="animate-slide-in-right">
                <Card className="overflow-hidden shadow-lg">
                  <div className="h-2 bg-gradient-primary" />
                  <CardContent className="p-8">
                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                      {t("contact.form.title")}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contact.form.name")}</Label>
                        <Input 
                          id="name"
                          name="name"
                          required 
                          placeholder={t("contact.form.namePlaceholder")}
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact.form.email")}</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email" 
                          required 
                          placeholder={t("contact.form.emailPlaceholder")}
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          type="tel" 
                          placeholder={t("contact.form.phonePlaceholder")}
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">{t("contact.form.message")}</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder={t("contact.form.messagePlaceholder")}
                          rows={5}
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full transition-all duration-300 hover:scale-105"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media & Map */}
              <div className="space-y-8">
                {/* Social Media Links */}
                <Card className="overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <div className="h-2 bg-gradient-primary" />
                  <CardContent className="p-8">
                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                      {t("contact.social.title")}
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      {t("contact.social.subtitle")}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center justify-center gap-3 rounded-lg border border-border p-4 transition-all duration-300 hover:scale-105 hover:border-transparent hover:shadow-lg ${social.bgColor} animate-scale-in`}
                          style={{ animationDelay: social.delay }}
                        >
                          <social.icon className={`h-6 w-6 transition-colors ${social.color}`} />
                          <span className={`font-medium transition-colors ${social.color}`}>
                            {social.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Google Map */}
                <Card className="overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "400ms" }}>
                  <div className="h-2 bg-gradient-primary" />
                  <CardContent className="p-0">
                    <div className="relative h-80 overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3892842727947!2d114.20197857599486!3d22.30892884167803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f9c8f7e5e5%3A0x3c8e9c4e4f0e9c8e!2sAIRSIDE!5e0!3m2!1sen!2shk!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location"
                        className="absolute inset-0"
                      />
                      <a
                        href="https://www.google.com/maps/place/AIRSIDE,+2+Concorde+Rd,+Kai+Tak/@22.3089288,114.2019786,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <MapPin className="h-4 w-4" />
                        Open in Google Maps
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
