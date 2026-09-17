import React from "react";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  Sparkles,
  Mail
} from "lucide-react";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import NavItem from "../navigation/NavItem";
import { GithubIcon, LinkedinIcon, XIcon } from "../ui/Icons";

const navItems = [
  { id: "home", label: "Overview", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "skills", label: "Tech Stack", icon: Code2, href: "#skills" },
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "learning", label: "Focus & Labs", icon: Sparkles, href: "#learning" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" }
];

export default function Sidebar({ activeSection, onNavigate }) {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github":
        return <GithubIcon size={15} />;
      case "Linkedin":
        return <LinkedinIcon size={15} />;
      case "Twitter":
        return <XIcon size={15} />;
      default:
        return null;
    }
  };

  return (
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 w-64 xl:w-72 h-screen bg-sidebar border-r border-border z-40 select-none overflow-y-auto">
      {/* Top Profile Card with generous spacing */}
      <div className="p-6 border-b border-border/80 flex flex-col items-center text-center">
        {/* Profile Avatar */}
        <div className="w-20 h-20 rounded-full overflow-hidden border border-border-light bg-surface shadow-card">
          <img
            src={profile.avatar || "/images/profile/profile.jpg"}
            alt={profile.name}
            onError={(e) => {
              e.currentTarget.src = "/images/profile/profile.jpg";
            }}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Spaced Name & Title */}
        <div className="mt-4 space-y-1">
          <h1 className="text-base font-semibold text-primary tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xs text-secondary font-mono">
            {profile.title}
          </p>
        </div>

        <div className="mt-3.5 inline-flex items-center px-2.5 py-1 rounded-md bg-surface border border-border text-[11px] text-muted font-mono">
          <span>MERN &amp; AI Engineer</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto" aria-label="Main Navigation">
        <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-wider text-muted font-medium">
          Navigation
        </div>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={activeSection === item.id}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(item.id);
              }
            }}
          />
        ))}
      </nav>

      {/* Social Links Footer */}
      <div className="p-4 border-t border-border/80 space-y-3">
        <div className="flex items-center justify-center gap-1.5">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface border border-transparent hover:border-border transition-colors duration-150"
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>

        <div className="text-center font-mono text-[10px] text-muted">
          © 2026 {profile.name}
        </div>
      </div>
    </aside>
  );
}


