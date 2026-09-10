import React from "react";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import { GraduationCap, BookOpen, Layers, Terminal } from "lucide-react";

const coursework = [
  "Data Structures",
  "Algorithms",
  "Software Architecture",
  "Database Systems",
  "AI Systems",
  "Computer Networks"
];

export default function Education() {
  return (
    <section id="education" className="py-16 border-t border-border">
      <SectionHeading
        label="04 / EDUCATION"
        title="Academic Background"
        description="Foundations in computer science, software engineering theory, and practical engineering."
      />

      <div className="rounded-xl bg-card border border-border p-6 sm:p-7 hover:border-accent/40 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-surface border border-border text-accent shrink-0">
              <GraduationCap size={26} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary">
                {profile.university}
              </h3>
              <p className="text-sm font-medium text-accent mt-0.5">
                {profile.program}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/30">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              CURRENT STUDENT
            </span>
          </div>
        </div>

        {/* Academic Core Areas */}
        <div className="pt-6">
          <div className="text-xs font-mono uppercase tracking-wider text-muted mb-3 flex items-center gap-2">
            <BookOpen size={14} className="text-accent" />
            <span>Core Computer Science &amp; Engineering Focus</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface border border-border text-xs text-secondary font-mono"
              >
                <span className="w-1 h-1 rounded-full bg-accent"></span>
                <span className="truncate">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
