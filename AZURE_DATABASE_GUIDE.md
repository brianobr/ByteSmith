# Azure Database for PostgreSQL Setup Guide

This guide shows you how to create and configure an Azure Database for PostgreSQL to work with your portfolio website deployed on Azure App Service.

## What's Already Set Up

Your application now includes:
- **Database Schema**: Contact form submissions, page analytics, and user management
- **Automatic Database Detection**: App uses database if `DATABASE_URL` is available, otherwise memory storage
- **Contact Form Integration**: Form submissions are saved to the database
- **Admin Endpoints**: View contacts and analytics data
- **Page Tracking**: Visitor analytics stored in database

## Step 1: Create Azure Database for PostgreSQL

### Option A: Flexible Server (Recommended)

1. **In Azure Portal:**
   - Go to "Create a resource" 
   - Search "Azure Database for PostgreSQL"
   - Select "Azure Database for PostgreSQL Flexible Server"

2. **Basic Configuration:**
   - **Resource Group**: Use same as your App Service
   - **Server Name**: `bytesmith-portfolio-db` (must be globally unique)
   - **Region**: Same as your App Service
   - **PostgreSQL Version**: 14 or 15
   - **Workload Type**: Development (for cost savings) or Production

3. **Authentication:**
   - **Authentication Method**: PostgreSQL authentication only
   - **Admin Username**: `portfolioadmin`
   - **Password**: Create a strong password (save this!)

4. **Networking:**
   - **Connectivity Method**: Public access (selected firewall rules)
   - **Firewall Rules**: 
     - ✅ Allow public access from any Azure service within Azure
     - ✅ Add current client IP address
   - **SSL Enforcement**: Require (recommended)

5. **Review and Create:**
   - Choose your pricing tier based on needs
   - **Basic**: Good for development/testing
   - **General Purpose**: Production workloads

## Step 2: Configure Database Connection

### Get Connection String

1. **After deployment completes:**
   - Go to your PostgreSQL resource
   - Click "Connection strings" in left menu
   - Copy the **Node.js** connection string
   - It looks like: `postgresql://username:password@servername.postgres.database.azure.com:5432/postgres?ssl=true`

2. **Update the connection string:**
   - Replace `{your_username}` with your admin username
   - Replace `{your_password}` with your admin password
   - Keep `?ssl=true` at the end

### Example Connection String:
```
postgresql://portfolioadmin:YourPassword123@bytesmith-portfolio-db.postgres.database.azure.com:5432/postgres?ssl=true
```

## Step 3: Configure App Service Environment Variables

1. **In your Azure App Service:**
   - Go to Configuration → Application settings
   - Click "New application setting"

2. **Add these environment variables:**
   - **Name**: `DATABASE_URL`
   - **Value**: Your PostgreSQL connection string from Step 2
   - **Deployment slot setting**: ✅ (if using slots)

3. **Save and restart:**
   - Click "Save" at the top
   - Your app will automatically restart

## Step 4: Initialize Database Schema

The database tables will be created automatically when your app starts. Your GitHub Actions workflow includes the schema push process.

### Verify Schema Creation

You can verify your database is working by:

1. **Testing Contact Form:**
   - Submit a message through your website
   - Check Azure App Service logs for "Contact submission saved"

2. **Check Database Directly:**
   - Use Azure Cloud Shell or pgAdmin
   - Connect to your database
   - Run: `\dt` to list tables
   - Should see: `contact_submissions`, `page_views`, `users`

## Step 5: Update GitHub Actions (Optional)

If you want to run database migrations during deployment, update your workflow:

```yaml
# Add this step in .github/workflows/azure-webapp-deploy.yml
- name: Run Database Migrations
  run: npm run db:push
  env:
    DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

And add `DATABASE_URL` to your GitHub repository secrets.

## Database Features You Now Have

### Contact Form Storage
- All contact form submissions are saved
- Track read/unread status
- Timestamp tracking
- Admin endpoint: `GET /api/admin/contacts`

### Page Analytics
- Track page views and visitor data
- User agent and referrer tracking
- IP address logging (anonymized)
- Admin endpoint: `GET /api/admin/analytics`

### Admin Endpoints
```bash
# Get all contact submissions
GET /api/admin/contacts

# Mark contact as read
PATCH /api/admin/contacts/{id}/read

# Get page analytics
GET /api/admin/analytics?page=/about

# Get all page views
GET /api/admin/analytics
```

## Security Best Practices

### Database Security
1. **Firewall Rules**: Only allow Azure services and your IP
2. **SSL Enforcement**: Always enabled
3. **Strong Passwords**: Use complex admin passwords
4. **Private Endpoints**: Consider for production

### Application Security
1. **Environment Variables**: Never commit DATABASE_URL to code
2. **Input Validation**: Zod schemas validate all database inputs
3. **SQL Injection**: Drizzle ORM protects against SQL injection
4. **Admin Endpoints**: Consider adding authentication

## Monitoring and Maintenance

### Azure Database Monitoring
1. **Metrics**: Monitor CPU, memory, storage usage
2. **Query Performance**: Use Query Performance Insights
3. **Backup**: Automatic backups enabled by default
4. **Alerts**: Set up alerts for high resource usage

### Cost Optimization
1. **Right-sizing**: Choose appropriate compute tier
2. **Scaling**: Scale up/down based on usage
3. **Reserved Capacity**: Consider reserved instances for production
4. **Backup Retention**: Adjust retention period as needed

## Troubleshooting

### Common Connection Issues

1. **Connection Timeout:**
   - Check firewall rules
   - Verify App Service can reach database
   - Check connection string format

2. **SSL Certificate Issues:**
   - Ensure `?ssl=true` in connection string
   - Check SSL enforcement settings

3. **Authentication Failures:**
   - Verify username and password in connection string
   - Check if user exists and has proper permissions

### Database Performance Issues

1. **Slow Queries:**
   - Use Query Performance Insights
   - Consider adding indexes for frequently queried columns
   - Monitor connection pool usage

2. **High Resource Usage:**
   - Scale up compute tier temporarily
   - Optimize queries
   - Consider read replicas for high read workloads

## Sample Admin Dashboard (Future Enhancement)

You could build an admin dashboard to view:
- Recent contact form submissions
- Page view analytics
- Visitor statistics
- Contact management (mark as read/replied)

## Cost Estimates

### Basic Tier (Development):
- **B1ms (1 vCore, 2GB RAM)**: ~$25-40/month
- **Storage**: ~$0.115/GB/month
- **Backup**: Included (7 days)

### General Purpose (Production):
- **GP_Gen5_2 (2 vCores, 10GB RAM)**: ~$125-150/month
- **Storage**: ~$0.115/GB/month
- **Backup**: ~$0.095/GB/month for extended retention

## Next Steps After Database Setup

1. **Test thoroughly**: Verify contact form saves to database
2. **Monitor usage**: Set up alerts and monitoring
3. **Consider backups**: Review backup and restore procedures
4. **Plan scaling**: Monitor performance and scale as needed
5. **Add authentication**: Secure admin endpoints for production use

Your portfolio now has a professional database backend that can:
- Store all contact form submissions
- Track visitor analytics
- Support future features like blog comments, user accounts, etc.
- Scale with your growing needs

The database will automatically be used when the `DATABASE_URL` environment variable is set in Azure App Service, and will fall back to memory storage during local development.