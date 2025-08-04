// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white px-6"
    >

      <motion.h1
        className="text-5xl font-bold text-blue-700 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Sharon Kosgei
      </motion.h1>

      <motion.p
        className="text-xl text-slate-700 max-w-xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Software Engineer & Full-Stack Developer passionate about building modern, scalable web applications.
      </motion.p>

      <motion.a
        href="#projects"
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
