#!/usr/bin/env node
// Azure deployment build script

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building application for Azure App Service...');

try {
  // Run the regular build process
  console.log('Building client and server...');
  execSync('npx vite build', { stdio: 'inherit' });
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
  
  // Copy Azure deployment files
  console.log('Copying Azure deployment files...');
  
  // Copy Azure-specific package.json to dist for dependencies
  if (fs.existsSync('azure-package.json')) {
    fs.copyFileSync('azure-package.json', 'dist/package.json');
  }
  
  // Copy shared schema and server files for database functionality
  if (fs.existsSync('shared')) {
    execSync('cp -r shared dist/', { stdio: 'inherit' });
  }
  
  // Copy package-lock.json if it exists
  if (fs.existsSync('package-lock.json')) {
    fs.copyFileSync('package-lock.json', 'dist/package-lock.json');
  }
  

  
  console.log('✅ Azure build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}