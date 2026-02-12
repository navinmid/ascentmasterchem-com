---
layout: home
title: Tile Adhesive - Ascent Master Chem
description: Strong bonding, durability, and long-lasting tile installation.
---

<script setup>
import { ref } from 'vue'

const products = [
  {
    name: 'MASTER CHEM 1008 (Interior – Ceramic & Vitrified)',
    description: 'MASTER CHEM 1008 is a high-quality tile adhesive designed for interior applications, perfect for ceramic and vitrified tiles. It ensures strong adhesion, smooth application, and a durable, long-lasting finish for walls and floors.',
    image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&auto=format&fit=crop',
    link: 'master-chem-1008-adhesive.html'
  },
  {
    name: 'MASTER CHEM 1017 (Wall & Floor – Residential / Commercial)',
    description: 'MASTER CHEM 1017 is a versatile tile adhesive suitable for both wall and floor installations in residential and commercial spaces. It provides excellent bonding, easy workability, and reliable performance under daily use.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop',
    link: 'master-chem-1017-adhesive.html'
  },
  {
    name: 'MASTER CHEM 1026 (Large Format Tiles & Stone)',
    description: 'MASTER CHEM 1026 is specially formulated for large-format tiles and natural stone installations. It offers superior grip, prevents slippage, and ensures a uniform, professional finish for demanding projects.',
    image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&auto=format&fit=crop',
    link: 'master-chem-1026-adhesive.html'
  },
  {
    name: 'MASTER CHEM 1035 (Exterior, Wet Areas & Heavy Duty)',
    description: 'MASTER CHEM 1035 is a robust, heavy-duty tile adhesive suitable for exterior surfaces, wet areas, and high-traffic zones. It delivers excellent water resistance, strong bonding, and long-term durability in challenging conditions.',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&auto=format&fit=crop',
    link: 'master-chem-1035-adhesive.html'
  },
  {
    name: 'MASTER CHEM 1008 (Unsanded)',
    description: 'MASTER CHEM 1008 is an unsanded cementitious grout ideal for narrow joints up to 3mm. It provides smooth filling, excellent adhesion, and a neat, uniform finish for interior tile installations.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&auto=format&fit=crop',
    link: 'master-chem-1008-grout.html'
  },
  {
    name: 'MASTER CHEM 1017 (Standard Grade)',
    description: 'MASTER CHEM 1017 is a standard-grade cementitious grout suitable for general-purpose tile joints. It ensures strong bonding, consistent color, and durability for both wall and floor applications.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
    link: 'master-chem-1017-grout.html'
  },
  {
    name: 'MASTER CHEM 1026 (Polymer Modified)',
    description: 'MASTER CHEM 1026 is a polymer-modified cementitious grout that enhances flexibility, adhesion, and water resistance. It is ideal for areas exposed to moisture or slight movement, providing a durable and long-lasting finish.',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&auto=format&fit=crop',
    link: 'master-chem-1026-grout.html'
  },
  {
    name: 'MASTER CHEM 1035 (Heavy Duty)',
    description: 'MASTER CHEM 1035 is a heavy-duty cementitious grout designed for high-traffic areas and demanding installations. It delivers exceptional strength, crack resistance, and long-term performance under tough conditions.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop',
    link: 'master-chem-1035-grout.html'
  },
  {
    name: 'MASTER CHEM 1044 – Epoxy Based Waterproof Tile Joint Filler',
    description: 'MASTER CHEM 1044 is an epoxy-based waterproof tile joint filler designed for high-performance applications. It provides exceptional chemical resistance, durability, and long-lasting protection for tile joints in wet or heavy-duty areas.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&auto=format&fit=crop',
    link: 'master-chem-1044-epoxy.html'
  },
  {
    name: 'MASTER CHEM 1053 – Acid Based Tile Cleaner',
    description: 'MASTER CHEM 1053 is a powerful acid-based tile cleaner formulated to remove tough stains, cement residues, and mineral deposits. It restores the natural shine and cleanliness of tiles while being suitable for heavy-duty cleaning.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop',
    link: 'master-chem-1053-cleaner.html'
  }
]
</script>

