import React, { useState } from "react";
import { ExternalLink, Check, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group rounded-2xl bg-card border border-border hover:border-border-light transition-all duration-200 overflow-hidden flex flex-col lg:flex-row shadow-card">
      {/* Project Image Container */}
      <div className="lg:w-1/2 relative bg-[#0d0d11] overflow-hidden flex items-center justify-center min-h-[220px] sm:min-h-[260px] border-b lg:border-b-0 lg:border-r border-border">
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center text-muted">
            <Code2 size={36} className="text-secondary mb-2" />
            <span className="font-mono text-xs uppercase tracking-wider text-secondary">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="lg:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <h3 className="text-lg font-semibold text-primary">
              {project.title}
            </h3>
            {project.type && (
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-secondary bg-surface border border-border">
                {project.type}
              </span>
            )}
          </div>

          <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted mb-2 font-medium">
                Key Capabilities
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-secondary">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check
                      size={13}
                      className="text-emerald-400 mt-0.5 shrink-0"
                    />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack tags */}
          <div className="mb-5">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface text-secondary border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-border flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-surface hover:bg-card-hover border border-border hover:border-border-light text-primary transition-colors"
            >
              <GithubIcon size={14} className="text-secondary" />
              <span>Source Code</span>
              <ArrowUpRight size={12} className="text-muted" />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-primary hover:bg-white text-background font-semibold transition-colors"
            >
              <ExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

