---
layout: home
title: Concrete Admixtures - Ascent Master Chem
description: Smart admixtures for stronger, longer-lasting concrete.
---

<script setup>
import { ref } from 'vue'

const products = [
  {
    name: 'Plasticizer',
    description: 'Plasticizers are concrete admixtures designed to improve the workability of concrete without increasing water content.',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
    link: 'plasticizer.html'
  },
  {
    name: 'Super Plasticizer',
    description: 'Super plasticizers are high-performance concrete admixtures that greatly increase workability while significantly reducing the water–cement ratio.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
    link: 'super-plasticizer.html'
  },
  {
    name: 'Accelerator',
    description: 'Accelerators are concrete admixtures that speed up the setting and hardening process of concrete.',
    image: 'https://images.unsplash.com/photo-1590496794807-9d49c2f2c0e6?w=800&q=80',
    link: 'accelerator.html'
  },
  {
    name: 'Retarder',
    description: 'Retarders are concrete admixtures used to delay the setting time of concrete, preventing premature stiffening during placement and finishing.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    link: 'retarder.html'
  },
  {
    name: 'Integral Waterproofing Admixture',
    description: 'Integral waterproofing admixtures reduce the permeability of concrete, significantly improving its resistance to water penetration.',
    image: 'https://images.unsplash.com/photo-1563106004-07f8a8c52382?w=800&q=80',
    link: 'integral-waterproofing-admixture.html'
  },
  {
    name: 'Curing Compound',
    description: 'Curing compounds are applied to fresh concrete to retain moisture and ensure proper cement hydration.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    link: 'curing-compound.html'
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
      <span class="gradient-text">Concrete Admixtures</span>
    </h1>
    <p class="hero-description">
      Smart admixtures for stronger, longer-lasting concrete.
    </p>
  </div>
</div>

<!-- Content Section -->
<div class="detail-content">
  <!--
  <div class="content-section">
    <h2>Product Overview</h2>
    <p>
      Our concrete admixtures are specially formulated to enhance the performance of concrete in various applications. 
      These advanced chemical solutions improve strength, durability, workability, and setting time, making your concrete 
      projects more efficient and reliable.
    </p>
  </div>
  <div class="content-section">
    <h2>Key Features</h2>
    <ul>
      <li><strong>Enhanced Strength:</strong> Significantly improves the compressive and tensile strength of concrete</li>
      <li><strong>Improved Durability:</strong> Increases resistance to weathering, chemical attack, and wear</li>
      <li><strong>Better Workability:</strong> Makes concrete easier to mix, place, and finish</li>
      <li><strong>Controlled Setting Time:</strong> Allows for precise control over the setting and hardening process</li>
      <li><strong>Reduced Water Content:</strong> Achieves desired consistency with less water, improving overall quality</li>
    </ul>
  </div>
  <div class="content-section">
    <h2>Applications</h2>
    <ul>
      <li>Residential and commercial construction</li>
      <li>Infrastructure projects (bridges, roads, tunnels)</li>
      <li>Industrial flooring</li>
      <li>Pre-cast concrete products</li>
      <li>Ready-mix concrete</li>
    </ul>
  </div>
  <div class="content-section">
    <h2>Technical Specifications</h2>
    <p>
      Our concrete admixtures are manufactured to the highest quality standards and comply with relevant industry specifications. 
      Contact our technical team for detailed specifications and dosage recommendations for your specific application.
    </p>
  </div>
  -->
  <!-- Products Section -->
  <div class="products-section-detail">
    <h2>Our Concrete Admixture Products</h2>
    <p class="section-subtitle">Explore our comprehensive range of concrete admixtures</p>
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
    <p>Contact our expert team to learn more about our concrete admixtures and find the perfect solution for your project.</p>
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

/* Products Section in Detail Page */
.products-section-detail {
  margin: 60px 0;
  padding: 48px 0;
  border-top: 2px solid var(--border-color);
  border-bottom: 2px solid var(--border-color);
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
  
  .content-section {
    margin-bottom: 36px;
  }
  
  .cta-box {
    padding: 32px 24px;
  }
  
  .products-section-detail .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
