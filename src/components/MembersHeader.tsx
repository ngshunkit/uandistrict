import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, LogOut, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import uanLogo from "@/assets/uan-logo.png";

const MembersHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: "/members", label: t("members.nav.dashboard") },
    { path: "/members/training", label: t("members.nav.training") },
    { path: "/members/events", label: t("members.nav.events") },
    { path: "/members/resources", label: t("members.nav.resources") },
    { path: "/members/team", label: t("members.nav.team") },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success(t("members.signout.success"));
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || t("members.signout.error"));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/members" className="flex items-center space-x-3">
          <img src={uanLogo} alt="UAN District" className="h-12 w-auto" />
          <div className="hidden md:block">
            <div className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t("members.header.title")}
            </div>
            <div className="text-xs text-muted-foreground">{t("members.header.subtitle")}</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-1 lg:flex">
          {navItems.map(item => (
            <Link key={item.path} to={item.path}>
              <Button variant={isActive(item.path) ? "default" : "ghost"} className="text-sm">
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
              <DropdownMenuItem onClick={() => changeLanguage("en")}>
                EN - English {i18n.language === "en" && "✓"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("zh-HK")}>
                繁 - 繁體中文 {i18n.language === "zh-HK" && "✓"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("zh-CN")}>
                简 - 简体中文 {i18n.language === "zh-CN" && "✓"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => navigate("/members/profile")}>
                <User className="mr-2 h-4 w-4" />
                {t("members.nav.profile")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                {t("members.nav.signout")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
            {navItems.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                <Button variant={isActive(item.path) ? "default" : "ghost"} className="w-full justify-start">
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button 
              variant="ghost" 
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={() => {
                handleSignOut();
                setMobileMenuOpen(false);
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {t("members.nav.signout")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MembersHeader;
