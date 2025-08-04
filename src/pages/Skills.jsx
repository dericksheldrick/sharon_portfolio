import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Code, Github, Linkedin } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["React",  "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "blue"
    },
    {
      title: "Backend Development",
      icon: <Github className="h-6 w-6" />,
      skills: ["Node.js",  "Python", "Flask", "FastAPI", "REST APIs"],
      color: "green"
    },
    {
      title: "Database & Storage",
      icon: <Linkedin className="h-6 w-6" />,
      skills: ["PostgreSQL", "MySQL", "SQLite"],
      color: "purple"
    },
    {
      title: "Cloud & DevOps",
      icon: <Code className="h-6 w-6" />,
      skills: ["Docker", "CI/CD", "GitHub Actions", "Vercel", "Netlify", "Heroku"],
      color: "orange"
    },
    {
      title: "Tools & Technologies",
      icon: <Github className="h-6 w-6" />,
      skills: ["Git", "Linux", "VS Code", "Figma", "Postman", "Webpack", "Vite", "ESLint"],
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "border-blue-500 bg-blue-50 text-blue-700",
      green: "border-green-500 bg-green-50 text-green-700",
      purple: "border-purple-500 bg-purple-50 text-purple-700",
      orange: "border-orange-500 bg-orange-50 text-orange-700",
      teal: "border-teal-500 bg-teal-50 text-teal-700",
      pink: "border-pink-500 bg-pink-50 text-pink-700"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getBorderColor = (color) => {
    const borderMap = {
      blue: "border-blue-500",
      green: "border-green-500",
      purple: "border-purple-500",
      orange: "border-orange-500",
      teal: "border-teal-500",
      pink: "border-pink-500"
    };
    return borderMap[color] || borderMap.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50  mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to build 
            modern, scalable applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid  lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${getBorderColor(category.color)}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-slate-800">
                  <div className={`p-2 rounded-lg ${getColorClasses(category.color)}`}>
                    {category.icon}
                  </div>
                  <span className="text-lg font-semibold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${getColorClasses(category.color)} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
