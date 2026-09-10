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
      className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 select-none ${
        isActive
          ? "bg-accent/10 text-accent font-semibold shadow-glow-sm"
          : "text-secondary hover:text-primary hover:bg-surface/70"
      }`}
    >
      <span
        className={`transition-colors duration-200 ${
          isActive ? "text-accent" : "text-muted group-hover:text-primary"
        }`}
      >
        {Icon && <Icon size={17} />}
      </span>
      <span className="truncate">{label}</span>
      {isActive && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
      )}
    </a>
  );
}
