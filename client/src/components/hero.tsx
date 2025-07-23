import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] opacity-30"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="animate-fade-in space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-white">Brian O'Brien</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-blue-400 mb-6">
            AI Software Engineer
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Specializing in Azure OpenAI, LangChain, and intelligent application design.<br />
            Building scalable AI-powered solutions with .NET Core, Python, and cloud-native architecture.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg"
              onClick={() => handleScrollTo("#projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              View My Work
              <span className="ml-2">↓</span>
            </Button>
          </div>
        </div>
        
        {/* Social links - positioned at bottom */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-8">
          <a 
            href="https://github.com/brianobr" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/brian-o-brien-26073363" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:brianobr@outlook.com"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://www.bytesmith.digital" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Globe className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
