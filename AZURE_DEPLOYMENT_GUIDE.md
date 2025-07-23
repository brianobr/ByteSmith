# Azure App Service Deployment Guide

This guide will walk you through deploying your portfolio website to Azure App Service using GitHub integration.

## Prerequisites

1. **Azure Account** - You'll need an active Azure subscription
2. **GitHub Account** - Your code will be hosted on GitHub
3. **Azure CLI** (optional but recommended for advanced management)

## Step 1: Push Your Code to GitHub

1. **Create a new GitHub repository:**
   - Go to GitHub.com and create a new repository
   - Name it something like `portfolio-website` or `bytesmith-portfolio`
   - Make it public or private (your choice)
   - Don't initialize with README since you already have code

2. **Push your code to GitHub:**
   ```bash
   # In your project directory (current Replit)
   git init
   git add .
   git commit -m "Initial portfolio website commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Step 2: Create Azure App Service

1. **Log into Azure Portal:**
   - Go to https://portal.azure.com
   - Sign in with your Azure account

2. **Create a new App Service:**
   - Click "Create a resource"
   - Search for "App Service" and select it
   - Click "Create"

3. **Configure the App Service:**
   - **Subscription:** Choose your Azure subscription
   - **Resource Group:** Create new or use existing
   - **Name:** Choose a unique name (e.g., `bytesmith-portfolio`)
   - **Publish:** Code
   - **Runtime stack:** Node 20 LTS
   - **Operating System:** Linux
   - **Region:** Choose closest to your users
   - **Pricing Plan:** Choose based on your needs (Free F1 tier available)

4. **Review and Create:**
   - Click "Review + create"
   - Click "Create" and wait for deployment

## Step 3: Set Up GitHub Deployment

1. **In your Azure App Service:**
   - Go to your newly created App Service
   - In the left menu, find "Deployment Center"

2. **Configure Source:**
   - **Source:** GitHub
   - **Organization:** Your GitHub username
   - **Repository:** Select your portfolio repository
   - **Branch:** main

3. **Configure Build:**
   - **Build provider:** GitHub Actions
   - **Runtime stack:** Node.js
   - **Version:** 20 LTS

4. **Complete Setup:**
   - Click "Save"
   - Azure will automatically create a GitHub Actions workflow file

## Step 4: Configure GitHub Secrets (CRITICAL)

**Your deployment is failing because this step is missing. You must complete this before deployments will work.**

1. **Download Publish Profile:**
   - Go to your Azure App Service in the Azure portal
   - Click "Get publish profile" button (in the Overview section)
   - This downloads a `.publishsettings` file to your computer

2. **Add to GitHub Secrets:**
   - Go to your GitHub repository on GitHub.com
   - Click Settings tab (top of repository page)
   - Click "Secrets and variables" → "Actions" (left sidebar)
   - Click "New repository secret" button
   - **Name**: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - **Value**: Open the downloaded `.publishsettings` file in a text editor and copy ALL the content
   - Click "Add secret"

3. **Verify Secret is Added:**
   - You should see `AZURE_WEBAPP_PUBLISH_PROFILE` in your repository secrets list
   - The value will be hidden for security

**Without this secret, all deployments will fail with "invalid publish profile" error.**

## Step 5: Update Workflow Configuration

The deployment files have been created for you:

### Files Created:
- **web.config** - IIS configuration for Azure App Service
- **server.js** - Azure-specific entry point
- **.github/workflows/azure-webapp-deploy.yml** - GitHub Actions workflow
- **build-azure.js** - Custom build script for Azure deployment

### Update the workflow file:
1. Open `.github/workflows/azure-webapp-deploy.yml`
2. Change `AZURE_WEBAPP_NAME` from `bytesmith-portfolio` to match your actual App Service name
3. **Important**: The app name must exactly match what you created in Azure
4. Commit and push the changes

**Example**: If your Azure App Service is named `my-portfolio-site`, change line 10:
```yaml
AZURE_WEBAPP_NAME: my-portfolio-site
```

## Step 6: Deploy

### Automatic Deployment
- Any push to the `main` branch automatically triggers deployment
- Pull requests also trigger builds for testing

### Manual Deployment
You can manually trigger deployments with custom options:

1. **Go to GitHub repository → Actions tab**
2. **Select "Deploy to Azure App Service" workflow**
3. **Click "Run workflow" button**
4. **Configure deployment options:**
   - **Environment**: `production` or `staging`
   - **Build mode**: 
     - `standard` - Normal build with cache
     - `force-rebuild` - Clean rebuild (removes node_modules)
     - `skip-cache` - Install without cache
   - **Database migrations**: Enable/disable database updates
   - **Custom message**: Add deployment notes

### When to Use Manual Deployment

- **Standard**: Deploy specific commits or control timing
- **Force Rebuild**: Fix build issues or dependency conflicts  
- **Skip Cache**: Resolve npm cache corruption
- **Database Off**: Deploy without running migrations

### Monitor Deployment
- Go to GitHub → Actions tab during deployment
- Watch build and deploy steps in real-time
- Workflow shows website URL when complete

## Step 7: Configure Custom Domain (Optional)

1. **In Azure App Service:**
   - Go to "Custom domains"
   - Add your custom domain (e.g., bytesmith.com)
   - Configure DNS settings with your domain provider

2. **SSL Certificate:**
   - Azure provides free SSL certificates for custom domains
   - Go to "TLS/SSL settings" → "Private Key Certificates"

## Environment Variables

### Required for Database (Optional)
If you want to store contact form submissions and analytics:

1. **Create Azure Database for PostgreSQL** (see AZURE_DATABASE_GUIDE.md)
2. **In Azure App Service → Configuration:**
   - Add `DATABASE_URL` with your PostgreSQL connection string
   - Format: `postgresql://username:password@server.postgres.database.azure.com:5432/postgres?ssl=true`

3. **Other optional variables:**
   - `NODE_ENV=production` (set automatically by Azure)
   - Any other environment variables your app needs

## Troubleshooting

### Common Issues:

1. **Build Failures:**
   - Check GitHub Actions logs
   - Verify all dependencies are in package.json
   - Ensure Node.js version compatibility

2. **Runtime Errors:**
   - Check Azure App Service logs
   - Go to Development Tools → Log stream
   - Check Application Insights if enabled

3. **Static Files Not Loading:**
   - Verify the build process creates files in `dist/public`
   - Check server.js static file serving

### Useful Commands:

```bash
# Local testing of production build
node build-azure.js
node server.js

# Check if files are built correctly
ls -la dist/
ls -la dist/public/
```

## Cost Considerations

- **Free Tier (F1):** 60 minutes/day, good for testing
- **Basic Tier (B1):** Always on, custom domains, SSL
- **Standard/Premium:** Auto-scaling, deployment slots, better performance

## Security Best Practices

1. Enable HTTPS only in Azure App Service settings
2. Configure proper CORS if needed
3. Use managed identity for Azure services
4. Regularly update dependencies

## Monitoring

1. **Application Insights:** Monitor performance and errors
2. **Azure Monitor:** Set up alerts for downtime
3. **GitHub Actions:** Monitor deployment success/failures

Your portfolio website will be available at:
- `https://YOUR_APP_SERVICE_NAME.azurewebsites.net`
- Your custom domain (if configured)

## Next Steps

After successful deployment:
1. Test all functionality
2. Set up monitoring
3. Configure any needed environment variables
4. Set up custom domain and SSL
5. Consider setting up staging slots for future updates