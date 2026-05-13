"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Clapboard({ onEnter }: { onEnter: () => void }) {
  const [clapped, setClapped] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  const handleClap = () => {
    if (clapped) return;

    setClapped(true);

    setTimeout(() => {
      onEnter();
    }, 500);
  };

  useEffect(() => {
    const handleKey = () => handleClap();

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div
      onClick={handleClap}
      className="h-screen flex items-center justify-center bg-black text-white cursor-pointer select-none"
    >
      <div className="relative">

        <motion.div
          initial={{ rotate: -25 }}
          animate={{ rotate: clapped ? 0 : -25 }}
          transition={{ duration: 0.25, ease: "easeIn" }}
          className="w-80 h-12 origin-bottom-left flex items-center justify-center"
          style={{
            background:
              "repeating-linear-gradient(45deg, black, black 10px, white 10px, white 20px)",
          }}
        />

        <div className="w-80 bg-black border-2 border-white p-4 text-sm">

          <div className="grid grid-cols-2 gap-2">

            <p><span className="text-gray-400">PROD:</span> Original Glimpse</p>
            <p><span className="text-gray-400">DATE:</span> {date}</p>

            <p><span className="text-gray-400">DIR:</span> OG</p>
            <p><span className="text-gray-400">CAM:</span> Observer</p>

            <p><span className="text-gray-400">SCENE:</span> 01</p>
            <p><span className="text-gray-400">TAKE:</span> 01</p>

          </div>

          <p className="mt-4 text-center text-gray-500 text-xs tracking-wide">
            Tap, click, or press any key
          </p>
        </div>

        {clapped && (
          <div className="absolute inset-0 bg-white opacity-70 animate-ping pointer-events-none" />
        )}

      </div>
    </div>
  );
}