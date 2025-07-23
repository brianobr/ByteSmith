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
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            AI Software Engineer with over two decades of experience in cloud technologies and intelligent application design
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm an AI Software Engineer with over two decades of experience in software development and cloud technologies. 
                Currently specializing in Azure OpenAI, large language models, and intelligent application design, I help businesses 
                leverage AI to solve complex problems.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                My journey includes roles at Microsoft as a Developer Support Engineer, where I supported Azure's largest enterprise clients, 
                and as a Senior Software Engineer building healthcare systems. I've also taught over 1,000 students as an Adjunct Faculty 
                member at Dallas College.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Today, I focus on building AI-powered prototypes, chatbots, and virtual assistants using GPT-4, LangChain, and Azure AI services. 
                I'm passionate about bridging the gap between traditional software engineering and modern AI capabilities.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Achievement highlights */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl font-bold mb-3 text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Key competencies */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Key Competencies</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700 dark:text-slate-300">Azure OpenAI & GPT-4 Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></div>
                  <span className="text-slate-700 dark:text-slate-300">Cloud-Native Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700 dark:text-slate-300">Enterprise Solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></div>
                  <span className="text-slate-700 dark:text-slate-300">Technical Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
