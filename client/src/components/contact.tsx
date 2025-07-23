import { useState } from "react";
import { Mail, Linkedin, Github, Globe, Send, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement actual form submission logic
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-custom text-xl" />,
      title: "Email",
      value: "brianobr@outlook.com",
      link: "mailto:brianobr@outlook.com"
    },
    {
      icon: <Linkedin className="text-accent-custom text-xl" />,
      title: "LinkedIn",
      value: "brian-o-brien-26073363",
      link: "https://www.linkedin.com/in/brian-o-brien-26073363"
    },
    {
      icon: <Github className="text-primary-custom text-xl" />,
      title: "GitHub",
      value: "github.com/brianobr",
      link: "https://github.com/brianobr"
    },
    {
      icon: <Globe className="text-accent-custom text-xl" />,
      title: "Website",
      value: "bytesmith.digital",
      link: "https://www.bytesmith.digital"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light-custom mb-4">Let's Build Something Amazing</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-light-custom/60 max-w-2xl mx-auto">
            Ready to bring your AI project to life? Let's discuss how we can work together to create innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary-custom mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className={`p-3 rounded-lg mr-4 ${
                    index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'
                  }`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-custom">{info.title}</h4>
                    <a 
                      href={info.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 ${
                        index % 2 === 0 
                          ? 'text-light-custom/60 hover:text-primary-custom' 
                          : 'text-light-custom/60 hover:text-accent-custom'
                      }`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-secondary/50 p-6 rounded-lg border border-white/10">
              <h4 className="font-semibold text-light-custom mb-3">Current Availability</h4>
              <div className="flex items-center text-accent-custom mb-2">
                <Circle className="w-3 h-3 mr-2 fill-current" />
                <span>Available for new projects</span>
              </div>
              <p className="text-light-custom/60 text-sm">
                I'm currently accepting new freelance projects and consulting opportunities. 
                Let's discuss how I can help bring your AI vision to reality.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold text-light-custom mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light-custom/80 font-medium mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full bg-dark-custom/50 border-white/20 text-light-custom placeholder:text-light-custom/40 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-light-custom/80 font-medium mb-2">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-dark-custom/50 border-white/20 text-light-custom placeholder:text-light-custom/40 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-light-custom/80 font-medium mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry"
                  className="w-full bg-dark-custom/50 border-white/20 text-light-custom placeholder:text-light-custom/40 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-light-custom/80 font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-dark-custom/50 border-white/20 text-light-custom placeholder:text-light-custom/40 focus:border-primary resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
