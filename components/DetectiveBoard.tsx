"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const notes = [
  { title: "Art", link: "/art", position: "top-10 left-10", rotate: "-6deg" },
  { title: "Writing", link: "/writing", position: "top-10 right-16", rotate: "5deg" },
  { title: "Film", link: "/film", position: "top-1/2 right-10", rotate: "-4deg" },
  { title: "Tech", link: "/tech", position: "bottom-16 left-10", rotate: "6deg" },
  { title: "Odiyan", link: "/odiyan", position: "bottom-10 right-16", rotate: "-5deg" },
  { title: "Contact", link: "/contact", position: "top-1/2 left-10", rotate: "3deg" },
];

export default function DetectiveBoard() {
  const centerRef = useRef<HTMLDivElement>(null);
  const noteRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  useEffect(() => {
    function updateLines() {
      if (!centerRef.current) return;

      const centerRect = centerRef.current.getBoundingClientRect();
      const centerX = centerRect.left + centerRect.width / 2;
      const centerY = centerRect.top + centerRect.height / 2;

      const newLines = noteRefs.current
        .map((note) => {
          if (!note) return null;

          const rect = note.getBoundingClientRect();

          // attach to pin (top center of note)
          const x = rect.left + rect.width / 2;
          const y = rect.top;

          return {
            x1: centerX + (Math.random() * 6 - 3),
            y1: centerY + (Math.random() * 6 - 3),
            x2: x + (Math.random() * 6 - 3),
            y2: y + (Math.random() * 6 - 3),
          };
        })
        .filter(Boolean) as {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
      }[];

      setLines(newLines);
    }

    updateLines();
    window.addEventListener("resize", updateLines);

    return () => window.removeEventListener("resize", updateLines);
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#2a1f1f] overflow-hidden">

      {/* 🪵 Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.6))]" />

      {/* 🧵 SVG STRINGS */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(180,40,40,0.7)"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ filter: "blur(0.3px)" }}
          >
            <animate
              attributeName="stroke-dashoffset"
              from="200"
              to="0"
              dur="0.6s"
              fill="freeze"
            />
          </line>
        ))}
      </svg>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* 📸 CENTER POLAROID */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Link href="/about">
          <motion.div
            ref={centerRef}
            whileHover={{ scale: 1.12 }}
            className="bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-center cursor-pointer rotate-[-2deg] border border-gray-200"
          >
            <img
              src="/Omega.png"
              alt="Omega"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-gray-300"
            />
            <p className="font-bold text-black">Omkar Gopale</p>
            <p className="text-sm text-gray-600">OG</p>
          </motion.div>
        </Link>
      </div>

      {/* 📌 NOTES */}
      {notes.map((note, i) => (
        <Link key={i} href={note.link}>
          <motion.div
            ref={(el) => {
              noteRefs.current[i] = el;
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className={`absolute z-10 ${note.position} bg-yellow-100 p-4 shadow-2xl border border-yellow-300 cursor-pointer text-gray-800`}
            style={{
              transform: `rotate(${note.rotate})`,
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* 📌 Real pin */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-700 rounded-full border border-black shadow-md"></div>

            <p className="font-semibold tracking-wide">
              {note.title}
            </p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}