<!-- Hero Section -->
<div class="hero-section-detail">
  <div class="hero-image" style="background-image: url('products/tile-adhesive.jpeg')"></div>
  <div class="hero-background">
    <div class="hero-circle hero-circle-1"></div>
    <div class="hero-circle hero-circle-2"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="gradient-text">Tile Adhesive</span>
    </h1>
    <p class="hero-description">
      Ensures strong bonding, durability, and long-lasting tile installation.
    </p>
  </div>
</div>

<!-- Content Section -->
<div class="detail-content">
  <!--
  <div class="content-section">
    <h2>Product Overview</h2>
    <p>
      Our premium tile adhesive is engineered to provide superior bonding strength for all types of tiles. 
      Whether you're working with ceramic, porcelain, or natural stone, our adhesive ensures a durable and 
      long-lasting installation that stands the test of time.
    </p>
  </div>
  <div class="content-section">
    <h2>Key Features</h2>
    <ul>
      <li><strong>Superior Bonding Strength:</strong> Creates an exceptionally strong bond between tiles and substrate</li>
      <li><strong>Excellent Durability:</strong> Withstands heavy traffic and environmental stresses</li>
      <li><strong>Water Resistant:</strong> Perfect for wet areas like bathrooms and kitchens</li>
      <li><strong>Easy Application:</strong> Smooth consistency for effortless spreading and setting</li>
      <li><strong>Flexible Formula:</strong> Accommodates minor substrate movements without cracking</li>
      <li><strong>Fast Setting:</strong> Reduces installation time and speeds up project completion</li>
    </ul>
  </div>
  <div class="content-section">
    <h2>Applications</h2>
    <ul>
      <li>Interior and exterior wall tiling</li>
      <li>Floor tile installation</li>
      <li>Bathroom and kitchen areas</li>
      <li>Swimming pools and water features</li>
      <li>Commercial and residential projects</li>
      <li>Suitable for ceramic, porcelain, and stone tiles</li>
    </ul>
  </div>
  <div class="content-section">
    <h2>Technical Specifications</h2>
    <p>
      Our tile adhesive meets international quality standards and is suitable for a wide range of tiling applications. 
      The product is available in different grades to suit specific project requirements. Contact our technical support 
      team for detailed specifications, coverage rates, and application guidelines.
    </p>
  </div>
  -->
  <!-- Products Section -->
  <div class="products-section-detail">
    <h2>Our Tile Adhesive & Grout Products</h2>
    <p class="section-subtitle">Explore our comprehensive range of tile adhesives and cementitious grouts designed for various applications</p>
    <div class="products-grid">
      <a v-for="product in products" :key="product.name" :href="product.link" class="product-card-detail" :style="'background-image: url(' + product.image + ')'">
        <div class="product-content">
          <p>{{ product.description }}</p>
          <h4>{{ product.name }}</h4>
        </div>
      </a>
    </div>
  </div>

  <div class="cta-box">
    <h3>Need More Information?</h3>
    <p>Contact our expert team to learn more about our tile adhesive and find the perfect solution for your tiling project.</p>
    <a href="index.html#contact" class="btn-primary">Contact Us</a>
  </div>
</div>

