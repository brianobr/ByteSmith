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
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light-custom mb-4">Core Competencies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-light-custom/60 max-w-2xl mx-auto">
            Expertise in modern AI technologies, cloud platforms, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-secondary/50 p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary-custom mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-light-custom mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="text-light-custom/80">{skill.name}</span>
                    <span className="text-accent-custom">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-light-custom mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                {tech.icon}
                <span className="text-sm mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
