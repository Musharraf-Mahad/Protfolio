import React from "react";

export default function NavItem({
  icon: Icon,
  label,
  href,
  isActive = false,
  onClick
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 select-none ${
        isActive
          ? "bg-surface text-primary font-semibold border border-border shadow-card"
          : "text-secondary hover:text-primary hover:bg-surface/50 border border-transparent"
      }`}
    >
      <span
        className={`transition-colors duration-150 ${
          isActive ? "text-accent-light" : "text-muted group-hover:text-secondary"
        }`}
      >
        {Icon && <Icon size={15} />}
      </span>
      <span className="truncate">{label}</span>
      {isActive && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"></span>
      )}
    </a>
  );
}

