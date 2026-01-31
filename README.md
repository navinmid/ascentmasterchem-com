# Ascent Master Chem Website

A modern single-page VitePress website for Ascent Master Chem - a chemical company manufacturing products for homes.

## 🚀 Features

- **Modern Design**: Clean, responsive single-page layout
- **Product Showcase**: Organized by categories (Bonding & Repair, Grouting & Flooring, Sealants & Protection, Special Products)
- **Testimonials Section**: Customer reviews and ratings
- **Contact Form**: Easy-to-use contact form with company information
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 📦 Products

### Bonding & Repair
- Latex Bonding Agent
- Epoxy Bonding Agent
- Crack Filler
- Micro Concrete

### Grouting & Flooring
- Non-Shrink Grout
- Epoxy Flooring
- PU Flooring

### Sealants & Protection
- PU Sealant
- Silicone Sealant
- Rebar Protection Coating

### Special Products
- Epoxy Adhesive
- Heat Resistant Coating
- Fire Resistant Coating
- Rust Remover

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run docs:dev
```

### Build for Production
```bash
npm run docs:build
```

### Preview Production Build
```bash
npm run docs:preview
```

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Steps:

1. **Push to GitHub**: Push this repository to GitHub

2. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

3. **Update Base URL** (if needed):
   - In `docs/.vitepress/config.ts`, update the `base` option to match your repository name:
   ```ts
   base: '/your-repo-name/'
   ```

4. **Deploy**:
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy

5. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## 📁 Project Structure

```
ascentmasterchem-com/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # VitePress configuration
│   │   └── theme/
│   │       ├── index.ts       # Theme setup
│   │       └── custom.css     # Custom styles
│   ├── public/
│   │   ├── favicon.svg        # Site favicon
│   │   └── logo.svg           # Site logo
│   └── index.md               # Main landing page
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
Edit the CSS variables in `docs/.vitepress/theme/custom.css`:
```css
:root {
  --vp-c-brand-1: #0066cc;  /* Primary color */
  --vp-c-brand-2: #004a99;  /* Secondary color */
  --vp-c-brand-3: #00a86b;  /* Accent color */
}
```

### Content
Edit the product information and testimonials in `docs/index.md`.

### SEO
Update meta tags in `docs/.vitepress/config.ts` and the frontmatter in `docs/index.md`.

## 📄 License

© 2026 Ascent Master Chem. All rights reserved.
