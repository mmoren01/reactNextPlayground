# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Next.js 13-based blog and portfolio site for Mauricio Moreno (https://www.maumoreno.com/). The application uses TypeScript for pages and JavaScript for components/utilities. It implements a static blog using markdown files for content with server-side rendering.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`

## Architecture

### Content Management System

The blog uses a file-based CMS where markdown files in `/posts` directory serve as the data source:

- Blog posts are stored as `.md` files in `/posts/` with frontmatter metadata (title, date)
- `lib/posts.js` contains utilities for reading and processing markdown:
  - `getSortedPostsData()` - Retrieves all posts sorted by date (used at build time)
  - `getAllPostIds()` - Returns post IDs for static path generation
  - `getPostData(id)` - Fetches and processes individual post content using remark and gray-matter
- Posts are converted from markdown to HTML using remark and remark-html
- Dates are formatted using date-fns library

### Routing and Pages

- **Home page** (`pages/index.tsx`): TypeScript-based, uses `getStaticProps` to fetch all posts at build time, displays post list
- **Dynamic post pages** (`pages/posts/[id].js`): Uses Next.js dynamic routes with `getStaticPaths` and `getStaticProps` to generate individual post pages at build time
- All blog pages are statically generated (SSG) at build time for optimal performance

### Component Structure

- `components/layout.js` - Main layout wrapper with header, navigation, and conditional rendering for home vs. post pages
- `components/date.js` - Date formatting component using date-fns
- Components use CSS Modules (`.module.css` files) for styling
- Layout accepts `home` prop to toggle between home page and post page layouts

### TypeScript Configuration

- Strict mode is disabled (`strict: false` in tsconfig.json)
- Mixed JS/TS codebase: pages use TypeScript (.tsx), but components and lib utilities are JavaScript
- When adding new features, prefer TypeScript for new pages but match existing file types for components
