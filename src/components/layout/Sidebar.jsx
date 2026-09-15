import React from "react";
import {
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

export default function Sidebar({ activeSection, onNavigate }) {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github":
        return <GithubIcon size={16} />;
      case "Linkedin":
        return <LinkedinIcon size={16} />;
      case "Twitter":
        return <XIcon size={16} />;
      default:
        return null;
    }
  };

  return (
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 w-64 xl:w-72 h-screen bg-sidebar border-r border-border z-40 select-none overflow-y-auto">
      {/* Top Profile Card */}
      <div className="p-6 border-b border-border flex flex-col items-center text-center">
        <div className="relative mb-3.5 group">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent p-0.5 shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
            <img
              src={profile.avatar || "/images/profile/profile.jpg"}
              alt={profile.name}
              onError={(e) => {
                e.currentTarget.src = "/images/profile/profile.jpg";
              }}
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <span
            className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-accent border-2 border-sidebar rounded-full shadow-glow-sm"
            title="Active & Available"
          ></span>
        </div>

        <h1 className="text-base font-bold text-primary tracking-tight">
          {profile.name}
        </h1>
        <p className="text-xs font-mono text-accent mt-0.5 font-medium">
          {profile.title}
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-5 space-y-1.5 overflow-y-auto" aria-label="Main Navigation">
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

      {/* Resume & Social Links Footer */}
      <div className="p-4 border-t border-border space-y-4">

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface border border-transparent hover:border-border transition-all duration-200"
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
