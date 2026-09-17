import React, { useState } from "react";
import { projects } from "../../data/projects";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/Icons";


const categories = ["All", "Desktop App", "Mobile App", "Web App"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.type === selectedCategory);

  return (
    <section id="projects" className="py-16 border-t border-border">
      <SectionHeading
        label="02 / SELECTED WORK"
        title="Featured Projects"
        description="Software applications and systems engineered with focus on architecture, usability, and clean code."
        rightAction={
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-secondary hover:text-primary transition-colors group"
          >
            <span>All Repositories</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        }
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer ${
              selectedCategory === cat
                ? "bg-primary text-background font-semibold shadow-sm"
                : "bg-surface hover:bg-card text-secondary hover:text-primary border border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Autonomous AI Architecture Card */}
      <div className="mt-10 p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <h3 className="text-sm font-semibold text-primary">
              <span className="text-accent-light">AI</span> Systems &amp; Autonomous Agent Prototyping
            </h3>

          </div>
          <p className="text-xs text-secondary leading-relaxed">
            Actively building and evaluating LLM workflows, function-calling pipelines, structured memory, and agent tool execution patterns in Python and Node.js.
          </p>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium bg-surface hover:bg-card-hover border border-border text-primary hover:text-accent-light transition-all shrink-0"
        >
          <GithubIcon size={14} />
          <span>Explore on GitHub</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}

