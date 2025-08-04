import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "SmartFarm",
      description: "A livestock management app using React and JSON Server.",
      tech: ["React", "Tailwind", "JSON Server"],
      link: "https://github.com/jebesharon/smartfarm",
      demo: "https://smartfarm-demo.vercel.app",
      image: "/projects/smartfarm.png",
    },
    {
      title: "Expense Tracker",
      description: "Track your daily expenses with filtering and sorting features.",
      tech: ["React", "CSS", "Hooks"],
      link: "https://github.com/jebesharon/expense-tracker",
      demo: "https://expense-tracker-sepia-pi.vercel.app/",
      image: "/projects/expense-tracker.png",
    },
    {
      title: "SecureVision",
      description: "SPA for product booking and management using Flask & React.",
      tech: ["React", "Flask", "REST API"],
      link: "https://github.com/jebesharon/securevision",
      image: "/projects/securevision.png",
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Projects</h2>
        <p className="text-slate-600 mb-12">Here are some of the projects I've built recently.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 bg-slate-50 rounded-lg shadow-md flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="bg-blue-100 text-blue-700 px-2 py-1 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition text-center font-semibold"
                >
                  View Code
                </a>
                
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition text-center font-semibold"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
