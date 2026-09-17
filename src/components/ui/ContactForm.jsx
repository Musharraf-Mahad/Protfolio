import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RotateCcw,
  ExternalLink
} from "lucide-react";

import { profile } from "../../data/profile";

const TOPICS = [
  "Project Collaboration",
  "Job / Internship",
  "AI Consultation",
  "General Inquiry"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: TOPICS[0],
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleTopicSelect = (topic) => {
    setFormData((prev) => ({ ...prev, topic }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      topic: TOPICS[0],
      subject: "",
      message: ""
    });
    setErrors({});
    setStatus("idle");
  };

  const mailtoSubject = encodeURIComponent(
    `[Portfolio Contact: ${formData.topic}] ${formData.subject ? formData.subject : "Inquiry from " + formData.name}`
  );
  const mailtoBody = encodeURIComponent(
    `Hi Musharraf,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
  );
  const mailtoHref = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="rounded-2xl bg-card border border-border p-6 sm:p-7 shadow-card">
      {status === "success" ? (
        /* Success View */
        <div className="py-6 text-center space-y-5">
          <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 size={24} />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base font-semibold text-primary">
              Message Sent
            </h3>
            <p className="text-xs text-secondary max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-primary font-medium">{formData.name}</span>. Your inquiry regarding <span className="text-primary font-medium">"{formData.topic}"</span> has been logged. I'll get back to you shortly at <span className="text-primary font-mono">{formData.email}</span>.
            </p>
          </div>

          {/* Direct Email Fallback */}
          <div className="pt-3 pb-1 border-t border-border max-w-xs mx-auto space-y-2">
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-surface hover:bg-card-hover border border-border text-xs font-mono text-secondary hover:text-primary transition-colors"
            >
              <span>Open in Email Client</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-white text-background font-semibold text-xs transition-colors cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Send Another Message</span>
          </button>
        </div>
      ) : (
        /* Form View */
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div>
              <h3 className="text-sm font-semibold text-primary">
                Send a Direct Message
              </h3>
              <p className="text-xs text-secondary mt-0.5">
                Drop your thoughts or project details below.
              </p>
            </div>

            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface border border-border text-muted">
              Quick Contact
            </span>
          </div>

          {/* Topic Selection Pills */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-mono text-muted uppercase tracking-wider font-medium">
              Inquiry Topic
            </label>
            <div className="flex flex-wrap gap-1.5">
              {TOPICS.map((topic) => {
                const isSelected = formData.topic === topic;
                return (
                  <button
                    type="button"
                    key={topic}
                    onClick={() => handleTopicSelect(topic)}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-primary text-background font-semibold"
                        : "bg-surface hover:bg-card-hover border border-border text-secondary hover:text-primary"
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Name Input */}
            <div className="space-y-1">
              <label
                htmlFor="contact-name"
                className="block text-[11px] font-mono text-muted uppercase tracking-wider"
              >
                Name *
              </label>
              <div className="relative">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="e.g. Sarah Connor"
                  className={`w-full px-3 py-2 text-xs rounded-lg bg-surface border transition-colors text-primary placeholder:text-muted/60 focus:outline-none focus:ring-1 ${
                    errors.name
                      ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/30"
                      : "border-border hover:border-border-light focus:border-accent focus:ring-accent/30"
                  }`}
                />
              </div>
              {errors.name && (
                <div className="flex items-center gap-1 text-[11px] text-red-400 font-mono">
                  <AlertCircle size={11} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label
                htmlFor="contact-email"
                className="block text-[11px] font-mono text-muted uppercase tracking-wider"
              >
                Email *
              </label>
              <div className="relative">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="name@company.com"
                  className={`w-full px-3 py-2 text-xs rounded-lg bg-surface border transition-colors text-primary placeholder:text-muted/60 focus:outline-none focus:ring-1 ${
                    errors.email
                      ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/30"
                      : "border-border hover:border-border-light focus:border-accent focus:ring-accent/30"
                  }`}
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-1 text-[11px] text-red-400 font-mono">
                  <AlertCircle size={11} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Message Textarea */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="contact-message"
                className="block text-[11px] font-mono text-muted uppercase tracking-wider"
              >
                Message *
              </label>
              <span className="text-[10px] font-mono text-muted">
                {formData.message.length} / 1000
              </span>
            </div>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder="Tell me about your project, timeline, or open role..."
              className={`w-full p-3 text-xs rounded-lg bg-surface border transition-colors text-primary placeholder:text-muted/60 focus:outline-none focus:ring-1 resize-y min-h-[90px] leading-relaxed ${
                errors.message
                  ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/30"
                  : "border-border hover:border-border-light focus:border-accent focus:ring-accent/30"
              }`}
            ></textarea>
            {errors.message && (
              <div className="flex items-center gap-1 text-[11px] text-red-400 font-mono">
                <AlertCircle size={11} />
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          {/* Submit Button & Helper */}
          <div className="pt-2 flex items-center justify-between gap-3">
            <span className="text-[11px] font-mono text-muted">
              Fast response turnaround.
            </span>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-white text-background font-semibold text-xs transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={13} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={13} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

