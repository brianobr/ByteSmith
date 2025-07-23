import { ExternalLink, Github, MessageSquare, TrendingUp, Smartphone, Settings, FileText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      icon: <MessageSquare className="text-6xl text-primary/60" />,
      title: "AI Customer Service Bot",
      description: "Intelligent chatbot using GPT-4 and Azure Cognitive Search for automated customer support with 95% accuracy rate.",
      technologies: ["Azure OpenAI", "Python", "LangChain"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      icon: <TrendingUp className="text-6xl text-accent/60" />,
      title: "Healthcare Analytics Platform",
      description: ".NET Core application for healthcare data analysis with real-time reporting and compliance monitoring.",
      technologies: [".NET Core", "SQL Server", "Azure"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      icon: <Smartphone className="text-6xl text-primary/60" />,
      title: "Mobile AI Assistant",
      description: ".NET MAUI cross-platform app with voice input, OCR capabilities, and real-time AI analysis.",
      technologies: [".NET MAUI", "Azure AI", "OCR"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      icon: <Settings className="text-6xl text-accent/60" />,
      title: "Enterprise DevOps Solution",
      description: "Complete CI/CD pipeline with Azure DevOps, ARM templates, and automated testing for enterprise applications.",
      technologies: ["Azure DevOps", "ARM/Bicep", "Docker"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      icon: <FileText className="text-6xl text-primary/60" />,
      title: "RAG Document System",
      description: "Retrieval-Augmented Generation system for intelligent document search and analysis using vector embeddings.",
      technologies: ["LangGraph", "Vector DB", "Azure Search"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      icon: <GraduationCap className="text-6xl text-accent/60" />,
      title: "Interactive Learning Platform",
      description: "Educational platform for teaching .NET development with interactive coding exercises and automated grading.",
      technologies: [".NET Core", "React", "SignalR"],
      demoLink: "#",
      sourceLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work in software development, AI, and system architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project visual */}
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border-b border-slate-200 dark:border-slate-700">
                <div className="text-blue-600 opacity-60">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300 p-0"
                    onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300 p-0"
                    onClick={() => window.open(project.sourceLink, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            onClick={() => window.open("https://github.com/brianobr", "_blank")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
