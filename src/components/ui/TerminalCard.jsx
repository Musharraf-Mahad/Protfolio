import React from "react";

export default function TerminalCard({
  title = "bash — 88x24",
  children,
  className = "",
  headerRight
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden bg-card border border-border shadow-terminal ${className}`}
    >
      {/* Terminal window top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-sidebar border-b border-border text-xs select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/80 hover:bg-[#EF4444] transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80 hover:bg-[#F59E0B] transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#10B981]/80 hover:bg-[#10B981] transition-colors"></div>
          <span className="ml-2 font-mono text-muted text-xs font-medium">
            {title}
          </span>
        </div>
        {headerRight && (
          <div className="font-mono text-[11px] text-muted">{headerRight}</div>
        )}
      </div>

      {/* Terminal content */}
      <div className="p-5 font-mono text-xs sm:text-sm text-secondary leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