<style>
:root {
  --primary-color: #014ca8;
  --primary-dark: #013a7d;
  --secondary-color: #3d8bfd;
  --accent-color: #ff6b35;
  --text-dark: #1a1a2e;
  --text-light: #6b7280;
  --text-white: #ffffff;
  --bg-light: #f8fafc;
  --bg-white: #ffffff;
  --bg-gradient: linear-gradient(135deg, #014ca8 0%, #3d8bfd 100%);
  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --card-shadow-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --border-color: #e5e7eb;
}

.dark {
  --primary-color: #3d8bfd;
  --primary-dark: #2a75e8;
  --secondary-color: #7bb3ff;
  --text-dark: #f8fafc;
  --text-light: #9ca3af;
  --text-white: #ffffff;
  --bg-light: #1e293b;
  --bg-white: #0f172a;
  --bg-gradient: linear-gradient(135deg, #3d8bfd 0%, #7bb3ff 100%);
  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  --card-shadow-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  --border-color: #334155;
}

* {
  box-sizing: border-box;
}

/* Hero Section for Detail Pages */
.hero-section-detail {
  position: relative;
  padding: 0;
  background: var(--bg-gradient);
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-bottom: 0;
  width: 100vw;
  overflow: hidden;
  height: 25vh;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.60);
}

.hero-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 20s infinite ease-in-out;
}

.hero-circle-1 {
  width: 200px;
  height: 200px;
  top: -50px;
  right: -50px;
  animation-delay: 0s;
}

.hero-circle-2 {
  width: 150px;
  height: 150px;
  bottom: -50px;
  left: -30px;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
  width: 100%;
}

.hero-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem) !important;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 16px;
  font-family: "Syne", sans-serif;
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0;
  line-height: 1.6;
  font-family: "Syne", sans-serif;
}

/* Detail Content Section */
.detail-content {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 24px;
}

.content-section {
  margin-bottom: 48px;
}

.content-section h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 20px;
  border-top: none !important;
  padding-top: 0 !important;
}

.content-section p {
  font-size: 1.05rem;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 16px;
}

.content-section ul {
  list-style: none;
  padding-left: 0;
}

.content-section ul li {
  font-size: 1.05rem;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
}

.content-section ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

/* CTA Box */
.cta-box {
  background: var(--bg-light);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid var(--border-color);
  margin-top: 60px;
}

.cta-box h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.cta-box p {
  font-size: 1.05rem;
  color: var(--text-light);
  margin-bottom: 24px;
  line-height: 1.7;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  background: var(--primary-color);
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(1, 76, 168, 0.3);
  border: 2px solid var(--primary-color);
  z-index: 1;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-dark);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -1;
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(1, 76, 168, 0.4);
}

/* Products Section */
.products-section-detail {
  margin: 60px 0;
}

.products-section-detail h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
  text-align: center;
  border-top: none !important;
  padding-top: 0 !important;
}

.products-section-detail .section-subtitle {
  text-align: center;
  font-size: 1.05rem;
  color: var(--text-light);
  margin-bottom: 40px;
}

.products-section-detail .products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.product-card-detail {
  background: var(--bg-white);
  padding: 0;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  text-decoration: none;
}

.product-card-detail::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-size: cover;
  background-image: inherit;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 0;
}

.product-card-detail:hover::after {
  transform: scale(1.08);
}

.product-card-detail .product-content {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.60);
  display: flex;
  flex-direction: column-reverse;
  transition: background 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.product-card-detail::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-gradient);
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.product-card-detail:hover::before {
  opacity: 0.15;
}

.product-card-detail:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 30px 60px -15px rgba(1, 76, 168, 0.4);
}

.product-card-detail:hover .product-content {
  background: rgba(0, 0, 0, 0.50);
}

.product-card-detail h4 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 12px;
  line-height: 1.4;
  padding: 0 24px;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
}

.product-card-detail:hover h4 {
  transform: translateY(-4px);
}

.product-card-detail p {
  color: var(--text-white);
  line-height: 1.6;
  font-size: 0.9rem;
  margin-bottom: 16px;
  padding: 0 24px;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s, opacity 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card-detail:hover p {
  transform: translateY(-4px);
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section-detail {
    height: 30vh;
    min-height: 200px;
  }
  
  .detail-content {
    margin: 40px auto;
  }
  
  .products-section-detail .products-grid {
    grid-template-columns: 1fr;
  }
  
  .content-section {
    margin-bottom: 36px;
  }
  
  .cta-box {
    padding: 32px 24px;
  }
}
</style>
