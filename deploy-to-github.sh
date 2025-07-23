#!/bin/bash

# Quick deployment script for GitHub
# This script helps you push your portfolio to GitHub for Azure deployment

echo "🚀 Portfolio GitHub Deployment Script"
echo "====================================="

# Check if git is configured
if ! git config user.name > /dev/null; then
    echo "⚠️  Git user not configured. Please set up:"
    echo "git config --global user.name 'Your Name'"
    echo "git config --global user.email 'your.email@example.com'"
    exit 1
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Create commit
echo "💾 Creating commit..."
git commit -m "Portfolio website ready for Azure deployment

- Complete portfolio with refined design
- Azure App Service deployment configuration
- GitHub Actions workflow for CI/CD
- Professional sections: About, Skills, Experience, Projects, Contact
- Responsive design with dark theme support"

# Instructions for user
echo ""
echo "✅ Your portfolio is ready for GitHub!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub.com"
echo "2. Copy the repository URL"
echo "3. Run these commands:"
echo ""
echo "   git remote add origin YOUR_GITHUB_REPO_URL"
echo "   git push -u origin main"
echo ""
echo "4. Follow the Azure deployment guide in AZURE_DEPLOYMENT_GUIDE.md"
echo ""
echo "📖 Full deployment instructions: AZURE_DEPLOYMENT_GUIDE.md"