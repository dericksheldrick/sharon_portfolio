import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-8 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center p-6 bg-slate-50 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Me</h2>
        <p className="text-slate-600 mb-6">Feel free to reach out if you'd like to collaborate or have any questions.</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="px-4 py-2 border border-gray-300 rounded" />
          <textarea rows="5" placeholder="Your Message" className="px-4 py-2 border border-gray-300 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </section>
  );
}