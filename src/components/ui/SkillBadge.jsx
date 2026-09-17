import React from "react";

export default function SkillBadge({ name, isHighlighted = false }) {
  if (isHighlighted) {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-surface text-primary border border-border-light hover:border-accent transition-colors cursor-default">
        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-1.5"></span>
        {name}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-normal bg-surface/80 text-secondary border border-border hover:border-border-light hover:text-primary transition-colors cursor-default">
      {name}
    </span>
  );
}

