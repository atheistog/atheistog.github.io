"use client";

import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    name: "Shlokey",
    desc:
      "A Python-based cryptography and linguistic transformation tool that converts text and files between English, Pali, and Brahmi script using custom dictionary mappings.",

    tech: [
      "Python 3.8+",
      "Flask",
      "HTML5",
      "CSS3",
      "JavaScript",
      "JSON",
      "Unicode Brahmi Script",
      "Git & GitHub",
    ],

    github: "https://github.com/atheistog/shlokeyweb",
  },

  {
    name: "LEO (Logical Enforcement Oracle)",
    desc:
      "A Python-based cyber virtual assistant that performs cybersecurity and system-related tasks using both voice and text commands.",

    tech: [
      "Python 3.x",
      "SpeechRecognition",
      "pyttsx3",
      "PyAudio",
      "Nmap",
      "Scapy",
      "Socket",
      "Git & GitHub",
    ],

    github: "https://github.com/atheistog/Leo",
  },

  {
    name: "WiFiGuard",
    desc:
      "A Windows-based Python CLI tool that scans nearby Wi-Fi networks, classifies them as secure or open, and displays network security information.",

    tech: [
      "Python 3.6+",
      "subprocess",
      "Regex",
      "platform",
      "netsh",
      "ipconfig",
      "CLI",
      "Git & GitHub",
    ],

    github: "https://github.com/atheistog/wifiguard",
  },

  {
    name: "MetaCrypt",
    desc:
      "A Python-based CLI tool designed to protect file metadata through encryption, obfuscation, sanitization, and restoration techniques.",

    tech: [
      "Python 3.8+",
      "cryptography",
      "Pillow",
      "PyPDF2",
      "python-docx",
      "piexif",
      "Faker",
      "Git & GitHub",
    ],

    github: "https://github.com/atheistog/metacrypt",
  },

  {
    name: "Verum Digital Intelligence & Advisory Website",
    desc:
      "A modern multi-page corporate cybersecurity website developed with a dark-themed responsive interface and smooth frontend animations.",

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "IntersectionObserver API",
      "Responsive Design",
      "Git & GitHub",
    ],

    website: "https://verumdia.github.io",
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden bg-[#0a0f14] text-white">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.08),transparent_60%)]" />

        {/* Logo */}
        <Link href="/">
          <img
            src="/Omega.png"
            alt="Omega Logo"
            className="absolute top-4 left-4 z-20 h-10 w-10 rounded-full border bg-white p-1 shadow opacity-80 transition hover:scale-110 hover:opacity-100"
          />
        </Link>

        {/* Page Title */}
        <h1 className="pt-6 text-center text-2xl font-bold tracking-widest text-white/80">
          PROJECT ARCHIVE
        </h1>

        {/* Projects Grid */}
        <div className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-6 px-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-cyan-500/20 bg-[#111820] p-6 shadow-xl transition hover:scale-[1.02]"
            >

              {/* Project Number */}
              <div className="mb-2 text-xs tracking-widest text-cyan-400">
                PROJECT 0{index + 1}
              </div>

              {/* Project Name */}
              <h2 className="text-xl font-bold text-white">
                {project.name}
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    GitHub Repository
                  </a>
                )}

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                  >
                    Visit Website
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </PageTransition>
  );
}