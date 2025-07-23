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
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light-custom mb-4">Certifications & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary-custom mb-6">Microsoft Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-dark-custom/50 p-6 rounded-lg border border-white/10 flex items-center"
                >
                  <div className={`p-3 rounded-lg mr-4 ${
                    index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'
                  }`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-custom">{cert.title}</h4>
                    <p className="text-light-custom/60 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary-custom mb-6">Education</h3>
            <div className="bg-dark-custom/50 p-8 rounded-lg border border-white/10">
              <div className="flex items-center mb-4">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <GraduationCap className="text-primary-custom text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-light-custom">Bachelor of Science</h4>
                  <p className="text-primary-custom">Computer Science</p>
                </div>
              </div>
              <p className="text-light-custom/80 mb-2">Florida State University</p>
              <p className="text-light-custom/60 mb-4">GPA: 3.1 | Upsilon Pi Epsilon Honor Society</p>
              <div className="flex items-center text-accent-custom">
                <Award className="w-4 h-4 mr-2" />
                <span className="font-medium">Honor Society Member</span>
              </div>
            </div>

            {/* Teaching Experience Highlight */}
            <div className="bg-dark-custom/50 p-8 rounded-lg border border-white/10">
              <div className="flex items-center mb-4">
                <div className="bg-accent/20 p-3 rounded-lg mr-4">
                  <BookOpen className="text-accent-custom text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-light-custom">Adjunct Faculty</h4>
                  <p className="text-accent-custom">Dallas College</p>
                </div>
              </div>
              <p className="text-light-custom/80 mb-2">20+ Years Teaching Experience</p>
              <p className="text-light-custom/60 mb-4">Taught over 1,000 students in .NET development, database design, and systems administration</p>
              <div className="flex items-center text-primary-custom">
                <Users className="w-4 h-4 mr-2" />
                <span className="font-medium">1000+ Students Taught</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
