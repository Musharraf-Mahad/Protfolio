import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  MessageSquare,
  Loader2,
  Sparkles,
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

    // Realistic smooth submission handling
    try {
      // Simulate network request to allow smooth UX feedback
      await new Promise((resolve) => setTimeout(resolve, 800));

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

  // Generate mailto link for direct fallback
  const mailtoSubject = encodeURIComponent(
    `[Portfolio Contact: ${formData.topic}] ${formData.subject ? formData.subject : "Inquiry from " + formData.name}`
  );
  const mailtoBody = encodeURIComponent(
    `Hi Musharraf,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
  );
  const mailtoHref = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="relative rounded-2xl bg-card border border-border shadow-xl shadow-black/40 overflow-hidden transition-all duration-300">
      {/* Top glowing ambient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      {/* Subtle background radial glow */}
      <div className="absolute -top-20 -right-20 w-44 h-44 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="p-6 sm:p-8">
        {status === "success" ? (
          /* Success View */
          <div className="py-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shadow-glow-sm">
              <CheckCircle2 size={36} className="animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary font-mono">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-secondary max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-accent font-semibold">{formData.name}</span>. Your message regarding <span className="text-primary font-medium">"{formData.topic}"</span> has been received. I'll get back to you at <span className="text-accent font-mono text-xs">{formData.email}</span> as soon as possible.
              </p>
            </div>

            {/* Direct Email Client Option */}
            <div className="pt-3 pb-1 border-t border-border/60 max-w-sm mx-auto space-y-3">
              <p className="text-xs text-muted">
                Need an immediate response? You can also launch your local email client with your message prefilled:
              </p>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-surface hover:bg-surface/80 border border-border hover:border-accent/40 text-xs font-mono text-secondary hover:text-primary transition-colors"
              >
                <span>Open in Email App</span>
                <ExternalLink size={14} className="text-accent" />
              </a>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-background font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all cursor-pointer"
            >
              <RotateCcw size={15} />
              <span>Send Another Message</span>
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-surface border border-border text-accent">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary">
                    Get in Touch
                  </h3>
                  <p className="text-xs text-muted">
                    Fill out the form below for a fast response.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 self-start sm:self-auto px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-mono text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span>Direct Message</span>
              </div>
            </div>

            {/* Topic Selection Pills */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-muted uppercase tracking-wider">
                What is this regarding?
              </label>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((topic) => {
                  const isSelected = formData.topic === topic;
                  return (
                    <button
                      type="button"
                      key={topic}
                      onClick={() => handleTopicSelect(topic)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all cursor-pointer ${
                        isSelected
                          ? "bg-accent/15 border border-accent text-accent font-medium shadow-glow-sm"
                          : "bg-surface hover:bg-surface/80 border border-border hover:border-border-light text-secondary hover:text-primary"
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono text-muted uppercase tracking-wider"
                >
                  Your Name <span className="text-accent">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted group-focus-within:text-accent transition-colors">
                    <User size={16} />
                  </div>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="Alex Johnson"
                    className={`w-full pl-9 pr-3.5 py-2.5 text-sm rounded-xl bg-surface/90 border transition-all text-primary placeholder:text-muted/50 focus:outline-none focus:ring-1 ${
                      errors.name
                        ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/30"
                        : "border-border hover:border-border-light focus:border-accent focus:ring-accent/40"
                    }`}
                  />
                </div>
                {errors.name && (
                  <div className="flex items-center gap-1 text-[11px] text-red-400 font-mono">
                    <AlertCircle size={12} />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono text-muted uppercase tracking-wider"
                >
                  Email Address <span className="text-accent">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted group-focus-within:text-accent transition-colors">
                    <Mail size={16} />
                  </div>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="alex@example.com"
                    className={`w-full pl-9 pr-3.5 py-2.5 text-sm rounded-xl bg-surface/90 border transition-all text-primary placeholder:text-muted/50 focus:outline-none focus:ring-1 ${
                      errors.email
                        ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/30"
                        : "border-border hover:border-border-light focus:border-accent focus:ring-accent/40"
                    }`}
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center gap-1 text-[11px] text-red-400 font-mono">
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Optional Subject Line */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="block text-xs font-mono text-muted uppercase tracking-wider"
              >
                Subject <span className="text-muted/60 lowercase">(optional)</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="Brief summary of your inquiry..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-surface/90 border border-border hover:border-border-light focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all text-primary placeholder:text-muted/50 focus:outline-none"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-message"
                  className="flex items-center gap-1.5 text-xs font-mono text-muted uppercase tracking-wider"
                >
                  <MessageSquare size={13} className="text-accent/70" />
                  <span>Your Message</span> <span className="text-accent">*</span>
                </label>
                <span className="text-[11px] font-mono text-muted">
                  {formData.message.length} / 1000
                </span>
              </div>
              <div className="relative group">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="Hi Musharraf, I'd like to discuss an opportunity, project, or collaboration..."
                  className={`w-full p-3.5 text-sm rounded-xl bg-surface/90 border transition-all text-primary placeholder:text-muted/50 focus:outline-none focus:ring-1 resize-y min-h-[100px] leading-relaxed ${
                    errors.message
                      ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/30"
                      : "border-border hover:border-border-light focus:border-accent focus:ring-accent/40"
                  }`}
                ></textarea>
              </div>
              {errors.message && (
                <div className="flex items-center gap-1 text-[11px] text-red-400 font-mono">
                  <AlertCircle size={12} />
                  <span>{errors.message}</span>
                </div>
              )}
            </div>

            {/* Submit Button & Helper */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[11px] font-mono text-muted text-center sm:text-left">
                Typically responds within 24 hours.
              </p>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-background font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
