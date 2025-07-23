import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Name, email, and message are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // TODO: Implement email sending logic using nodemailer or similar
      // For now, just log the contact form submission
      console.log("Contact form submission:", {
        name,
        email,
        subject: subject || "Contact Form Submission",
        message,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        message: "Message sent successfully! I'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // TODO: Implement resume file serving
    // For now, redirect to a placeholder or return info about resume
    res.json({
      message: "Resume download would be implemented here",
      filename: "Brian_OBrien_Resume.pdf"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
