import React from "react";
import SectionHeading from "../ui/SectionHeading";
import {
  Sparkles,
  Layers,
  Code,
  Server,
  Database,
  Cpu
} from "lucide-react";


const learningItems = [
  {
    id: "ai-agents",
    title: "AI Agents & Autonomous Pipelines",
    titleHighlight: true,
    status: "Active Lab",
    desc: "Autonomous reasoning loops, multi-agent frameworks, function calling, tool execution pipelines, and structured memory architectures.",
    icon: Sparkles
  },
  {
    id: "mern-stack",
    title: "MERN Stack Production Systems",
    status: "Specialization",
    desc: "End-to-end architectures, reactive state modeling with React 19, RESTful services with Express, and robust data persistence in MongoDB.",
    icon: Layers
  },
  {
    id: "ai-applications",
    title: "AI-Powered Software Applications",
    titleHighlight: true,
    status: "Focus Area",
    desc: "Connecting large language models with deterministic software logic, context retrieval, and human-in-the-loop workflows.",
    icon: Cpu
  },
  {
    id: "react",
    title: "Modern React Ecosystem",
    status: "Core Stack",
    desc: "Custom hooks, state modeling, reusable component architecture, and modern client performance optimization.",
    icon: Code
  },
  {
    id: "nodejs",
    title: "Node.js & Express Backends",
    status: "Core Stack",
    desc: "Asynchronous I/O, RESTful API design, JWT authentication flows, middleware architecture, and server execution.",
    icon: Server
  },
  {
    id: "databases",
    title: "MongoDB & Database Modeling",
    status: "Data Layer",
    desc: "Mongoose schema design, document indexing, aggregation pipelines, and transaction consistency.",
    icon: Database
  }
];


export default function Learning() {
  return (
    <section id="learning" className="py-16 border-t border-border">
      <SectionHeading
        label="05 / ACTIVE LABS"
        title="Engineering Focus & Research"
        description="Active areas of technical expansion, exploration, and architectural experimentation."
      />

      {/* Learning Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {learningItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-card border border-border hover:border-border-light transition-colors flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-surface border border-border text-primary">
                  <item.icon size={16} />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-surface text-secondary border border-border font-medium">
                  {item.status}
                </span>
              </div>
              <h3 className="text-xs font-semibold text-primary mb-1.5">
                {item.titleHighlight ? (
                  <>
                    <span className="text-accent-light">AI</span> {item.title.replace(/^AI\s*/, "")}
                  </>
                ) : (
                  item.title
                )}
              </h3>

              <p className="text-xs text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Discipline Footer Banner */}
      <div className="mt-6 p-4 rounded-xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-xs text-primary font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>Engineering Discipline</span>
        </div>
        <span className="text-[11px] font-mono text-muted">
          Committed to clean code, testability, Git workflow rigor, and continuous iteration.
        </span>
      </div>
    </section>
  );
}

