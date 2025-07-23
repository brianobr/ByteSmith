import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/brianobr",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/brian-o-brien-26073363",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:brianobr@outlook.com",
      label: "Email"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      href: "https://www.bytesmith.digital",
      label: "Website"
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary-custom">ByteSmith</span>
            <p className="text-light-custom/60 mt-2">Building the future with AI and innovation</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-custom/60 hover:text-primary-custom transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-light-custom/60">
            © {currentYear} Brian O'Brien. All rights reserved. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-primary-custom transition-colors duration-300">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-primary-custom transition-colors duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
