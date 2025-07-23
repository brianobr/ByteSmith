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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1s" }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-light-custom">Brian</span>
            <span className="text-primary-custom"> O'Brien</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-muted-custom mb-8">
            AI Software Engineer & Cloud Architect
          </h2>
          <p className="text-lg md:text-xl text-light-custom/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building intelligent applications with Azure OpenAI, .NET Core, and Python. 
            Transforming ideas into scalable, AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => handleScrollTo("#projects")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => handleScrollTo("#contact")}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 font-semibold transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Social links */}
        <div className="mt-16 flex justify-center space-x-6 animate-slide-up">
          <a 
            href="https://github.com/brianobr" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-custom/60 hover:text-primary-custom transition-colors duration-300 text-2xl"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/brian-o-brien-26073363" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-custom/60 hover:text-primary-custom transition-colors duration-300 text-2xl"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="mailto:brianobr@outlook.com"
            className="text-light-custom/60 hover:text-primary-custom transition-colors duration-300 text-2xl"
          >
            <Mail className="w-8 h-8" />
          </a>
          <a 
            href="https://www.bytesmith.digital" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-custom/60 hover:text-primary-custom transition-colors duration-300 text-2xl"
          >
            <Globe className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
