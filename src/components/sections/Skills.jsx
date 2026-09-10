import React from "react";
import { skillCategories } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";
import {
  Layout,
  Server,
  Database,
  Code,
  Sparkles,
  Wrench
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case "frontend":
        return <Layout size={18} className="text-accent" />;
      case "backend":
        return <Server size={18} className="text-accent" />;
      case "database":
        return <Database size={18} className="text-accent" />;
      case "programming":
        return <Code size={18} className="text-accent" />;
      case "ai":
        return <Sparkles size={18} className="text-accent" />;
      case "tools":
        return <Wrench size={18} className="text-accent" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-16 border-t border-border">
      <SectionHeading
        label="02 / SKILLS"
        title="Technical Arsenal & Skills"
        description="Core technologies, frameworks, and tools used across full stack and AI development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className={`rounded-xl p-5 bg-card border transition-all duration-300 hover:-translate-y-0.5 ${
              category.isHighlighted
                ? "border-accent/60 shadow-glow-sm relative bg-card/90"
                : "border-border hover:border-accent/30"
            }`}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-surface border border-border">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary">
                    {category.title}
                  </h3>
                  <p className="text-[11px] font-mono text-muted">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {category.highlightBadge && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/40 animate-pulse">
                  {category.highlightBadge}
                </span>
              )}
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-2 pt-1">
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
