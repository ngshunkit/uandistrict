import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import uanLogo from "@/assets/uan-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/offerings", label: t("nav.offerings") },
    { path: "/jobs", label: t("nav.jobs") },
    { path: "/members", label: t("nav.members") },
    { path: "/performance", label: t("nav.performance") },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={uanLogo} alt="UAN District" className="h-12 w-auto" />
          <div className="hidden md:block">
            <div className="text-xs text-muted-foreground">AIA Hong Kong</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                className="text-sm"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                EN - English {i18n.language === 'en' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('zh-HK')}>
                繁 - 繁體中文 {i18n.language === 'zh-HK' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('zh-CN')}>
                简 - 简体中文 {i18n.language === 'zh-CN' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/login" className="hidden md:block">
            <Button variant="outline">{t("nav.login")}</Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-start">
                {t("nav.login")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
