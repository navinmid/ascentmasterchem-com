---
layout: home
title: Paver Blocks - Ascent Master Chem
description: Durable, high-strength concrete blocks for driveways, walkways, and patios.
---

<!-- Hero Section -->
<div class="hero-section-detail">
  <div class="hero-image" style="background-image: url('https://images.unsplash.com/photo-1611267254323-4db7b39c732c?w=800&auto=format&fit=crop')"></div>
  <div class="hero-background">
    <div class="hero-circle hero-circle-1"></div>
    <div class="hero-circle hero-circle-2"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="gradient-text">Paver Blocks</span>
    </h1>
    <p class="hero-description">
      High-strength paving solution for durability and aesthetics
    </p>
  </div>
</div>

<!-- Content Section -->
<div class="detail-content">
  <div class="content-section">
    <h2>Product Overview</h2>
    <p>
      Paver blocks are durable, high-strength concrete blocks used for constructing driveways, walkways, patios, and parking areas. They offer excellent load-bearing capacity, slip resistance, and aesthetic appeal. Available in various shapes, sizes, and colors, paver blocks provide a long-lasting, low-maintenance, and visually appealing paving solution.
    </p>
  </div>

  <div class="content-section">
    <h2>Key Features</h2>
    <ul>
      <li><strong>High Load-Bearing Capacity:</strong> Withstands heavy traffic and vehicular loads without cracking</li>
      <li><strong>Slip Resistant:</strong> Textured surface provides excellent grip and safety in wet conditions</li>
      <li><strong>Aesthetic Appeal:</strong> Available in various colors, shapes, and patterns for attractive designs</li>
      <li><strong>Easy Installation:</strong> Interlocking design allows for quick and efficient installation</li>
      <li><strong>Low Maintenance:</strong> Resistant to wear, stains, and weather damage with minimal upkeep</li>
      <li><strong>Permeable Options:</strong> Allows water drainage, reducing surface runoff and flooding</li>
      <li><strong>Reusable:</strong> Can be easily removed and reinstalled if needed for repairs or redesign</li>
    </ul>
  </div>

  <div class="content-section">
    <h2>Applications</h2>
    <ul>
      <li>Driveways and parking areas</li>
      <li>Walkways and footpaths</li>
      <li>Patios and garden pathways</li>
      <li>Public spaces and plazas</li>
      <li>Commercial and industrial yards</li>
      <li>Road shoulders and pedestrian crossings</li>
    </ul>
  </div>

  <div class="content-section">
    <h2>Technical Benefits</h2>
    <ul>
      <li>Compressive strength of 30-50 N/mm²</li>
      <li>Water absorption less than 6%</li>
      <li>Available in thicknesses of 60mm, 80mm, and 100mm</li>
      <li>UV resistant and colorfast properties</li>
      <li>Frost resistant in cold climates</li>
      <li>Meets IS 15658 standards for quality assurance</li>
    </ul>
  </div>

  <div class="content-section">
    <h2>Design Options</h2>
    <p>
      Paver blocks come in a wide range of designs including rectangular, square, hexagonal, and interlocking shapes. Multiple color options allow for creative patterns such as herringbone, basket weave, and running bond. The versatility in design makes paver blocks suitable for both functional and decorative applications, enhancing the visual appeal of any outdoor space while providing superior performance.
    </p>
  </div>

  <div class="cta-box">
    <h3>Need More Information?</h3>
    <p>Contact our expert team to learn more about paver blocks and get technical support for your project.</p>
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
}
</style>
