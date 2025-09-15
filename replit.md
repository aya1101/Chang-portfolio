# Overview

This is a full-stack personal portfolio web application built with React and Express.js. The application features a single-page portfolio showcasing an individual's professional background, skills, projects, and contact information. It includes a contact form that allows visitors to send messages, with bilingual support (English and Vietnamese) and a modern, responsive design using shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side is built with React and TypeScript using modern React patterns:

- **Component Library**: shadcn/ui components built on top of Radix UI primitives for consistent, accessible UI elements
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management and API interactions
- **Routing**: Wouter for lightweight client-side routing (currently single-page application)
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Internationalization**: Custom language context provider supporting English and Vietnamese locales
- **Build Tool**: Vite for fast development and optimized production builds

The application follows a component-based architecture with sections for hero, about, experience, projects, activities, and contact information.

## Backend Architecture

The server-side uses Express.js with TypeScript in ESM format:

- **Web Framework**: Express.js with middleware for JSON parsing and request logging
- **API Design**: RESTful endpoints for contact form submissions and message retrieval
- **Data Validation**: Zod schemas shared between client and server for consistent validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation (designed for easy database integration)
- **Development Setup**: Hot-reload development server with Vite integration for seamless full-stack development

## Data Storage Solutions

Currently uses an in-memory storage implementation with these characteristics:

- **Storage Interface**: Abstract IStorage interface allowing for easy swapping of storage backends
- **Data Models**: User and ContactMessage entities with TypeScript types
- **Schema Management**: Drizzle ORM configured for PostgreSQL with migration support
- **Database Ready**: PostgreSQL schema defined but currently using memory storage for development

The architecture is prepared for PostgreSQL integration using Drizzle ORM with proper migrations and type-safe database operations.

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL connectivity
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **drizzle-kit**: Database migration and schema management tools

## UI and Component Libraries
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives for building the design system
- **@tanstack/react-query**: Server state management, caching, and API interaction handling
- **tailwindcss**: Utility-first CSS framework for responsive design and styling

## Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **zod**: TypeScript-first schema validation for forms and API endpoints
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation

## Development and Build Tools
- **vite**: Fast build tool and development server with HMR
- **@replit/vite-plugin-***: Replit-specific development enhancements including error overlays and dev tools
- **tsx**: TypeScript execution environment for running server code

## Utility Libraries
- **clsx** and **tailwind-merge**: Utility functions for conditional CSS class composition
- **class-variance-authority**: Type-safe variant API for component styling
- **date-fns**: Modern date manipulation and formatting library
- **wouter**: Minimal client-side routing solution
- **nanoid**: URL-safe unique ID generator