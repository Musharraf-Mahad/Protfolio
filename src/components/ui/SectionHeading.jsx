import React from "react";

export default function SectionHeading({
  label,
  title,
  description,
  rightAction,
  className = ""
}) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          {label && (
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-wider text-accent uppercase font-medium">
              <span className="inline-block w-2 h-0.5 bg-accent"></span>
              {label}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            {title}
          </h2>
        </div>
        {rightAction && <div className="sm:mb-1">{rightAction}</div>}
      </div>
      {description && (
        <p className="mt-2 text-sm sm:text-base text-secondary max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
