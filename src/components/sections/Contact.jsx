import React, { useState } from "react";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../ui/ContactForm";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Copy,
  Check
} from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "../ui/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const cloneCommand = `git clone ${profile.github}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    <section id="contact" className="py-16 border-t border-border">
      <SectionHeading
        label="06 / CONTACT"
        title="Let's Build Something"
        description="Have an opportunity, project, or idea? Feel free to reach out."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Channels & Quick Info */}
        <div className="lg:col-span-6 space-y-4">
          {/* Email Card */}
          <a
            href={`mailto:${profile.email}`}
            className="group block p-5 rounded-xl bg-card hover:bg-card-hover border border-border hover:border-accent/50 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-surface border border-border text-accent group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
                    Email
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-primary group-hover:text-accent transition-colors">
                    {profile.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${profile.phone}`}
            className="group block p-5 rounded-xl bg-card hover:bg-card-hover border border-border hover:border-accent/50 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-surface border border-border text-accent group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
                    Phone
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-primary group-hover:text-accent transition-colors">
                    {profile.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
          </a>

          {/* Social Profiles Grid */}
          <div className="pt-1">
            <div className="text-xs font-mono uppercase tracking-wider text-muted mb-2.5">
              Professional Profiles
            </div>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-card hover:bg-card-hover border border-border hover:border-accent/40 text-secondary hover:text-primary transition-all text-xs font-mono"
                >
                  <span className="text-accent">
                    {getSocialIcon(social.icon)}
                  </span>
                  <span className="truncate">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Clone & Status Card */}
          <div className="p-4 rounded-xl bg-card border border-border space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted">
              <span>Quick Clone Repositories:</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-accent hover:text-accent-light transition-colors cursor-pointer"
                title="Copy command"
              >
                {copied ? (
                  <>
                    <Check size={12} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-2.5 rounded-lg bg-surface border border-border font-mono text-xs text-accent-cyan select-all break-all">
              {cloneCommand}
            </div>

            <div className="pt-2 border-t border-border/50 flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-secondary font-medium">
                Open to Internship &amp; Developer Roles
              </span>
            </div>
          </div>
        </div>

        {/* Right: Get In Touch Contact Form */}
        <div className="lg:col-span-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
