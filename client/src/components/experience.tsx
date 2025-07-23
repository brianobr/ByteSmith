import { ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Freelance AI & Software Developer",
      company: "Brian O'Brien Services, LLC",
      period: "Aug 2023 – Present",
      current: true,
      achievements: [
        "Built AI-powered prototypes using Azure OpenAI, LangChain, and custom GPTs for small business automation",
        "Developed chatbots and virtual assistants using GPT-4, integrated with third-party APIs and document retrieval systems (RAG)",
        "Created .NET MAUI mobile apps with AI features such as voice input, OCR, and real-time form analysis",
        "Designed and deployed LLM services on Azure using Functions, Cognitive Search, and AI Studio"
      ]
    },
    {
      title: "Developer Support Engineer",
      company: "Microsoft",
      period: "Nov 2019 – Mar 2025",
      current: false,
      achievements: [
        "Supported Azure development services including ARM, Bicep, Azure Batch, Storage, and Service Fabric",
        "Diagnosed and resolved complex issues for Azure's largest enterprise and government cloud customers",
        "Supported customer development in .NET, PowerShell, Java, Python, and JavaScript",
        "Advised on architecture and integration strategies for scalable, AI-enabled Azure applications"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Corepoint Health",
      period: "Oct 2013 – Nov 2019",
      current: false,
      achievements: [
        "Built backend systems with .NET and WPF for healthcare messaging and rules engines",
        "Led PoC efforts for cloud migration using Azure SQL and Azure Load Balancer",
        "Spearheaded DevOps transformation to Azure DevOps CI/CD pipelines"
      ]
    },
    {
      title: "Adjunct Faculty (Part-Time)",
      company: "Dallas College",
      period: "Jan 2003 – Present",
      current: true,
      achievements: [
        "Taught over 1,000 students in subjects including .NET development, database design, and systems administration"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Professional Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A timeline of my career journey building AI solutions and enterprise systems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center">
                  {exp.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mr-3">
                      Current
                    </span>
                  )}
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
