import React from "react";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import { GraduationCap, BookOpen, Check } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Software Architecture & Design",
  "Database Management Systems",
  "Object-Oriented Programming (Java/C++)",
  "Computer Networks & Protocols",
  "Operating Systems Theory"
];

export default function Education() {
  return (
    <section id="education" className="py-16 border-t border-border">
      <SectionHeading
        label="04 / FOUNDATIONS"
        title="Academic Background"
        description="Formal computer science and software engineering theoretical grounding."
      />

      <div className="rounded-2xl bg-card border border-border p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-surface border border-border text-primary shrink-0">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-primary">
                {profile.university}
              </h3>
              <p className="text-xs text-secondary font-mono mt-0.5">
                BSc in {profile.program}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Current Student
            </span>
          </div>
        </div>

        {/* Academic Core Areas */}
        <div className="pt-6">
          <div className="text-xs font-mono uppercase tracking-wider text-muted mb-3.5 flex items-center gap-2 font-medium">
            <BookOpen size={13} className="text-secondary" />
            <span>Core Computer Science Disciplines</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface border border-border text-xs text-secondary font-mono"
              >
                <Check size={12} className="text-emerald-400 shrink-0" />
                <span className="truncate">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

