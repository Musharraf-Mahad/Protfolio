import React from "react";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import TerminalCard from "../ui/TerminalCard";
import { GraduationCap, Compass, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-border">
      <SectionHeading label="01 / PROFILE" title="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Bio Narrative */}
        <div className="lg:col-span-7 space-y-4 text-secondary leading-relaxed text-sm sm:text-base">
          {profile.aboutParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Compact Metadata Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
            <div className="p-3.5 rounded-lg bg-surface border border-border">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted uppercase tracking-wider mb-1">
                <GraduationCap size={13} className="text-accent" />
                <span>Academic</span>
              </div>
              <div className="text-xs font-semibold text-primary truncate">
                {profile.program}
              </div>
              <div className="text-[11px] text-secondary truncate">
                {profile.university}
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-surface border border-border">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted uppercase tracking-wider mb-1">
                <Compass size={13} className="text-accent" />
                <span>Primary Direction</span>
              </div>
              <div className="text-xs font-semibold text-primary truncate">
                {profile.focusArea}
              </div>
              <div className="text-[11px] text-secondary">
                Scalable Systems
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-surface border border-border">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted uppercase tracking-wider mb-1">
                <Sparkles size={13} className="text-accent" />
                <span>Current Focus</span>
              </div>
              <div className="text-xs font-semibold text-accent truncate">
                {profile.currentFocus}
              </div>
              <div className="text-[11px] text-secondary">
                Tool Calling & Flow
              </div>
            </div>
          </div>
        </div>

        {/* Right: Terminal Developer Info Card */}
        <div className="lg:col-span-5">
          <TerminalCard
            title="developer --info"
            headerRight="profile.json"
            className="text-xs"
          >
            <div className="text-accent font-semibold mb-2">
              $ developer --info
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-baseline justify-between border-b border-border/50 pb-1">
                <span className="text-muted">Name</span>
                <span className="text-primary font-medium">{profile.name}</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border/50 pb-1">
                <span className="text-muted">Role</span>
                <span className="text-accent font-medium">{profile.title}</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border/50 pb-1">
                <span className="text-muted">University</span>
                <span className="text-primary">{profile.university}</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border/50 pb-1">
                <span className="text-muted">Program</span>
                <span className="text-primary">{profile.program}</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border/50 pb-1">
                <span className="text-muted">Focus</span>
                <span className="text-accent">{profile.focusArea}</span>
              </div>
              <div className="flex items-baseline justify-between pt-0.5">
                <span className="text-muted">Status</span>
                <span className="text-accent-cyan flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
                  {profile.status}
                </span>
              </div>
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  );
}
