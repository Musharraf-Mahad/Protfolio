import React, { useState, useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import MobileHeader from "./components/layout/MobileHeader";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Learning from "./components/sections/Learning";
import Contact from "./components/sections/Contact";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "learning",
  "contact"
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // IntersectionObserver to accurately track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the upper-middle screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-indigo-500/30 selection:text-white font-sans antialiased">
      {/* Fixed Sidebar for Desktop */}
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Sticky Mobile Header for Mobile & Tablet */}
      <MobileHeader activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="lg:pl-64 xl:pl-72 w-full min-h-screen flex flex-col justify-between">
        <div className="max-w-5xl mx-auto w-full px-5 sm:px-8 xl:px-12 pt-6 sm:pt-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Learning />
          <Contact />
        </div>

        {/* Minimal Footer */}
        <Footer />
      </main>
    </div>
  );
}

