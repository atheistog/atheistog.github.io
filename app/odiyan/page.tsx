"use client";

import Link from "next/link";

const thoughts = [
  { text: "Human behavior follows patterns under pressure.", domain: "Psychology" },
  { text: "Every system is exploitable if observed long enough.", domain: "Cyber" },
  { text: "Art is structured chaos.", domain: "Art" },
  { text: "Silence reveals more than speech.", domain: "Philosophy" },
  { text: "Narratives shape perception of truth.", domain: "Writing" },
  { text: "Investigation is controlled curiosity.", domain: "Criminology" },
  { text: "Interfaces are psychology in disguise.", domain: "Tech" },
  { text: "People mirror patterns they don’t see.", domain: "Behavior" },
  { text: "Stories are compressed human experience.", domain: "Storytelling" },
];

export default function OdiyanPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🧿 LOGO */}
      <Link href="/">
        <img
          src="/Omega.png"
          className="absolute top-4 left-4 w-10 h-10 rounded-full border bg-white p-1 shadow opacity-80 hover:opacity-100 hover:scale-110 transition z-20"
        />
      </Link>

      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* TITLE */}
      <h1 className="text-center pt-6 text-xs tracking-[0.4em] text-white/30">
        ODIYAN — COGNITIVE GRID
      </h1>

      {/* GRID */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">

        {thoughts.map((t, i) => {
          const size =
            i % 3 === 0
              ? "col-span-2"
              : "col-span-1";

          const rotate =
            i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]";

          return (
            <div
              key={i}
              className={`${size} ${rotate} border border-white/10 p-4 text-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition`}
            >
              {/* DOMAIN */}
              <div className="text-[10px] text-white/40 mb-2 uppercase tracking-widest">
                {t.domain}
              </div>

              {/* TEXT */}
              <p className="text-white/80 leading-relaxed">
                {t.text}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
}