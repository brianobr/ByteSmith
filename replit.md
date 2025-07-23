# Portfolio Website - Brian O'Brien AI Software Engineer

## Overview

This is a modern portfolio website for Brian O'Brien, an AI Software Engineer specializing in Azure OpenAI, .NET Core, Python, and cloud-native development. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a professional portfolio layout with sections for about, skills, experience, projects, certifications, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Dark theme portfolio design with custom CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with Vite integration in development mode
- **API**: RESTful endpoints for contact form and resume download
- **Storage**: In-memory storage implementation (ready for database integration)

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Located in `shared/schema.ts` with user authentication structure
- **Migrations**: Managed through Drizzle Kit
- **Connection**: Configured for Neon Database (serverless PostgreSQL)

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Landing area with animated background elements
3. **About**: Professional summary with downloadable resume
4. **Skills**: Categorized technical skills with expertise levels
5. **Experience**: Professional timeline with achievements
6. **Projects**: Portfolio showcase with technology stacks
7. **Certifications**: Microsoft Azure certifications display
8. **Contact**: Contact form with validation and toast notifications
9. **Footer**: Social links and branding

### Backend Services
1. **Contact API**: Handles form submissions with validation
2. **Resume API**: Serves resume file downloads
3. **Static File Serving**: Serves built React application
4. **Error Handling**: Centralized error middleware
5. **Logging**: Request/response logging for API endpoints

### Shared Resources
1. **Schema Definitions**: Database schema with Zod validation
2. **Type Definitions**: Shared TypeScript interfaces
3. **Utilities**: Common helper functions

## Data Flow

### Client-Side Flow
1. User interactions trigger React component state changes
2. Form submissions use TanStack Query for API calls  
3. UI updates reflect API responses with toast notifications
4. Navigation uses smooth scrolling between sections

### Server-Side Flow
1. Express server handles API requests with middleware
2. Contact form data validated and processed
3. File serving for resume downloads
4. Static assets served from built client application

### Development Flow
1. Vite dev server handles frontend with hot reload
2. Express server runs API endpoints
3. TypeScript compilation for type checking
4. Shared types ensure consistency between client/server

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Build tool and dev server
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with autoprefixer

### Database and ORM
- **Drizzle ORM**: Type-safe SQL toolkit
- **Neon Database**: Serverless PostgreSQL
- **Drizzle Kit**: Database migrations and introspection

### Form Handling
- **React Hook Form**: Form state management
- **Hookform Resolvers**: Form validation integration
- **Zod**: Schema validation library

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Type Checking**: TypeScript compiler validates all code
4. **Database**: Drizzle migrations push schema changes

### Development Environment
- **Dev Server**: Express with Vite middleware for hot reload
- **Database**: Local PostgreSQL or Neon development database
- **Environment Variables**: `DATABASE_URL` for database connection

### Production Environment
- **Server**: Node.js serving built static files and API
- **Database**: Neon serverless PostgreSQL
- **Static Assets**: Served from `dist/public` directory
- **API Endpoints**: `/api/*` routes handled by Express server

### Key Configuration Files
- `vite.config.ts`: Frontend build and development configuration
- `drizzle.config.ts`: Database connection and migration settings
- `tailwind.config.ts`: Styling system configuration
- `tsconfig.json`: TypeScript compiler options
- `components.json`: shadcn/ui component library configuration

The application is designed to be easily deployable to platforms like Vercel, Netlify, or traditional hosting with Node.js support.