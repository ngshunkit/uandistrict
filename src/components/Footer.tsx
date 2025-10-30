import { Link } from "react-router-dom";
import { Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import uanLogo from "@/assets/uan-logo.png";

const Footer = () => {
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
              Building careers and empowering agents across Hong Kong with world-class training and support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-muted-foreground transition-colors hover:text-primary">
                  What We Offer
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-muted-foreground transition-colors hover:text-primary">
                  Job Offering
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-muted-foreground transition-colors hover:text-primary">
                  Member Introduction
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/performance" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Performance
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Hong Kong</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">+852 XXXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@uan-district.com" className="text-muted-foreground hover:text-primary">
                  info@uan-district.com
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-4 flex space-x-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UAN District, AIA Hong Kong. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Disclaimer: This website is for informational purposes only and does not constitute an offer of insurance products or employment contract.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
