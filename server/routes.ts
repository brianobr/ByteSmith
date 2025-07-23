import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertPageViewSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Contact form submission:", req.body);
      
      // Validate request body with Zod
      const validation = insertContactSubmissionSchema.safeParse(req.body);
      if (!validation.success) {
        const errorMessage = fromZodError(validation.error);
        return res.status(400).json({ 
          message: errorMessage.toString()
        });
      }

      // Save contact submission to database
      const submission = await storage.createContactSubmission(validation.data);
      
      console.log("Contact submission saved:", submission.id);
      
      res.json({ 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  // Page view tracking
  app.post("/api/track", async (req, res) => {
    try {
      const pageViewData = {
        page: req.body.page || '/',
        userAgent: req.headers['user-agent'] || null,
        ipAddress: req.ip || req.connection.remoteAddress || null,
        referrer: req.headers['referer'] || null
      };

      const validation = insertPageViewSchema.safeParse(pageViewData);
      if (validation.success) {
        await storage.recordPageView(validation.data);
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Page tracking error:", error);
      res.json({ success: false });
    }
  });

  // Get contact submissions (for admin use)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Mark contact as read
  app.patch("/api/admin/contacts/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markContactAsRead(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking contact as read:", error);
      res.status(500).json({ error: "Failed to update contact" });
    }
  });

  // Get page analytics
  app.get("/api/admin/analytics", async (req, res) => {
    try {
      const page = req.query.page as string;
      const views = await storage.getPageViews(page);
      res.json(views);
    } catch (error) {
      console.error("Error fetching analytics:", error);
      res.status(500).json({ error: "Failed to fetch analytics" });
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
