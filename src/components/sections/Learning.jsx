import React from "react";
import SectionHeading from "../ui/SectionHeading";
import {
  Sparkles,
  Layers,
  Code,
  Server,
  Database,
  Cpu,
  ArrowRight
} from "lucide-react";

const roadmapStages = ["LEARN", "BUILD", "EXPERIMENT", "IMPROVE"];

const learningItems = [
  {
    id: "ai-agents",
    title: "AI Agents",
    status: "ACTIVE",
    desc: "Autonomous reasoning loops, tool-calling pipelines, structured memory architectures.",
    icon: Sparkles,
    isPrimary: true
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    status: "ACTIVE",
    desc: "End-to-end modern architecture, reactive RESTful client interfaces, robust relational/document backends.",
    icon: Layers,
    isPrimary: true
  },
  {
    id: "react",
    title: "React",
    status: "CORE",
    desc: "Hooks, state modeling, reusable component architecture, and modern client performance.",
    icon: Code
  },
  {
    id: "nodejs",
    title: "Node.js",
    status: "DEV",
    desc: "Asynchronous event loops, RESTful services, serverless execution, and API endpoints.",
    icon: Server
  },
  {
    id: "mongodb",
    title: "MongoDB",
    status: "STORE",
    desc: "Document modeling, indexing, schema design, and seamless integration with MERN stacks.",
    icon: Database
  },
  {
    id: "ai-applications",
    title: "AI-Powered Applications",
    status: "FOCUS",
    desc: "Connecting LLMs with real software logic, semantic search, and human-in-the-loop workflows.",
    icon: Cpu,
    isPrimary: true
  }
];

export default function Learning() {
  return (
    <section id="learning" className="py-16 border-t border-border">
      <SectionHeading
        label="05 / LEARNING"
        title="Currently Building & Learning"
        description="Active areas of technical expansion, exploration, and experimental software engineering."
      />

      {/* Visual Roadmap Flow */}
      <div className="mb-8 p-4 rounded-xl bg-card border border-border flex items-center justify-center overflow-x-auto">
        <div className="flex items-center gap-2 sm:gap-4 font-mono text-xs text-secondary shrink-0">
          {roadmapStages.map((stage, idx) => (
            <React.Fragment key={stage}>
              <span className="px-3 py-1 rounded bg-surface border border-border font-bold text-accent">
                {stage}
              </span>
              {idx < roadmapStages.length - 1 && (
                <ArrowRight size={14} className="text-muted" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Learning Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {learningItems.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-xl bg-card border transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between ${
              item.isPrimary
                ? "border-accent/50 shadow-glow-sm"
                : "border-border hover:border-accent/30"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-surface border border-border text-accent">
                  <item.icon size={18} />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-surface text-secondary border border-border">
                  {item.status}
                </span>
              </div>
              <h3 className="text-sm font-bold text-primary mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Bottom Card */}
      <div className="mt-4 p-4 rounded-xl bg-surface border border-border flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-secondary font-mono">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          <span>Software Engineering Discipline</span>
        </div>
        <span className="text-[11px] font-mono text-muted">
          Writing clean, maintainable, testable code with Git version control
        </span>
      </div>
    </section>
  );
}
