import React from "react";

export default function SkillBadge({ name, isHighlighted = false }) {
  if (isHighlighted) {
    return (
      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/40 shadow-glow-sm hover:border-accent hover:bg-accent/15 transition-colors cursor-default">
        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-1.5 animate-pulse"></span>
        {name}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-surface text-primary/90 border border-border hover:border-accent/40 hover:text-white hover:bg-card transition-colors cursor-default">
      {name}
    </span>
  );
}
