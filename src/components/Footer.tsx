import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import uanLogo from "@/assets/uan-logo.png";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <img src={uanLogo} alt="UAN District" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-foreground">UAN District</div>
                <div className="text-xs text-muted-foreground">AIA Hong Kong</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-muted-foreground transition-colors hover:text-primary">
                  {t("nav.offerings")}
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-muted-foreground transition-colors hover:text-primary">
                  {t("nav.jobs")}
                </Link>
              </li>
              <li>
                <Link to="/members-team" className="text-muted-foreground transition-colors hover:text-primary">
                  {t("nav.members")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t("footer.resources")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/performance" className="text-muted-foreground transition-colors hover:text-primary">
                  {t("nav.performance")}
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {t("footer.disclaimer")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t("footer.contactTitle")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{t("footer.location")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{t("footer.phone")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@uan-district.com" className="text-muted-foreground hover:text-primary">
                  {t("footer.email")}
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-4 flex space-x-3">
              <a
                href="https://www.facebook.com/p/UAN-District-100064070500817/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://www.youtube.com/@uandistrict7120"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/uan.district/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {t("footer.disclaimerText")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
