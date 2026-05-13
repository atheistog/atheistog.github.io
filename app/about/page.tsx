"use client";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition";

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#e8e4d9] text-black p-6 flex justify-center">

      <div className="max-w-3xl w-full bg-white shadow-2xl p-8 border border-gray-300 relative">

        {/* LOGO (return Button) */}
        <img
          src="/Omega.png"
          alt="LOGO"
          onClick={() => router.push("/")}
          className="absolute top-0 left-0 w-10 h-10 rounded-full border border-gray-400 p-1 bg-white shadow cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition"
        />

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-6">
          <h1 className="text-xl font-bold tracking-wide">
            CONFIDENTIAL CASE FILE
          </h1>
          <span className="text-red-600 font-bold rotate-[-10deg] border border-red-600 px-2">
            CLASSIFIED
          </span>
        </div>

        {/* Top Section (Image + Basic Info) */}
        <div className="flex gap-6 items-start">

          {/* Profile Image */}
          <div className="bg-gray-200 p-2 shadow-md rotate-[-2deg]">
            <img
              src="/og.png"
              alt="OG"
              className="w-32 h-40 object-cover grayscale"
            />
          </div>

          {/* Info */}
          <div>
            <p><strong>Subject:</strong> Omkar Gopale</p>
            <p><strong>Alias:</strong> OG | Veritas Quaestor</p>
          </div>

        </div>

        {/* Divider */}
        <div className="my-6 border-t" />

        {/* Profile */}
        <h2 className="font-bold text-lg">Profile Summary</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Interdisciplinary Architect with a foundation in cybersecurity,
          combined with creative expertise in visual arts, storytelling, and film production.
          Focused on understanding systems and human behavior.
        </p>

        {/* Divider */}
        <div className="my-6 border-t" />

        {/* Domains */}
        <h2 className="font-bold text-lg">Domains of Expertise</h2>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
          <li>Cybersecurity & Digital Systems</li>
          <li>Visual Arts (Paintings, Comics, Digital)</li>
          <li>Writing (Fiction, Screenplay, Comics)</li>
          <li>Film Production & Direction</li>
          <li>Psychology & Human Behavior</li>
          <li>Criminology & Investigation</li>
        </ul>

        {/* Divider */}
        <div className="my-6 border-t" />

        {/* Background */}
        <h2 className="font-bold text-lg">Background</h2>
        <p className="mt-2 text-sm leading-relaxed">
          With formal education in cybersecurity and hands-on experience in film production,
          the subject demonstrates a unique ability to connect analytical systems with creative storytelling.
        </p>

      </div>
    </div>
  );
}