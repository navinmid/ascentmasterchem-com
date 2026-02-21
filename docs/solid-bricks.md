---
layout: home
title: Solid Bricks - Ascent Master Chem
description: High-strength, dense building blocks for walls, foundations, and structural applications.
---

<!-- Hero Section -->
<div class="hero-section-detail">
  <div class="hero-image" style="background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop')"></div>
  <div class="hero-background">
    <div class="hero-circle hero-circle-1"></div>
    <div class="hero-circle hero-circle-2"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="gradient-text">Solid Bricks</span>
    </h1>
    <p class="hero-description">
      High-strength building blocks for durable construction
    </p>
  </div>
</div>

<!-- Content Section -->
<div class="detail-content">
  <div class="content-section">
    <h2>Product Overview</h2>
    <p>
      Solid bricks are high-strength, dense building blocks made from clay or concrete, widely used in walls, foundations, and structural applications. They provide excellent load-bearing capacity, durability, and thermal insulation, ensuring long-lasting and stable construction.
    </p>
  </div>

  <div class="content-section">
    <h2>Key Features</h2>
    <ul>
      <li><strong>High Compressive Strength:</strong> Excellent load-bearing capacity for structural applications</li>
      <li><strong>Superior Durability:</strong> Resistant to weathering, fire, and environmental degradation</li>
      <li><strong>Dense Structure:</strong> Solid composition provides maximum strength and stability</li>
      <li><strong>Thermal Insulation:</strong> Excellent heat retention and temperature regulation properties</li>
      <li><strong>Sound Insulation:</strong> Dense mass effectively reduces noise transmission</li>
      <li><strong>Fire Resistant:</strong> Non-combustible material ensures safety in fire conditions</li>
      <li><strong>Long Service Life:</strong> Maintains structural integrity for decades with minimal maintenance</li>
    </ul>
  </div>

  <div class="content-section">
    <h2>Applications</h2>
    <ul>
      <li>Load-bearing walls in multi-story buildings</li>
      <li>Foundation and basement construction</li>
      <li>Structural columns and piers</li>
      <li>Retaining walls and boundary structures</li>
      <li>Heritage and traditional construction</li>
      <li>Industrial and commercial buildings</li>
    </ul>
  </div>

  <div class="content-section">
    <h2>Technical Benefits</h2>
    <ul>
      <li>Compressive strength ranging from 10-20 N/mm²</li>
      <li>Water absorption between 10-15%</li>
      <li>High density of 1800-2000 kg/m³</li>
      <li>Excellent bond strength with mortar</li>
      <li>Resistant to chemical attacks and efflorescence</li>
      <li>Meets IS 1077 standards for quality assurance</li>
    </ul>
  </div>

  <div class="content-section">
    <h2>Construction Advantages</h2>
    <p>
      Solid bricks provide a proven construction solution with centuries of successful application. Their uniform size and shape ensure consistent quality and easier masonry work. The natural materials used in manufacturing make them environmentally friendly and recyclable. Solid bricks offer excellent plaster adhesion and can be easily cut or shaped for custom requirements. Their thermal mass helps regulate indoor temperatures, reducing energy costs for heating and cooling.
    </p>
  </div>

  <div class="cta-box">
    <h3>Need More Information?</h3>
    <p>Contact our expert team to learn more about solid bricks and get technical support for your project.</p>
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
