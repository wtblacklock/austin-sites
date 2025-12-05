# Austin Sites

A modern content management system built with **Strapi** (backend CMS) and **Next.js** (frontend).

## Project Structure

```
austin-sites/
├── strapi-backend/     # Strapi CMS backend
├── frontend/           # Next.js frontend
└── austin-sites/       # Original Astro site (reference)
```

## Quick Start

### 1. Start Strapi Backend

```bash
cd strapi-backend

# Install dependencies (if not already done)
npm install

# Start Strapi in development mode
npm run develop
```

Strapi will start at **http://localhost:1337**

On first run, you'll be prompted to create an admin account at **http://localhost:1337/admin**

### 2. Configure Strapi Permissions

After creating your admin account:

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Enable the following permissions:
   - **Blog-post**: `find`, `findOne`
   - **Page**: `find`, `findOne`
   - **Site-setting**: `find`
   - **Navigation-item**: `find`
3. Click **Save**

### 3. Add Content in Strapi

1. **Site Settings** (Single Type): Configure your site name, title, description
2. **Navigation Items**: Add menu items (Home, Blog, About, Contact)
3. **Pages**: Create About and Contact pages
4. **Blog Posts**: Add your blog content

### 4. Start Next.js Frontend

```bash
cd frontend

# Create environment file
cp .env.example .env.local
# Edit .env.local if needed (default is http://localhost:1337)

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at **http://localhost:3000**

## Content Types

### Blog Post
- Title, Slug, Description
- Content (Rich Text)
- Featured Image
- Publish Date
- Tags (JSON array)
- Author

### Page
- Title, Slug
- Page Type (about, contact, legal, landing, custom)
- Hero Title, Description, Image
- Content (Rich Text)
- SEO Title, Description

### Site Settings (Single Type)
- Site Name, Title, Description
- Logo, Favicon, Social Image
- Enable Theme Switcher
- Footer Text, Copyright Text

### Navigation Item
- Title, Slug
- Order
- Is External, Open in New Tab

## Development

### Strapi Commands

```bash
cd strapi-backend
npm run develop    # Start with hot-reload
npm run start      # Start production server
npm run build      # Build admin panel
```

### Next.js Commands

```bash
cd frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Environment Variables

### Frontend (.env.local)

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_optional_api_token
```

## Deployment

### Strapi
- Can be deployed to Heroku, DigitalOcean, Railway, or any Node.js hosting
- For production, switch from SQLite to PostgreSQL/MySQL

### Next.js
- Deploy to Vercel, Netlify, or any Node.js hosting
- Update `NEXT_PUBLIC_STRAPI_URL` to your production Strapi URL

## Tech Stack

- **Backend**: Strapi 5
- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Database**: SQLite (development) / PostgreSQL (production recommended)

