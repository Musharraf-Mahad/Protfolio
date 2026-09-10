import React, { useState } from "react";
import { ExternalLink, Check, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row hover:-translate-y-1 shadow-lg hover:shadow-glow-sm">
      {/* Project Image Container */}
      <div className="lg:w-1/2 relative bg-surface overflow-hidden flex items-center justify-center min-h-[220px] sm:min-h-[260px] border-b lg:border-b-0 lg:border-r border-border">
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center text-muted">
            <Code2 size={40} className="text-accent/60 mb-3 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-secondary">
              {project.title}
            </span>
            <span className="text-[11px] text-muted mt-1">
              {project.type || "Software Project"}
            </span>
          </div>
        )}

        {/* Subtle overlay gradient on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60 pointer-events-none lg:hidden"></div>
      </div>

      {/* Project Details */}
      <div className="lg:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <h3 className="text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.type && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-surface text-secondary border border-border whitespace-nowrap">
                {project.type}
              </span>
            )}
          </div>

          <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted mb-2.5">
                Key Features
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-secondary/90">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check
                      size={13}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack tags */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded text-[11px] font-mono bg-surface text-primary/80 border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-border/80 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium bg-surface hover:bg-card-hover border border-border hover:border-accent text-primary transition-all duration-200"
            >
              <GithubIcon size={14} className="text-accent" />
              <span>{project.repoName || "View Repository"}</span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium bg-accent hover:bg-accent-light text-background font-semibold transition-all duration-200"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
