---
title: Products - Ascent Master Chem
description: Comprehensive range of chemical solutions for every home improvement need including concrete admixtures, tile adhesives, bricks admixtures, and more.
layout: page
---

<script setup>
const products = [
  {
    name: "Concrete Admixtures",
    caption: "Smart admixtures for stronger, longer-lasting concrete.",
    icon: "🧪",
    image: "products/admixtures.jpeg",
    items: [
      {
        name: 'Concrete Admixtures',
        description: 'Concrete admixtures improve strength, durability, workability, and setting time.',
        image: "products/admixtures.jpeg",
        link: "concrete-admixtures.html"
      },
      {
        name: 'Tile Adhesive',
        description: 'Tile adhesive ensures strong bonding, durability, and long-lasting tile installation.',
        image: "products/tile-adhesive.jpeg",
        link: "tile-adhesive.html"
      },
      {
        name: 'Bricks Admixures',
        description: 'ABrick admixtures enhance strength, durability, water resistance, and overall quality.',
        image: "home/admixtures.jpeg",
        link: "bricks-admixtures.html"
      }
    ]
  }
]
</script>

<!-- Hero Section -->
<div class="hero-section-detail">
  <div class="hero-image" style="background-image: url('products/admixtures.jpeg')"></div>
  <div class="hero-background">
    <div class="hero-circle hero-circle-1"></div>
    <div class="hero-circle hero-circle-2"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="gradient-text">Our Products</span>
    </h1>
    <p class="hero-description">
      Comprehensive range of chemical solutions for every home improvement need
    </p>
  </div>
</div>

<!-- Products Section -->
<div id="products" class="products-section">
  <div class="section-header">
    <!-- <h2>Our Offerings for the Construction Industry</h2>
    <p class="section-subtitle">Comprehensive range of chemical solutions for every home improvement need</p> -->
  </div>

  <!-- Products -->
  <div v-for="product in products" :key="product.name" class="product-category">
    <div class="products-grid">
      <a v-for="item in product.items" :key="item.name" :href="item.link" class="product-card" :style="{ backgroundImage: 'url(' + item.image + ')' }">
        <div class="product-content">
          <p>{{ item.description }}</p>
          <h4>{{ item.name }}</h4>
        </div>
      </a>
    </div>
  </div>
</div>

<style>
:root {
  --primary-color: #014ca8;
  --primary-dark: #013a7d;
  --secondary-color: #3d8bfd;
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

/* Hero Section */
.VPNavBar .divider {
  display: none !important;
}

.hero-section-detail {
  position: relative;
  padding: 0;
  background: var(--bg-gradient);
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-bottom: 0;
  width: 100vw;
  overflow: hidden;
  height: 30vh;
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

.products-section {
  padding: 48px 24px;
  background: var(--bg-light);
  min-height: calc(100vh - var(--vp-nav-height));
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
  border-top: none !important;
  padding-top: 0 !important;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-light);
  margin: 0 auto;
  line-height: 1.7;
  text-align: center;
}

.product-category {
  max-width: 1200px;
  margin: 0 auto 80px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

.product-card {
  background: var(--bg-white);
  padding: 0;
  border-radius: 20px;
  box-shadow: var(--card-shadow);
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  text-decoration: none;
}

.product-card::after {
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

.product-card:hover::after {
  transform: scale(1.08);
}

.product-card .product-content {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.60);
  display: flex;
  flex-direction: column-reverse;
  transition: background 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card::before {
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

.product-card:hover::before {
  opacity: 0.15;
}

.product-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 30px 60px -15px rgba(1, 76, 168, 0.4);
  border-color: var(--primary-color);
}

.product-card:hover .product-content {
  background: rgba(0, 0, 0, 0.50);
}

.product-card > * {
  position: relative;
  z-index: 1;
}

.product-card h4 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 12px;
  line-height: 1.4;
  padding: 0 32px;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
}

.product-card:hover h4 {
  transform: translateY(-4px);
}

.product-card p {
  color: var(--text-white);
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 20px;
  padding: 0 32px;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s, opacity 0.3s ease;
}

.product-card:hover p {
  transform: translateY(-4px);
  opacity: 1;
}
</style>
