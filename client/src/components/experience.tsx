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
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light-custom mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-dark-custom/50 p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-custom">{exp.title}</h3>
                  <p className="text-light-custom/80">{exp.company}</p>
                </div>
                <div className={`font-medium ${exp.current ? 'text-accent-custom' : 'text-accent-custom'}`}>
                  {exp.period}
                </div>
              </div>
              <ul className="text-light-custom/80 space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-primary-custom mt-1 mr-3 flex-shrink-0" />
                    {achievement}
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
