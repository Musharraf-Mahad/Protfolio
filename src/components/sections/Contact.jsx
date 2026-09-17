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
    <section id="contact" className="py-16 border-t border-border">
      <SectionHeading
        label="06 / GET IN TOUCH"
        title="Start a Conversation"
        description="Available for software engineering roles, internships, and technical collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Channels & Quick Info */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <a
            href={`mailto:${profile.email}`}
            className="group block p-5 rounded-xl bg-card hover:bg-card-hover border border-border hover:border-border-light transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-surface border border-border text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
                    Direct Email
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                    {profile.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted group-hover:text-primary transition-colors"
              />
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${profile.phone}`}
            className="group block p-5 rounded-xl bg-card hover:bg-card-hover border border-border hover:border-border-light transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-surface border border-border text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
                    Phone / WhatsApp
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                    {profile.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted group-hover:text-primary transition-colors"
              />
            </div>
          </a>

          {/* Social Profiles Grid */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-muted mb-2 font-medium">
              Networks
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-card hover:bg-card-hover border border-border hover:border-border-light text-secondary hover:text-primary transition-colors text-xs font-mono"
                >
                  <span className="text-secondary">
                    {getSocialIcon(social.icon)}
                  </span>
                  <span className="truncate">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Clone & Status Card */}
          <div className="p-4 rounded-xl bg-card border border-border space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted">
              <span>Clone Main Workspace:</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-secondary hover:text-primary transition-colors cursor-pointer"
                title="Copy command"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-2.5 rounded-lg bg-surface border border-border font-mono text-xs text-primary/80 select-all break-all">
              {cloneCommand}
            </div>

            <div className="pt-2 border-t border-border flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-secondary font-medium">
                Open to Full-Stack &amp; AI Engineering roles
              </span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

