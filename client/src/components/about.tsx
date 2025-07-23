import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "1000+", label: "Students Taught" },
    { value: "50+", label: "AI Projects" },
    { value: "4", label: "Azure Certifications" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light-custom mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary-custom mb-4">AI Software Engineer & Innovation Leader</h3>
            <p className="text-light-custom/80 leading-relaxed">
              With over two decades of software development experience and a strong foundation in cloud-native development, 
              I specialize in building intelligent applications using large language models (LLMs) and modern AI technologies.
            </p>
            <p className="text-light-custom/80 leading-relaxed">
              My expertise spans Azure OpenAI services, GPT-based solutions, and scalable systems using .NET Core, C#, and Python. 
              I blend extensive software and support experience with cutting-edge AI innovation, DevOps best practices, and Agile leadership.
            </p>
            <p className="text-light-custom/80 leading-relaxed">
              Currently working as a freelance AI & Software Developer while serving as a Developer Support Engineer at Microsoft, 
              I help enterprise clients architect and implement AI-enhanced Azure applications.
            </p>
            
            <div className="pt-6">
              <Button 
                variant="ghost" 
                className="text-primary-custom hover:text-accent-custom transition-colors duration-300 p-0"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Professional Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-dark-custom/50 p-6 rounded-lg border border-white/10"
                >
                  <div className={`text-3xl font-bold mb-2 ${index % 2 === 0 ? 'text-primary-custom' : 'text-accent-custom'}`}>
                    {stat.value}
                  </div>
                  <div className="text-light-custom/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
