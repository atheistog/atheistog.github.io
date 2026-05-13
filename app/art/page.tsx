"use client";

import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const artworks = [
  { id: 1, title: "Sketch 01", image: "/img 1.jpg" },
  { id: 2, title: "Concept 02", image: "/img 2.jpg" },
  { id: 3, title: "Comic Frame", image: "/img 3.jpg" },
  { id: 4, title: "Character Study", image: "/img 4.jpg" },
  { id: 5, title: "Digital Art", image: "/img 5.jpg" },
  { id: 6, title: "Storyboard", image: "/img 6.jpeg" },
];

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-[#b8b1a3] relative overflow-hidden">

      {/* 🧿 LOGO */}
      <Link href="/">
        <img
          src="/Omega.png"
          className="absolute top-4 left-4 w-10 h-10 rounded-full border bg-white p-1 shadow opacity-70 hover:opacity-100 hover:scale-110 transition z-30"
          alt="Logo"
        />
      </Link>

      {/* DESK SURFACE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent_70%)]" />

      {/* TITLE */}
      <h1 className="text-center pt-6 text-xl font-bold tracking-widest text-black/80">
        ART WORKSPACE
      </h1>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 relative z-10">

        {artworks.map((art, i) => (
          <div
            key={art.id}
            className="relative bg-[#fdfcf7] p-3 shadow-2xl cursor-pointer transition duration-300 hover:z-20 hover:scale-105"
            style={{
              transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + i)}deg)`,
            }}
          >
            {/* TAPE */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-yellow-200 opacity-70 rotate-[-8deg]" />

            {/* IMAGE */}
            <div className="w-full bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
              <img
                src={art.image}
                alt={art.title}
                className="max-w-full max-h-[500px] w-auto h-auto object-contain"
              />
            </div>

            {/* TITLE */}
            <p className="text-sm mt-3 text-center font-medium tracking-wide">
              {art.title}
            </p>
          </div>
        ))}

      </div>

      {/* INSTAGRAM BUTTON */}
      <div className="flex justify-center mt-16 relative z-20">
        <a
         href="https://instagram.com/og.artverse"
         target="_blank"
         rel="noopener noreferrer"
         className="px-6 py-3 bg-black text-white rounded-full tracking-wider text-sm shadow-lg hover:scale-105 hover:bg-neutral-800 transition duration-300"
        >
          More artworks on Instagram →
        </a>
      </div>

      {/* Notebook */}
      <div className="hidden md:block absolute right-10 top-32 w-36 h-44 bg-white shadow-xl rotate-6 z-0">
        <div className="h-full w-full border-l-4 border-gray-300 p-2 text-xs text-gray-500">
          notes...
        </div>
      </div>

      {/* Pencil */}
      <div className="hidden md:block absolute left-20 bottom-20 w-48 h-[5px] bg-yellow-600 rotate-12 rounded-full shadow-md"></div>

      {/* Coffee stain */}
      <div className="hidden md:block absolute bottom-10 right-1/3 w-20 h-20 border-4 border-brown-300 rounded-full opacity-20"></div>

    </div>
  );
}