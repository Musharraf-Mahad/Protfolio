import React, { useState } from "react";
import { ArrowDown, Layers, Sparkles, Check, Copy, ArrowUpRight, Database } from "lucide-react";
import { profile } from "../../data/profile";
import Button from "../ui/Button";
import { GithubIcon } from "../ui/Icons";


const corePillars = [
  {
    title: "MERN Stack Systems",
    desc: "Production-ready architectures built with MongoDB, Express.js, React 19, and Node.js.",
    icon: Layers,
    badge: "Full-Stack"
  },
  {
    title: "Applied AI & Agents",
    desc: "Autonomous reasoning workflows, function calling, tool execution pipelines, and LLM integrations.",
    icon: Sparkles,
    badge: "AI Systems"
  },
  {
    title: "Backend & Databases",
    desc: "Scalable REST APIs, JWT authentication, schema normalization, indexing, and data security.",
    icon: Database,
    badge: "Architecture"
  }
];

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center pt-8 pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs text-secondary">
            <span className="font-mono text-[11px] text-accent-light uppercase tracking-wider font-medium">MERN + AI SPECIALIST</span>
            <span className="text-border">·</span>
            <span className="text-primary font-medium">Available for Engineering Roles</span>
          </div>

          {/* Main Heading with Purple AI Highlight */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Full Stack <span className="text-accent-light">AI</span> Engineer
            </h1>
            <p className="text-base sm:text-lg text-secondary font-normal max-w-xl">
              {profile.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-secondary/90 max-w-xl leading-relaxed">
            {profile.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              icon={ArrowDown}
              iconPosition="right"
              onClick={handleScrollToProjects}
            >
              Explore Projects
            </Button>

            <Button
              variant="secondary"
              size="md"
              icon={GithubIcon}
              iconPosition="left"
              href={profile.github}
              target="_blank"
            >
              GitHub
            </Button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-secondary hover:text-primary hover:bg-surface border border-border transition-colors cursor-pointer"
              title="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check size={13} className="text-accent-light" />
                  <span className="text-accent-light font-medium">Copied Email</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: High-Craft Bento Engineer Card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card space-y-5">
            {/* Header / Identity */}
            <div className="flex items-start justify-between pb-4 border-b border-border">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-medium">
                  Profile Snapshot
                </span>
                <div className="text-base font-semibold text-primary mt-0.5">
                  {profile.name}
                </div>
                <div className="text-xs text-secondary font-mono">
                  {profile.title}
                </div>
              </div>

              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface text-secondary border border-border">
                Specialist
              </span>
            </div>

            {/* Core Architectural Focus */}
            <div className="space-y-1.5 text-xs">
              <div className="text-muted font-mono uppercase text-[10px] tracking-wider font-medium">
                Primary Architecture
              </div>
              <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary font-mono text-xs">MERN Stack</span>
                  <span className="text-[10px] font-mono text-accent-light">MongoDB · Express · React · Node</span>
                </div>
                <p className="text-[11px] text-secondary">
                  Full-cycle responsive web engineering combined with autonomous LLM agent pipelines.
                </p>
              </div>
            </div>

            {/* Core Tech Stack */}
            <div className="space-y-1.5">
              <div className="text-muted font-mono uppercase text-[10px] tracking-wider font-medium">
                Core Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["MongoDB", "Express.js", "React 19", "Node.js", "AI Agents", "Python", "Tailwind CSS", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-[11px] font-mono bg-surface text-secondary border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-mono text-muted">
              <span>MERN &amp; AI Workflows</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-secondary hover:text-primary transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Focus Areas Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-border">
        {corePillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group p-5 rounded-xl bg-card border border-border hover:border-border-light transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-surface border border-border text-primary group-hover:text-accent-light transition-colors">
                <pillar.icon size={16} />
              </div>
              <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
                {pillar.badge}
              </span>
            </div>
            <h3 className="font-semibold text-sm text-primary mb-1">
              {pillar.title}
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


