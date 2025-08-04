import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/profile.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-blue-600">Sharon Kosgei</span>
        </div>
       
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
       
        <ul className="hidden md:flex space-x-6 text-slate-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
  
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-slate-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}