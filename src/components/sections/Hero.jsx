import React from "react";
import { ArrowDown, Terminal, Sparkles, Layers, Cpu } from "lucide-react";
import { profile } from "../../data/profile";
import Button from "../ui/Button";
import TerminalCard from "../ui/TerminalCard";
import { GithubIcon } from "../ui/Icons";

const focusCards = [
  {
    num: "01",
    title: "FULL STACK",
    desc: "Modern web applications",
    icon: Layers
  },
  {
    num: "02",
    title: "AI AGENTS",
    desc: "Intelligent application workflows",
    icon: Sparkles
  },
  {
    num: "03",
    title: "SOFTWARE ENGINEERING",
    desc: "Building practical software",
    icon: Cpu
  }
];

export default function Hero() {
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>{profile.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cyan">AI</span>
            <br />
            Engineer
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-lg font-medium text-primary/90">
            {profile.tagline}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-secondary max-w-xl leading-relaxed">
            {profile.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowDown}
              iconPosition="right"
              onClick={handleScrollToProjects}
            >
              View Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={GithubIcon}
              iconPosition="left"
              href={profile.github}
              target="_blank"
            >
              GitHub
            </Button>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Card */}
        <div className="lg:col-span-5">
          <TerminalCard title="bash — 88x24">
            <div>
              <span className="text-accent font-semibold">&gt; whoami</span>
              <div className="pl-4 text-primary font-medium mt-0.5">
                {profile.name}
              </div>
            </div>

            <div className="pt-1">
              <span className="text-accent font-semibold">&gt; role</span>
              <div className="pl-4 text-primary font-medium mt-0.5">
                {profile.title}
              </div>
            </div>

            <div className="pt-1">
              <span className="text-accent font-semibold">&gt; focus</span>
              <div className="pl-4 space-y-0.5 text-secondary mt-0.5">
                <div>→ Full Stack Development</div>
                <div className="text-accent/90">→ AI Agents</div>
                <div>→ AI-powered Applications</div>
              </div>
            </div>

            <div className="pt-1 flex items-center gap-2">
              <span className="text-accent font-semibold">&gt; status</span>
              <div className="flex items-center text-primary">
                <span>Building...</span>
                <span className="inline-block w-2.5 h-4 ml-1.5 bg-accent animate-blink"></span>
              </div>
            </div>
          </TerminalCard>
        </div>
      </div>

      {/* Focus Row: 3 Focus Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 pt-8 border-t border-border">
        {focusCards.map((card) => (
          <div
            key={card.num}
            className="group p-4 sm:p-5 rounded-xl bg-card/60 hover:bg-card border border-border hover:border-accent/40 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-accent font-bold">
                {card.num}
              </span>
              <card.icon
                size={16}
                className="text-muted group-hover:text-accent transition-colors"
              />
            </div>
            <div className="font-mono font-bold text-xs sm:text-sm text-primary tracking-wider uppercase mb-1">
              {card.title}
            </div>
            <div className="text-xs text-secondary">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
