import React from "react";
import { projects } from "../../data/projects";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-border">
      <SectionHeading
        label="03 / PROJECTS"
        title="Featured Projects"
        description="Applications and software projects I've built while developing my skills."
        rightAction={
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-light transition-colors group"
          >
            <span>View All on GitHub</span>
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        }
      />

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Autonomous AI Agent Banner (matching reference mockup) */}
      <div className="mt-8 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-surface to-card border border-border hover:border-accent/40 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/30 text-accent shrink-0 mt-0.5">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-primary">
                Autonomous AI Agent Workflows &amp; Intelligent Copilots
              </h3>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-accent/10 text-accent border border-accent/30">
                ACTIVE LAB
              </span>
            </div>
            <p className="text-xs text-secondary mt-1 max-w-xl">
              Currently prototyping multi-agent frameworks that use tool execution, structured reasoning, and autonomous task management.
            </p>
          </div>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium bg-surface hover:bg-card border border-border text-primary hover:text-accent transition-all shrink-0"
        >
          <GithubIcon size={14} />
          <span>Follow Repo on GitHub</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
