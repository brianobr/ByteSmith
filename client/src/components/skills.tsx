import { Bot, Cloud, Code } from "lucide-react";
import { SiPython, SiDocker, SiGithub } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Bot className="text-4xl" />,
      title: "AI & Machine Learning",
      skills: [
        { name: "Azure OpenAI", level: "Expert" },
        { name: "GPT-4 Integration", level: "Expert" },
        { name: "LangChain/LangGraph", level: "Advanced" },
        { name: "RAG Architecture", level: "Advanced" },
      ]
    },
    {
      icon: <Cloud className="text-4xl" />,
      title: "Cloud & DevOps",
      skills: [
        { name: "Azure Functions", level: "Expert" },
        { name: "Azure DevOps", level: "Expert" },
        { name: "Docker", level: "Advanced" },
        { name: "ARM/Bicep", level: "Advanced" },
      ]
    },
    {
      icon: <Code className="text-4xl" />,
      title: "Development",
      skills: [
        { name: "C# / .NET Core", level: "Expert" },
        { name: "Python", level: "Expert" },
        { name: "REST APIs", level: "Expert" },
        { name: "Microservices", level: "Advanced" },
      ]
    },
  ];

  const technologies = [
    { icon: <Cloud className="text-4xl text-primary-custom" />, name: "Azure" },
    { icon: <SiPython className="text-4xl text-accent-custom" />, name: "Python" },
    { icon: <Bot className="text-4xl text-primary-custom" />, name: "AI/ML" },
    { icon: <SiDocker className="text-4xl text-accent-custom" />, name: "Docker" },
    { icon: <Code className="text-4xl text-primary-custom" />, name: "SQL Server" },
    { icon: <SiGithub className="text-4xl text-accent-custom" />, name: "GitHub" },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Technical Skills</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-6">
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-500 font-semibold">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          skill.level === 'Expert' ? 'w-full bg-blue-600' :
                          skill.level === 'Advanced' ? 'w-4/5 bg-cyan-500' : 'w-3/5 bg-slate-400'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-12">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm mt-3 text-slate-600 dark:text-slate-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
