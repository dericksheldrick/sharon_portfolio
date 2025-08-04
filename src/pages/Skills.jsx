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
      skills: ["Node.js", "Express", "Python", "Django", "FastAPI", "PHP", "Laravel", "Ruby on Rails", "GraphQL", "REST APIs"],
      color: "green"
    },
    {
      title: "Database & Storage",
      icon: <Linkedin className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase", "DynamoDB", "SQLite", "Prisma", "Mongoose"],
      color: "purple"
    },
    {
      title: "Cloud & DevOps",
      icon: <Code className="h-6 w-6" />,
      skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel", "Netlify", "Heroku"],
      color: "orange"
    },
    {
      title: "Tools & Technologies",
      icon: <Github className="h-6 w-6" />,
      skills: ["Git", "Linux", "VS Code", "Figma", "Postman", "Jest", "Cypress", "Webpack", "Vite", "ESLint"],
      color: "teal"
    },
    {
      title: "Mobile & Others",
      icon: <Linkedin className="h-6 w-6" />,
      skills: ["React Native", "Flutter", "PWA", "WebRTC", "Socket.io", "Stripe", "Auth0", "Microservices", "Agile", "Scrum"],
      color: "pink"
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* JavaScript Proficiency Section */}
        <section className="mt-16 max-w-4xl mx-auto px-4 bg-white border border-slate-300 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">JavaScript Proficiency</h3>
          <p className="text-slate-600 leading-relaxed">
            I have a solid grasp of JavaScript fundamentals including ES6+ features, asynchronous programming with Promises and async/await, array manipulation methods, and event-driven programming. This strong foundation enables me to effectively develop React applications and handle complex front-end logic.
          </p>
        </section>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Experience Level</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-slate-600">Expert (3+ years)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-slate-600">Proficient (1-3 years)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-slate-600">Learning (&lt; 1 year)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
