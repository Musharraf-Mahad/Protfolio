import React from "react";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-8 px-4 sm:px-8 text-xs text-muted">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-primary">{profile.name}</span>
          <span className="mx-2 text-border">·</span>
          <span>{profile.title}</span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((item, idx) => (
            <React.Fragment key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {item.name}
              </a>
              {idx < socialLinks.length - 1 && (
                <span className="text-border">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div>© 2026 {profile.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
