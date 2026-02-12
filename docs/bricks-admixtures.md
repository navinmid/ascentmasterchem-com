---
layout: home
title: Bricks Admixtures - Ascent Master Chem
description: Enhance strength, durability, water resistance, and overall quality.
---

<script setup>
import { ref } from 'vue'

const products = [
  {
    name: "Fly Ash Bricks",
    description: "Fly ash bricks are eco-friendly building blocks made from fly ash, cement, and water. They offer high strength, uniform size, and excellent durability, while reducing environmental impact by utilizing industrial by-products. Ideal for walls, partitions, and structural applications, these bricks provide superior insulation, low water absorption, and long-term stability.",
    image: 'https://images.unsplash.com/photo-1601058642989-77416ebfae62?w=800&auto=format&fit=crop',
    link: 'fly-ash-bricks.html'
  },
  {
    name: "Paver Blocks",
    description: "Paver blocks are durable, high-strength concrete blocks used for constructing driveways, walkways, patios, and parking areas. They offer excellent load-bearing capacity, slip resistance, and aesthetic appeal. Available in various shapes, sizes, and colors, paver blocks provide a long-lasting, low-maintenance, and visually appealing paving solution.",
    image: 'https://images.unsplash.com/photo-1611267254323-4db7b39c732c?w=800&auto=format&fit=crop',
    link: 'paver-blocks.html'
  },
  {
    name: "Solid Bricks",
    description: "Solid bricks are high-strength, dense building blocks made from clay or concrete, widely used in walls, foundations, and structural applications. They provide excellent load-bearing capacity, durability, and thermal insulation, ensuring long-lasting and stable construction.",
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    link: 'solid-bricks.html'
  },
  {
    name: "Interlocking Bricks",
    description: "Interlocking bricks are specially designed concrete or clay blocks that fit together without the need for mortar. They provide fast, stable, and cost-effective construction while maintaining high strength, durability, and load-bearing capacity. Ideal for walls, pavements, and landscaping, interlocking bricks reduce construction time and material usage.",
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop',
    link: 'interlocking-bricks.html'
  }
]
</script>

<!-- Hero Section -->
<div class="hero-section-detail">
  <div class="hero-image" style="background-image: url('home/admixtures.jpeg')"></div>
  <div class="hero-background">
    <div class="hero-circle hero-circle-1"></div>
    <div class="hero-circle hero-circle-2"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="gradient-text">Bricks Admixtures</span>
    </h1>
    <p class="hero-description">
      Enhance strength, durability, water resistance, and overall quality.
    </p>
  </div>
</div>

<!-- Content Section -->
<div class="detail-content">
  <!--
  <div class="content-section">
    <h2>Product Overview</h2>
    <p>
      Our specialized brick admixtures are designed to enhance the performance and quality of brick manufacturing. 
      These advanced chemical formulations improve the physical properties of bricks, making them stronger, more durable, 
      and better suited for modern construction demands.
    </p>
  </div>
  <div class="content-section">
    <h2>Key Features</h2>
    <ul>
      <li><strong>Increased Strength:</strong> Significantly enhances compressive and tensile strength of bricks</li>
      <li><strong>Superior Durability:</strong> Improves resistance to weathering and environmental degradation</li>
      <li><strong>Water Resistance:</strong> Reduces water absorption and prevents moisture-related damage</li>
      <li><strong>Better Workability:</strong> Improves the plasticity and moldability of clay mixtures</li>
      <li><strong>Reduced Efflorescence:</strong> Minimizes salt deposits on brick surfaces</li>
      <li><strong>Enhanced Appearance:</strong> Produces bricks with better surface finish and color uniformity</li>
    </ul>
  </div>
  <div class="content-section">
    <h2>Applications</h2>
    <ul>
      <li>Clay brick manufacturing</li>
      <li>Fly ash brick production</li>
      <li>Concrete brick manufacturing</li>
      <li>Hollow and solid brick production</li>
      <li>Paver block manufacturing</li>
      <li>Decorative and facing brick production</li>
    </ul>
  </div>
  <div class="content-section">
    <h2>Benefits</h2>
    <ul>
      <li>Reduces production costs by optimizing raw material usage</li>
      <li>Improves production efficiency and reduces cycle time</li>
      <li>Enhances product quality and consistency</li>
      <li>Increases market value of finished bricks</li>
      <li>Complies with modern building standards and regulations</li>
    </ul>
  </div>
  <div class="content-section">
    <h2>Technical Specifications</h2>
    <p>
      Our brick admixtures are formulated using advanced chemical technology and are compatible with various brick 
      manufacturing processes. The dosage and application method can be customized based on your specific requirements. 
      Contact our technical team for detailed product specifications, dosage recommendations, and application guidelines.
    </p>
  </div>
  -->
  <!-- Products Section -->
  <div class="products-section-detail">
    <h2>Our Brick Products</h2>
    <p class="section-subtitle">Explore our comprehensive range of high-quality bricks designed for various construction applications</p>
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
    <p>Contact our expert team to learn more about our brick admixtures and find the perfect solution for your manufacturing needs.</p>
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
