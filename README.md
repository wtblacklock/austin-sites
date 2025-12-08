# Austin Sites - Multi-Business CMS Template

A **repeatable business website template** built with **Strapi CMS** and **Next.js**, featuring [daisyUI](https://daisyui.com/) for beautiful, themeable components.

## 🚀 Features

- **daisyUI Components**: Clean, semantic class names for faster development
- **10+ Built-in Themes**: Light, Dark, Corporate, Business, Emerald, Forest, Luxury, Dracula, Autumn, Nord
- **Theme Switcher**: Users can switch themes on the fly
- **Strapi CMS**: Full content management for non-technical users
- **Reusable Template**: Clone and customize for any business
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, Open Graph, structured data ready

## 📁 Project Structure

```
austin-sites/
├── frontend/              # Next.js 15 + daisyUI
│   ├── src/
│   │   ├── app/           # Pages (Home, Services, Blog, About, Contact)
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # Strapi API integration
│   │   └── types/         # TypeScript types
│   └── ...
├── strapi-backend/        # Strapi 5 CMS
│   └── src/api/           # Content types
│       ├── blog-post/     # Blog articles
│       ├── page/          # Static pages
│       ├── service/       # Services offered
│       ├── testimonial/   # Customer reviews
│       ├── navigation-item/ # Menu items
│       └── site-setting/  # Global config (name, theme, contact info)
└── legacy/                # Original Astro template (reference)
```

## 🛠️ Quick Start

### 1. Start Strapi Backend

```bash
cd strapi-backend
npm install
npm run develop
```

Visit **http://localhost:1337/admin** to create your admin account.

### 2. Configure Permissions

In Strapi Admin:
1. Go to **Settings** → **Users & Permissions** → **Roles** → **Public**
2. Enable `find` and `findOne` for:
   - Blog-post
   - Page
   - Service
   - Testimonial
   - Site-setting
   - Navigation-item
3. Save

### 3. Start Next.js Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit **http://localhost:3000** to see your site!

## 🎨 Customizing for a New Business

### 1. Update Site Settings in Strapi

Go to **Content Manager** → **Site Settings** and configure:
- Site Name & Title
- Contact Email, Phone, Address
- Theme (choose from 10+ built-in themes)
- Social Media Links
- Logo & Favicon

### 2. Add Content

- **Navigation Items**: Configure your menu
- **Services**: Add your business services
- **Blog Posts**: Write articles
- **Testimonials**: Add customer reviews
- **Pages**: Create About, Contact, or custom pages

### 3. Deploy

**Frontend (Vercel):**
```bash
# Set environment variable:
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-url.com
```

**Backend (Strapi Cloud / Railway):**
- Push to GitHub
- Connect to Strapi Cloud or Railway
- Configure PostgreSQL database for production

## 🎭 Available Themes

| Theme | Description |
|-------|-------------|
| `light` | Clean, bright default |
| `dark` | Dark mode |
| `corporate` | Professional blue |
| `business` | Elegant dark |
| `emerald` | Green & fresh |
| `forest` | Deep green |
| `luxury` | Gold & black |
| `dracula` | Purple dark |
| `autumn` | Warm oranges |
| `nord` | Cool blues |

Users can switch themes using the theme picker in the header!

## 📦 Content Types

### Site Settings (Single Type)
- Site name, title, description
- Contact info (email, phone, address)
- Theme selection
- Social media links
- Logo, favicon, social image

### Services
- Title, slug, description
- Price, icon
- Featured image
- Order for sorting

### Blog Posts
- Title, slug, content
- Featured image
- Tags, author
- Publish date

### Testimonials
- Quote, author, role, company
- Avatar
- Star rating (1-5)
- Featured flag

### Pages
- Title, slug
- Page type (about, contact, services, etc.)
- Hero section content
- Body content

### Navigation Items
- Title, URL/slug
- Order
- External link options

## 🔄 Creating Sites for Multiple Businesses

1. **Clone this repository** for each business
2. **Deploy separate Strapi instances** (one per business)
3. **Configure Site Settings** with each business's branding
4. **Choose a theme** that matches their brand
5. **Add their content** through the CMS

Each business gets their own:
- Strapi admin panel
- Content database
- Theme/branding
- Domain

## 🧰 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS + daisyUI
- **CMS**: Strapi 5
- **Database**: SQLite (dev) / PostgreSQL (prod)

## 📚 Resources

- [daisyUI Documentation](https://daisyui.com/)
- [Strapi Documentation](https://docs.strapi.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 📄 License

MIT
