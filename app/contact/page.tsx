"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center relative overflow-hidden">

      {/* LOGO (Home Link) */}
      <Link href="/" className="absolute top-4 left-4 z-20">
        <Image
          src="/Omega.png"
          alt="Home"
          width={40}
          height={40}
          className="rounded-full border bg-white p-1 shadow opacity-80 hover:opacity-100 hover:scale-110 transition"
        />
      </Link>

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* ID CARD */}
      <div className="w-96 bg-[#f7f3ea] shadow-2xl border border-black/20 p-6 rotate-[-2deg] relative z-10 hover:rotate-0 transition-transform duration-300">

        {/* HEADER */}
        <header className="border-b border-black pb-3 mb-4">
          <h1 className="text-lg font-bold tracking-widest text-black">
            ACCESS ID CARD
          </h1>
          <p className="text-xs text-black">AUTHORIZED ENTITY</p>
        </header>

        {/* PROFILE */}
        <section className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-black">
            <Image
              src="/og.png"
              alt="Omkar Gopale"
              width={64}
              height={64}
              className="object-cover grayscale hover:grayscale-0 transition"
            />
          </div>

          <div className="text-black">
            <p className="font-bold">Omkar Gopale</p>
            <p className="text-sm">OG | VQ</p>
            <p className="text-xs text-red-600 font-semibold">
              ACTIVE SUBJECT
            </p>
          </div>
        </section>

        {/* DETAILS */}
        <section>
          <dl className="space-y-2 text-sm text-black">

            <div>
              <dt className="font-semibold inline">Email:</dt>{" "}
              <dd className="inline">
                <a
                  href="mailto:omkar.gopale2402@gmail.com"
                  className="hover:underline"
                >
                  omkar.gopale2402@gmail.com
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-semibold inline">Mobile:</dt>{" "}
              <dd className="inline">
                <a href="tel:+919325687819" className="hover:underline">
                  +91 93256 87819
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-semibold inline">Instagram:</dt>{" "}
              <dd className="inline">
                <a
                  href="https://instagram.com/atheist.og"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @atheist.og
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-semibold inline">LinkedIn:</dt>{" "}
              <dd className="inline">
                <a
                  href="https://linkedin.com/in/omkar-gopale-24fb2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/og
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-semibold inline">GitHub:</dt>{" "}
              <dd className="inline">
                <a
                  href="https://github.com/atheistog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/atheistog
                </a>
              </dd>
            </div>

          </dl>
        </section>

        {/* FOOTER */}
        <footer className="mt-6 pt-3 border-t border-black text-xs text-black flex justify-between">
          <span>STATUS: ONLINE</span>
          <span>ID- OG:VQ</span>
        </footer>

      </div>
    </div>
  );
}