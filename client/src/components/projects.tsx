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
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light-custom mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-light-custom/60 max-w-2xl mx-auto">
            Innovative AI solutions and software applications built with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-secondary/50 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Project icon mockup */}
              <div className="mb-6 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-light-custom mb-3">{project.title}</h3>
              <p className="text-light-custom/60 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`px-3 py-1 text-sm rounded-full ${
                      techIndex % 2 === 0 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-accent/20 text-accent'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-primary-custom hover:text-accent-custom transition-colors duration-300 p-0"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-light-custom/60 hover:text-light-custom transition-colors duration-300 p-0"
                  onClick={() => window.open(project.sourceLink, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => window.open("https://github.com/brianobr", "_blank")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
