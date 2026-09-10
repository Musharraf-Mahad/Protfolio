import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  FolderGit2,
  GraduationCap,
  Sparkles,
  Mail,
  Download
} from "lucide-react";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import NavItem from "../navigation/NavItem";
import { GithubIcon, LinkedinIcon, XIcon } from "../ui/Icons";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "skills", label: "Skills", icon: Code2, href: "#skills" },
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "education", label: "Education", icon: GraduationCap, href: "#education" },
  { id: "learning", label: "Learning", icon: Sparkles, href: "#learning" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" }
];

export default function MobileHeader({ activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github":
        return <GithubIcon size={18} />;
      case "Linkedin":
        return <LinkedinIcon size={18} />;
      case "Twitter":
        return <XIcon size={18} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Sticky Mobile Top Bar */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-50 bg-sidebar/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
          className="flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-accent">
            <img
              src={profile.avatar || "/images/profile/profile.jpg"}
              alt={profile.name}
              onError={(e) => {
                e.currentTarget.src = "/images/profile/profile.jpg";
              }}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-primary leading-tight">
              {profile.name}
            </div>
            <div className="text-[11px] font-mono text-accent leading-none">
              {profile.title}
            </div>
          </div>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={isOpen}
          className="p-2 rounded-lg bg-surface text-secondary hover:text-primary border border-border"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-sidebar border-l border-border z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg bg-surface text-secondary hover:text-primary"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={activeSection === item.id}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-border space-y-4">
          <a
            href={profile.resumeUrl}
            download="Musharraf_Mahad_Resume.pdf"
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-accent hover:bg-accent-light text-background transition-all shadow-glow-sm"
          >
            <Download size={14} />
            <span>Download Resume</span>
          </a>

          <div className="flex items-center justify-center gap-3 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2.5 rounded-lg bg-surface text-secondary hover:text-primary border border-border transition-colors"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
