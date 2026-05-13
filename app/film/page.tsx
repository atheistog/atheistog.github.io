"use client";

import Link from "next/link";
import Image from "next/image";

const films = [
  {
    title: "Digital Consequences",
    duration: "1:36",
    role: "Director / Writer",
    status: "Completed",
    description:
      "A surreal conversation between a smartphone and a plant explores digital vulnerability, cyber threats, and the importance of cybersecurity awareness in the modern age.",
    highlights: [
      "Unexpected interaction between technology and nature",
      "Explores cybersecurity risks and digital exposure",
      "Encourages safe software practices and trusted open-source alternatives",
    ],
    link: "https://youtu.be/ETosG98pvU0?si=We3O26oCu2NCkbf3",
  },
  {
    title: "CyberSaga: Prarambham",
    duration: "15:21",
    role: "Director / Writer / Cameo Actor",
    status: "Completed",
    description:
      "A cyber-investigation thriller following a team responding to a government database breach while uncovering hidden systems, encrypted clues, and Sanskrit-inspired digital mysteries.",
    highlights: [
      "Government database breach investigation",
      "IP tracing and cyber-forensics exploration",
      "Decoding cryptic Sanskrit-based digital systems",
    ],
    link: "https://youtu.be/Q_QTf2u7oyw?si=cE9jDuk9ZXZwr7MQ",
  },
  {
    title: "VYAYA",
    duration: "1:30",
    role: "Director / Writer / Cinematographer / Editor ",
    status: "Original Glimpse Debut",
    description:
      "A 90-second micro-short exploring the economy of human existence, where memory, effort, time, and identity become the final currency of the soul.",
    highlights: [
      "Explores the ‘Bank of Human Value’ concept",
      "Experimental cinematic storytelling",
      "Represents the debut exploration of Original Glimpse",
    ],
    link: "https://youtu.be/cnK9uH2n670?si=oORSKZC8GxYwaMhO",
  },
  {
    title: "Phase 1",
    duration: "Upcoming",
    role: "Original Glimpse",
    status: "In Development",
    description:
      "The first major phase of Original Glimpse currently under exploration and development. Built from months of experimentation, planning, and discovering a cinematic identity.",
    highlights: [
      "Represents the next evolution of Original Glimpse",
      "Focused on identity, experimentation, and cinematic voice",
      "Currently in active development",
    ],
    link: "https://www.instagram.com/original.glimpse",
    poster: "/poster.jpeg",
  },
];

export default function FilmPage() {
  return (
    <div className="min-h-screen bg-[#101010] text-white relative overflow-hidden">

      {/* Logo */}
      <Link href="/">
        <Image
          src="/Omega.png"
          alt="Omega Logo"
          width={40}
          height={40}
          className="absolute top-4 left-4 rounded-full border bg-white p-1 shadow opacity-80 hover:opacity-100 hover:scale-110 transition z-20"
        />
      </Link>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Title */}
      <h1 className="text-center pt-6 text-xl font-bold tracking-[0.3em] text-white/80 relative z-10">
        FILM & PRODUCTION ARCHIVE
      </h1>

      {/* Film Cards */}
      <div className="max-w-5xl mx-auto mt-10 md:mt-12 grid gap-8 px-4 md:px-6 relative z-10 pb-16">

        {films.map((film, i) => (
          <div
            key={film.title}
            className="
              bg-[#1c1c1c]
              border border-white/10
              p-6
              shadow-2xl
              hover:scale-[1.02]
              hover:-translate-y-1
              transition-all
              duration-300
              relative
              backdrop-blur-sm
            "
            style={{
              transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)`,
            }}
          >

            {/* Tape Effect */}
            <div className="absolute -top-2 left-6 w-12 h-3 bg-white/10 rotate-[-6deg]" />

            {/* Poster */}
            {film.poster && (
              <div className="mb-5 overflow-hidden border border-white/10">
                <Image
                  src={film.poster}
                  alt={`${film.title} Poster`}
                  width={1200}
                  height={700}
                  className="w-full object-cover"
                />
              </div>
            )}

            {/* Title */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-xl font-bold tracking-wide">
                {film.title}
              </h2>

              <span className="text-xs border border-white/20 px-2 py-1 text-white/70 tracking-wider">
                {film.duration}
              </span>
            </div>

            {/* Role */}
            <p className="text-sm text-white/60 mt-2">
              Role: {film.role}
            </p>

            {/* Description */}
            <p className="text-sm leading-7 text-white/80 mt-4">
              {film.description}
            </p>

            {/* Highlights */}
            <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
              {film.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">

              <span className="text-xs inline-block px-3 py-1 border border-white/20 tracking-widest uppercase text-white/70">
                {film.status}
              </span>

              <Link
                href={film.link}
                target="_blank"
                className="text-sm border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
              >
                View Project
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}