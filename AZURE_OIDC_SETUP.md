# Azure OpenID Connect Setup for GitHub Actions

This guide shows you how to set up secure OpenID Connect (OIDC) authentication between GitHub Actions and Azure, replacing the less secure publish profile method.

## Why Use OpenID Connect?

- **Enhanced Security**: No long-lived secrets stored in GitHub
- **Microsoft Recommended**: Modern authentication best practice
- **Zero Maintenance**: No credential rotation needed
- **Better Auditing**: Full Azure AD integration for monitoring

## Step-by-Step Setup

### 1. Create Azure App Registration

**In Azure Portal:**

1. **Navigate to Azure Active Directory:**
   - Search for "Azure Active Directory" in the top search bar
   - Click on "Azure Active Directory"

2. **Create App Registration:**
   - Click "App registrations" in the left sidebar
   - Click "New registration"
   - **Name**: `GitHub-Actions-Portfolio-Deploy`
   - **Supported account types**: "Accounts in this organizational directory only"
   - **Redirect URI**: Leave blank
   - Click "Register"

3. **Note Important Values:**
   - **Application (client) ID**: Copy and save this
   - **Directory (tenant) ID**: Copy and save this

### 2. Configure Federated Credentials

**Still in your App Registration:**

1. **Go to Certificates & secrets:**
   - Click "Certificates & secrets" in left sidebar
   - Click "Federated credentials" tab
   - Click "Add credential"

2. **Configure GitHub Actions Credential:**
   - **Federated credential scenario**: GitHub Actions deploying Azure resources
   - **Organization**: Your GitHub username (e.g., `yourusername`)
   - **Repository**: Your repository name (e.g., `portfolio-website`)
   - **Entity type**: Branch
   - **GitHub branch name**: `main`
   - **Name**: `main-branch-deployment`
   - **Description**: `Allow GitHub Actions to deploy from main branch`
   - Click "Add"

3. **Optional - Add Pull Request Credential:**
   - Click "Add credential" again
   - **Entity type**: Pull request
   - **Name**: `pull-request-builds`
   - **Description**: `Allow GitHub Actions to run on pull requests`
   - This allows PR builds to authenticate with Azure

### 3. Get Azure Subscription ID

1. **In Azure Portal:**
   - Search for "Subscriptions" in the top search bar
   - Click on your subscription
   - Copy the **Subscription ID**

### 4. Assign Permissions to App Registration

**For your Azure App Service:**

1. **Go to your App Service:**
   - Navigate to your App Service resource
   - Click "Access control (IAM)" in left sidebar

2. **Add Role Assignment:**
   - Click "Add" → "Add role assignment"
   - **Role**: Select "Website Contributor"
   - Click "Next"
   - **Assign access to**: User, group, or service principal
   - Click "Select members"
   - Search for your app registration name: `GitHub-Actions-Portfolio-Deploy`
   - Select it and click "Select"
   - Click "Review + assign"
   - Click "Review + assign" again

### 5. Configure GitHub Repository Secrets

**In your GitHub repository:**

1. **Go to Settings:**
   - Click the "Settings" tab in your repository
   - Click "Secrets and variables" → "Actions" in left sidebar

2. **Add Required Secrets:**
   Click "New repository secret" for each of these:

   **Secret 1:**
   - **Name**: `AZURE_CLIENT_ID`
   - **Value**: The Application (client) ID from your app registration
   
   **Secret 2:**
   - **Name**: `AZURE_TENANT_ID`
   - **Value**: The Directory (tenant) ID from your app registration
   
   **Secret 3:**
   - **Name**: `AZURE_SUBSCRIPTION_ID`
   - **Value**: Your Azure subscription ID

3. **Optional Database Secret:**
   If using database features:
   - **Name**: `DATABASE_URL`
   - **Value**: Your PostgreSQL connection string

### 6. Verify Setup

**Test the authentication:**

1. **Trigger a deployment:**
   - Make any small change to your code
   - Commit and push to the `main` branch
   - Go to GitHub Actions tab to watch the workflow

2. **Check for successful authentication:**
   - The "Azure Login" steps should complete successfully
   - Look for green checkmarks on login steps
   - Deployment should proceed without credential errors

## Troubleshooting Common Issues

### Authentication Failures

**Error**: "Login failed with OIDC"
- **Check**: App registration entity type matches branch/PR
- **Fix**: Ensure federated credential is configured for correct entity type

**Error**: "Insufficient privileges"
- **Check**: App registration has proper role on App Service
- **Fix**: Ensure "Website Contributor" role is assigned

### Configuration Issues

**Error**: "Invalid client_id or tenant_id"
- **Check**: GitHub secrets match Azure app registration values
- **Fix**: Double-check copied values from Azure portal

**Error**: "Repository not allowed"
- **Check**: Federated credential organization/repository names
- **Fix**: Ensure GitHub username and repo name are exactly correct

### Permission Issues

**Error**: "Access denied to resource"
- **Check**: App registration permissions on subscription/resource group
- **Fix**: Add appropriate role assignments at the right scope

## Security Best Practices

### App Registration Security
1. **Minimal Permissions**: Only assign necessary roles
2. **Scope Appropriately**: Assign roles at resource level, not subscription
3. **Monitor Usage**: Review sign-in logs regularly
4. **Regular Audits**: Check federated credentials periodically

### GitHub Secrets Security
1. **Repository Settings**: Ensure secrets are not accessible to forks
2. **Environment Protection**: Use environments for additional security
3. **Minimal Exposure**: Only use secrets in necessary workflow steps
4. **Regular Review**: Audit which secrets exist and are used

## Advanced Configuration

### Multiple Environments

For staging and production environments:

1. **Create separate app registrations** for each environment
2. **Configure different federated credentials** for different branches
3. **Use GitHub environments** to control deployment approvals
4. **Set environment-specific secrets** for each deployment target

### Conditional Deployments

Add branch protection rules:
```yaml
environment:
  name: production
  url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}
```

This requires manual approval for production deployments.

## Monitoring and Maintenance

### Azure AD Monitoring
1. **Sign-in logs**: Monitor app registration usage
2. **Audit logs**: Track configuration changes
3. **Security alerts**: Set up notifications for unusual activity

### GitHub Actions Monitoring
1. **Workflow runs**: Monitor deployment success rates
2. **Secret usage**: Track when secrets are accessed
3. **Security alerts**: Enable repository security features

## Migration from Publish Profiles

If you previously used publish profiles:

1. **Remove old secret**: Delete `AZURE_WEBAPP_PUBLISH_PROFILE` from GitHub
2. **Update workflow**: Ensure workflow uses Azure login action
3. **Test deployment**: Verify OIDC authentication works
4. **Clean up**: Remove any stored publish profile files

Your deployment is now using modern, secure authentication that's recommended by Microsoft and doesn't require credential rotation or management.