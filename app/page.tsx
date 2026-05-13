"use client";

import { useState, useEffect } from "react";
import Clapboard from "@/components/Clapboard";
import DetectiveBoard from "@/components/DetectiveBoard";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const hasEntered = sessionStorage.getItem("entered");

    if (hasEntered) {
      setEntered(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("entered", "true");
    setEntered(true);
  };

  if (!mounted) return null;

  if (!entered) {
    return <Clapboard onEnter={handleEnter} />;
  }

  return <DetectiveBoard />;
}