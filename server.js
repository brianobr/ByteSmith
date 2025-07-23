// Azure App Service entry point
// This file serves as the main entry point for Azure App Service deployment

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist/public directory
app.use(express.static(path.join(__dirname, 'dist', 'public')));

// Simple contact form API endpoint (basic fallback)
app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  // Basic validation
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, and message are required' 
    });
  }
  
  // In Azure, this will be handled by the full application
  res.json({ success: true, message: 'Message received successfully!' });
});

// Resume download endpoint
app.get('/api/resume', (req, res) => {
  const resumePath = path.join(__dirname, 'dist', 'public', 'resume.pdf');
  res.download(resumePath, 'Brian_OBrien_Resume.pdf', (err) => {
    if (err) {
      res.status(404).json({ error: 'Resume not found' });
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Serve the React app for all other routes (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'public', 'index.html'));
});

// Use Azure's assigned port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Portfolio server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;