import React from "react";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import { Layers, Compass, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-border">
      <SectionHeading
        label="01 / BACKGROUND"
        title="Engineering Approach & Philosophy"
        description="Software Engineer driven by building scalable MERN stack architectures, autonomous AI workflows, and resilient systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Bio Narrative */}
        <div className="lg:col-span-7 space-y-4 text-secondary leading-relaxed text-sm sm:text-base">
          {profile.aboutParagraphs.map((para, idx) => (
            <p key={idx} className="text-secondary/90">
              {para}
            </p>
          ))}

          <p className="text-secondary/90">
            My engineering work emphasizes <strong className="text-primary font-medium">clarity over complexity</strong>, end-to-end type safety, responsive performance with the MERN stack, and integrating intelligent LLM agent tools into real software workflows.
          </p>

          {/* Compact Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted uppercase tracking-wider mb-1">
                <Layers size={14} className="text-accent-light" />
                <span>Primary Stack</span>
              </div>
              <div className="text-sm font-semibold text-primary truncate">
                MERN Stack
              </div>
              <div className="text-xs text-muted truncate mt-0.5">
                MongoDB · Express · React · Node
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted uppercase tracking-wider mb-1">
                <Compass size={14} className="text-accent-light" />
                <span>Focus Area</span>
              </div>
              <div className="text-sm font-semibold text-primary truncate">
                Full Stack + AI
              </div>
              <div className="text-xs text-muted mt-0.5">
                Scalable Web & Systems
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted uppercase tracking-wider mb-1">
                <Sparkles size={14} className="text-accent-light" />
                <span>Active Research</span>
              </div>
              <div className="text-sm font-semibold text-primary truncate">
                AI Agents & Tools
              </div>
              <div className="text-xs text-muted mt-0.5">
                Autonomous Workflows
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Highlights Card */}
        <div className="lg:col-span-5">
          <div className="rounded-xl bg-card border border-border p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-medium">
                Engineering Principles
              </span>
              <span className="text-[11px] font-mono text-secondary">v2026</span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-primary">Production MERN Architecture:</span>
                  <p className="text-secondary mt-0.5">
                    Building resilient Express/Node backend microservices and databases combined with intuitive React client interfaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-primary">Autonomous <span className="text-accent-light">AI</span> Agent Workflows:</span>
                  <p className="text-secondary mt-0.5">
                    Designing structured function-calling pipelines, memory structures, and tool execution loops.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-primary">Continuous Growth & Rigor:</span>
                  <p className="text-secondary mt-0.5">
                    Applying software engineering patterns, version control, and performance optimization at every stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted font-mono">
              <span>MERN + AI Systems</span>
              <span className="text-primary font-medium">Ready to Build</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


