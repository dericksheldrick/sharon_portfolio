import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 }
  }
};

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">About Me</h2>

      <motion.div
        className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-10 shadow-sm"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Hi, I'm Sharon Kosgei</h3>
        <p className="text-slate-700 text-lg leading-relaxed">
          Software Engineer & Full-Stack Developer passionate about creating innovative web solutions using modern technologies. Experienced in React, Python, Flask, and responsive web design. Recent graduate from Moringa School with a strong foundation in full-stack development.
        </p>
      </motion.div>

      <motion.div
        className="bg-white border border-slate-300 rounded-lg p-6 mb-10 shadow-md"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Education</h3>
        <p className="text-slate-600 leading-relaxed">
          Software Engineering Graduate from Moringa School . Specialized in full-stack web development and modern programming practices.
        </p>
      </motion.div>

      <motion.div
        className="bg-white border border-slate-300 rounded-lg p-6 mb-10 shadow-md"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Technical Skills</h3>

        <p className="text-slate-600 leading-relaxed mb-6">
          I specialize in building interactive and performant web applications using <strong>React</strong> alongside a strong foundation in modern <strong>JavaScript (ES6+)</strong>. This includes expertise in functional programming concepts, asynchronous code handling with Promises and async/await, and efficient DOM manipulation.  
          My React projects demonstrate component-based architecture, hooks usage, state management, and responsive UI design.
        </p>

        <p className="text-slate-600 leading-relaxed">
          Proficient in HTML/CSS, JavaScript, React, Python, Flask, and Tailwind CSS. Focus on creating responsive, user-friendly applications with clean code.
        </p>
      </motion.div>

      <motion.div
        className="bg-white border border-slate-300 rounded-lg p-6 shadow-md"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Philosophy</h3>
        <p className="text-slate-600 leading-relaxed">
          Committed to writing clean, maintainable code and creating exceptional user experiences. Always eager to learn new technologies and tackle challenging problems.
        </p>
      </motion.div>
    </section>
  );
}
