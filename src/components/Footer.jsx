import React from "react";
export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-6 px-8 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Sharon Kosgei. All rights reserved.
        </p>
      </div>
    </footer>
  );
}