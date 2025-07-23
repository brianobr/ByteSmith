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
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8">Let's Connect</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hello, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mr-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                    <div className="text-blue-600 dark:text-blue-400">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg">{info.title}</h4>
                    <a 
                      href={info.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-4">Current Availability</h4>
              <div className="flex items-center text-green-600 dark:text-green-400 mb-4">
                <Circle className="w-3 h-3 mr-3 fill-current" />
                <span className="font-medium">Available for new projects</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                I'm currently accepting new freelance projects and consulting opportunities. 
                Let's discuss how I can help bring your AI vision to reality.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 font-medium mb-3">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 font-medium mb-3">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-slate-700 dark:text-slate-300 font-medium mb-3">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry"
                  className="w-full bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 font-medium mb-3">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500 resize-none rounded-lg"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
