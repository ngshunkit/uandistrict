import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Video, Image, ChevronRight, ChevronLeft, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

const SocialMediaSkills = () => {
  const { t } = useTranslation();

  const videos = [
    {
      title: "Poster Generation",
      src: "/videos/poster-generation.mp4"
    },
    {
      title: "Vibe Coding",
      src: "/videos/vibe-coding.mp4"
    },
    {
      title: "Video Editing",
      src: "/videos/video-editing.mp4"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24 animate-fade-in">
          <div className="container mx-auto px-4">
            <Link to="/offerings" className="mb-6 inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t("offerings.subpages.back")}
            </Link>
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {t("offerings.subpages.social.title")}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t("offerings.subpages.social.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold">{t("offerings.subpages.social.overview.title")}</h2>
                <p className="text-lg text-muted-foreground">
                  {t("offerings.subpages.social.overview.description")}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-4 mb-12">
                <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0ms' }}>
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                      <div className="relative flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Sparkles className="h-8 w-8 text-white transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{t("offerings.subpages.social.features.vibe.title")}</h3>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{t("offerings.subpages.social.features.vibe.description")}</p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                      <div className="relative flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Sparkles className="h-8 w-8 text-white transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{t("offerings.subpages.social.features.prompt.title")}</h3>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{t("offerings.subpages.social.features.prompt.description")}</p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                      <div className="relative flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Video className="h-8 w-8 text-white transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{t("offerings.subpages.social.features.video.title")}</h3>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{t("offerings.subpages.social.features.video.description")}</p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                      <div className="relative flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Image className="h-8 w-8 text-white transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{t("offerings.subpages.social.features.image.title")}</h3>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{t("offerings.subpages.social.features.image.description")}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-12 animate-fade-in overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <CardTitle>{t("offerings.subpages.social.benefits.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(t("offerings.subpages.social.benefits.items", { returnObjects: true }) as string[]).map((benefit, idx) => (
                      <li key={idx} className="flex items-start animate-fade-in" style={{ animationDelay: `${500 + idx * 50}ms` }}>
                        <ChevronRight className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 hover:translate-x-1" />
                        <span className="transition-colors duration-300 hover:text-primary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Video Demonstrations */}
              <div className="mb-12">
                <h2 className="mb-8 text-3xl font-bold text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
                  Feature Demonstrations
                </h2>
                <div className="space-y-8">
                  {videos.map((video, index) => (
                    <VideoPlayer key={index} video={video} index={index} />
                  ))}
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
                  {t("offerings.subpages.social.cta.description")}
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

const VideoPlayer = ({ video, index }: { video: { title: string; src: string }; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Force play after component mounts
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
          // Autoplay was prevented, video will show play button
        });
      }
    }
  }, []);

  return (
    <div className="group animate-fade-in" style={{ animationDelay: `${700 + index * 100}ms` }}>
      <h3 className="mb-4 text-2xl font-semibold text-foreground">
        {video.title}
      </h3>
      <Card className="overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-muted overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src={`/uandistrict${video.src}`}
            >
              <source src={`/uandistrict${video.src}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialMediaSkills;
