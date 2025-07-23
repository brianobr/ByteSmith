import { Award, GraduationCap, Users, BookOpen } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      icon: <Award className="text-primary-custom text-xl" />
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: <Award className="text-accent-custom text-xl" />
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      icon: <Award className="text-primary-custom text-xl" />
    },
    {
      title: "Developing Solutions for Microsoft Azure",
      issuer: "Microsoft",
      icon: <Award className="text-accent-custom text-xl" />
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Certifications & Education</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Professional credentials and educational background that validate my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8">Microsoft Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mr-6">
                    <div className="text-blue-600 dark:text-blue-400">
                      {cert.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{cert.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Teaching */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8">Education & Teaching</h3>
            
            {/* Education */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mr-6">
                  <GraduationCap className="text-blue-600 dark:text-blue-400 text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Bachelor of Science</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">Computer Science</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg mb-2">Florida State University</p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">GPA: 3.1 | Upsilon Pi Epsilon Honor Society</p>
              <div className="flex items-center text-cyan-500">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-medium">Honor Society Member</span>
              </div>
            </div>

            {/* Teaching Experience */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl mr-6">
                  <BookOpen className="text-cyan-600 dark:text-cyan-400 text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Adjunct Faculty</h4>
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold">Dallas College</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg mb-2">20+ Years Teaching Experience</p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Taught over 1,000 students in .NET development, database design, and systems administration</p>
              <div className="flex items-center text-blue-600">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-medium">1000+ Students Taught</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
