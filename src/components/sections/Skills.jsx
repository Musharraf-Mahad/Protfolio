import React from "react";
import { skillCategories } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";
import {
  Layers,
  Layout,
  Server,
  Database,
  Sparkles,
  Wrench
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case "mern":
        return <Layers size={16} className="text-accent-light" />;
      case "ai":
        return <Sparkles size={16} className="text-accent-light" />;
      case "frontend":
        return <Layout size={16} className="text-secondary" />;
      case "backend":
        return <Server size={16} className="text-secondary" />;
      case "database":
        return <Database size={16} className="text-secondary" />;
      case "tools":
        return <Wrench size={16} className="text-secondary" />;
      default:
        return <Layers size={16} className="text-secondary" />;
    }
  };

  return (
    <section id="skills" className="py-16 border-t border-border">
      <SectionHeading
        label="03 / CAPABILITIES"
        title="Technical Stack & Architecture"
        description="Core MERN frameworks, database persistence layers, and autonomous AI tooling used across production workflows."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className={`rounded-xl p-5 bg-card border transition-colors ${
              category.isHighlighted
                ? "border-accent/40 shadow-sm"
                : "border-border hover:border-border-light"
            }`}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/70">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-surface border border-border">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-primary">
                    {category.title}
                  </h3>
                  <p className="text-[11px] font-mono text-muted">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {category.highlightBadge && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium uppercase tracking-wider bg-surface text-accent-light border border-border">
                  {category.highlightBadge}
                </span>
              )}
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {category.skills.map((skill) => (
                <SkillBadge
                  key={skill}
                  name={skill}
                  isHighlighted={category.isHighlighted}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


