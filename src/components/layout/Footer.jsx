import React from "react";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border/80 mt-20 py-8 px-4 sm:px-8 text-xs text-muted">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-medium text-primary">{profile.name}</span>
          <span className="text-border">·</span>
          <span>{profile.title}</span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((item, idx) => (
            <React.Fragment key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                {item.name}
              </a>
              {idx < socialLinks.length - 1 && (
                <span className="text-border">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div>© 2026 {profile.name}</div>
      </div>
    </footer>
  );
}

