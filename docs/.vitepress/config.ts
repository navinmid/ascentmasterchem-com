import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ascent Master Chem",
  description: "Premium Chemical Solutions for Homes - Bonding Agents, Grouts, Sealants & Specialty Products",
  lang: 'en-US',
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap' }],
    ['meta', { name: 'theme-color', content: '#014ca8' }],
    ['meta', { name: 'author', content: 'Ascent Master Chem' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'keywords', content: 'chemical solutions, bonding agents, epoxy flooring, sealants, construction chemicals, home repair chemicals, grout, crack filler' }],
    ['meta', { property: 'og:title', content: 'Ascent Master Chem - Premium Chemical Solutions' }],
    ['meta', { property: 'og:description', content: 'Leading manufacturer of bonding agents, flooring systems, sealants, and specialty chemical products for homes.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Ascent Master Chem - Premium Chemical Solutions' }],
    ['meta', { name: 'twitter:description', content: 'Leading manufacturer of bonding agents, flooring systems, sealants, and specialty chemical products for homes.' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],

  // For GitHub Pages deployment
  base: '/ascentmasterchem-com/',

  appearance: false, // Disable dark mode

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Ascent Master Chem',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/#products' },
      // { text: 'Testimonials', link: '/#testimonials' },
      { text: 'Contact', link: '/#contact' }
    ],

    socialLinks: [
      { icon: 'linkedin', link: '#' },
    ],

    footer: {
      message: 'Premium Chemical Solutions for Your Home',
      copyright: '© 2026 Ascent Master Chem. All rights reserved.'
    }
  },

  sitemap: {
    hostname: 'https://yourusername.github.io/ascentmasterchem-com/'
  }
})
