"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[50rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4 font-mulish">
        I’m <span className="font-semibold">Niyati Gupta</span>, a <span className="underline">FullStack Software Engineer</span> passionate about crafting clean, scalable, and impactful software.
      </p>
      <p className="mb-4 font-mulish">
        🎓 B.Tech in Computer Science from <span className="font-semibold">NIT Srinagar</span> | <span className="italic">Class of 2024 </span>
      </p>
      <p className="mb-4 font-mulish">
      🚀 Startup-savvy: Built <span className="font-semibold">matchmaking APIs (UrbanMatch)</span> and designed scalable <span className="font-semibold">data pipelines (CaaStle)</span>
      </p>
      <p className="mb-4 font-mulish">
      💻  Skilled in <span className="font-semibold">Python, Django, Node.js, JavaScript, Next.js, PostgreSQL -</span> with a growing love for backend, AI systems and product thinking.
      </p>
      <p className="mb-4 font-mulish">
        🤝 Team player, Thrive in fast-paced teams, love debugging complex flows, and enjoy turning ideas into products.
      </p>
      <p className="font-mulish">
        🕺 Outside work? I dance, play sports, and connect over curious conversations.
      </p>
    </motion.section>
  );
}
