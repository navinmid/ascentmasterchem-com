---
layout: home
title: Ascent Master Chem - Premium Chemical Solutions for Homes
description: Leading manufacturer of construction chemicals including bonding agents, grouts, flooring systems, sealants, and specialty products.
head:
  - - meta
    - name: description
      content: Ascent Master Chem manufactures premium chemical solutions for homes including bonding agents, epoxy flooring, sealants, and specialty coatings.
---

<script setup>
import { ref } from 'vue'

const products = [
  {
    name: "Concrete Admixtures",
    caption: "Smart admixtures for stronger, longer-lasting concrete.",
    icon: "🧪",
    image: "products/admixtures.jpeg",
    items: [
      {
        name: 'Plasticizer',
        description: 'Plasticizers are concrete admixtures designed to improve the workability of concrete without increasing water content. By reducing the water requirement, they help achieve better consistency while enhancing the overall strength, durability, and surface finish of the concrete.',
        icon: '💧'
      },
      {
        name: 'Super Plasticizer',
        description: 'Super plasticizers are high-performance concrete admixtures that greatly increase workability while significantly reducing the water–cement ratio. This results in high-strength, dense, and durable concrete with excellent flow and finish, making them ideal for high-performance and reinforced concrete applications.',
        icon: '💧⚡'
      },
      {
        name: 'Accelerator',
        description: 'Accelerators are concrete admixtures that speed up the setting and hardening process of concrete. By promoting early strength gain, they help reduce construction time and allow for faster formwork removal and quicker project completion.',
        icon: '⚡'
      },
      {
        name: 'Retarder',
        description: 'Retarders are concrete admixtures used to delay the setting time of concrete, preventing premature stiffening during placement and finishing. They are especially suitable for hot weather conditions and long pours, ensuring better workability and uniform concrete quality.',
        icon: '⏳'
      },
      {
        name: 'Integral Waterproofing Admixture',
        description: 'Integral waterproofing admixtures reduce the permeability of concrete, significantly improving its resistance to water penetration. By enhancing durability and providing protection against corrosion, they help extend the service life of concrete structures exposed to moisture.',
        icon: '🛡️💧'
      },
      {
        name: 'Curing Compound',
        description: 'Curing compounds are applied to fresh concrete to retain moisture and ensure proper cement hydration. By preventing rapid moisture loss, they help reduce surface cracks and improve the strength and durability of the finished concrete.',
        icon: '🛠️💧'
      }
    ]
  },
  {
    name: "Tile Adhesives",
    caption: "High-performance adhesives for every tile type.",
    icon: "🔗",
    image: "products/tile-adhesive.jpeg",
    items: [
      {
        name: 'MASTER CHEM 1008 (Interior – Ceramic & Vitrified)',
        description: 'MASTER CHEM 1008 is a high-quality tile adhesive designed for interior applications, perfect for ceramic and vitrified tiles. It ensures strong adhesion, smooth application, and a durable, long-lasting finish for walls and floors.',
        icon: '🟦'
      },
      {
        name: '⁠MASTER CHEM 1017 (Wall & Floor – Residential / Commercial)',
        description: 'MASTER CHEM 1017 is a versatile tile adhesive suitable for both wall and floor installations in residential and commercial spaces. It provides excellent bonding, easy workability, and reliable performance under daily use.',
        icon: '🟦🟦'
      },
      {
        name: 'MASTER CHEM 1026 (Large Format Tiles & Stone)',
        description: 'MASTER CHEM 1026 is specially formulated for large-format tiles and natural stone installations. It offers superior grip, prevents slippage, and ensures a uniform, professional finish for demanding projects.',
        icon: '🪨🟦'
      },
      {
        name: ' ⁠MASTER CHEM 1035 (Exterior, Wet Areas & Heavy Duty)',
        description: 'MASTER CHEM 1035 is a robust, heavy-duty tile adhesive suitable for exterior surfaces, wet areas, and high-traffic zones. It delivers excellent water resistance, strong bonding, and long-term durability in challenging conditions.',
        icon: '☔🟦'
      }
    ]
  },
  {
    name: "Cementitious Grout",
    caption: "Durable grout for every tile application.",
    icon: "➖",
    image: "products/grouts.jpeg",
    items: [
      {
        name: 'MASTER CHEM 1008 (Unsanded)',
        description: 'MASTER CHEM 1008 is an unsanded cementitious grout ideal for narrow joints up to 3mm. It provides smooth filling, excellent adhesion, and a neat, uniform finish for interior tile installations.',
        icon: '🟦✏️'
      },
      {
        name: '⁠MASTER CHEM 1017 (Standard Grade)',
        description: 'MASTER CHEM 1017 is a standard-grade cementitious grout suitable for general-purpose tile joints. It ensures strong bonding, consistent color, and durability for both wall and floor applications.',
        icon: '🟦🟦'
      },
      {
        name: 'MASTER CHEM 1026 (Polymer Modified)',
        description: 'MASTER CHEM 1026 is a polymer-modified cementitious grout that enhances flexibility, adhesion, and water resistance. It is ideal for areas exposed to moisture or slight movement, providing a durable and long-lasting finish.',
        icon: '🟦💧'
      },
      {
        name: ' ⁠MASTER CHEM 1035 (Heavy Duty)',
        description: 'MASTER CHEM 1035 is a heavy-duty cementitious grout designed for high-traffic areas and demanding installations. It delivers exceptional strength, crack resistance, and long-term performance under tough conditions.',
        icon: '🟦🪨'
      }
    ]
  },
  {
    name: "Epoxy Based Waterproof Tile Joint Filler",
    caption: "MASTER CHEM 1044 is an epoxy-based waterproof tile joint filler designed for high-performance applications. It provides exceptional chemical resistance, durability, and long-lasting protection for tile joints in wet or heavy-duty areas.",
    icon: "💧",
    image: "products/epoxy.jpeg",
    items: []
  },
  {
    name: "Acid Based Tile Cleaner",
    caption: "MASTER CHEM 1053 is a powerful acid-based tile cleaner formulated to remove tough stains, cement residues, and mineral deposits. It restores the natural shine and cleanliness of tiles while being suitable for heavy-duty cleaning.",
    icon: "🧽",
    image: "products/tile-cleaner.jpeg",
    items: []
  },
  {
    name: "Fly Ash Bricks",
    caption: "Fly ash bricks are eco-friendly building blocks made from fly ash, cement, and water. They offer high strength, uniform size, and excellent durability, while reducing environmental impact by utilizing industrial by-products. Ideal for walls, partitions, and structural applications, these bricks provide superior insulation, low water absorption, and long-term stability.",
    icon: "🧱",
    image: "products/fly-ash.jpeg",
    items: []
  },
  {
    name: "Paver Blocks",
    caption: "Paver blocks are durable, high-strength concrete blocks used for constructing driveways, walkways, patios, and parking areas. They offer excellent load-bearing capacity, slip resistance, and aesthetic appeal. Available in various shapes, sizes, and colors, paver blocks provide a long-lasting, low-maintenance, and visually appealing paving solution.",
    icon: "🧱",
    image: "products/paver-block.jpeg",
    items: []
  },
  {
    name: "Solid Bricks",
    caption: "Solid bricks are high-strength, dense building blocks made from clay or concrete, widely used in walls, foundations, and structural applications. They provide excellent load-bearing capacity, durability, and thermal insulation, ensuring long-lasting and stable construction.",
    icon: "🧱",
    image: "products/solid-bricks.jpeg",
    items: []
  },
  {
    name: "Interlocking Bricks",
    caption: "Interlocking bricks are specially designed concrete or clay blocks that fit together without the need for mortar. They provide fast, stable, and cost-effective construction while maintaining high strength, durability, and load-bearing capacity. Ideal for walls, pavements, and landscaping, interlocking bricks reduce construction time and material usage.",
    icon: "🔗",
    image: "products/inter-locking.jpeg",
    items: []
  }
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Karur, Tamilnadu',
    content: 'The epoxy flooring from Ascent Master Chem transformed our garage. It\'s been two years and it still looks brand new. Highly recommend their products!',
    rating: 5
  },
  {
    name: 'Priya Senthil',
    role: 'Salem, Tamilnadu',
    content: 'I\'ve been recommending their sealants and bonding agents to all my clients. The quality is consistent and the technical support is excellent.',
    rating: 5
  },
  {
    name: 'Mohan Subramani',
    role: 'Contractor, Karur, Tamilnadu',
    content: 'As a contractor, I need reliable products. Their non-shrink grout and crack fillers have never let me down on any project. Highly recommend their products!',
    rating: 5
  },
  {
    name: 'Ramesh Natesan',
    role: 'Homeowner, Erode, Tamilnadu',
    content: 'Used their rust remover on our iron gate. The results were amazing! The surface was clean and ready for painting within hours.',
    rating: 5
  }
]
</script>

<!-- Hero Section -->
<div class="hero-section">
  <div class="hero-background">
    <div class="hero-circle hero-circle-1"></div>
    <div class="hero-circle hero-circle-2"></div>
    <div class="hero-circle hero-circle-3"></div>
  </div>
  <div class="hero-content">
    <div class="hero-badge">🏆 Premium Quality Since 2009</div>
    <h1 class="hero-title">
      <span class="gradient-text">Premium Chemical Solutions</span><br/>
      <span class="hero-subtitle-text">for Your Home</span>
    </h1>
    <p class="hero-description">
     Ascent Masterchem is a sister concern of Ascent Chemicals, a well-established chemical manufacturing company founded in 2009 with over 16 years of industry experience. Built on a strong foundation of technical expertise and innovation, Ascent Chemicals has successfully developed and delivered 100+ high-performance products across multiple industrial segments.
    </p>
    <div class="hero-actions">
      <a href="about.html" class="btn-primary">
        <span>Learn more</span>
      </a>
      <a href="#products" class="btn-primary">
        <span>Explore Products</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <div class="stat-number">100+</div>
        <div class="stat-label">Products</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-number">10K+</div>
        <div class="stat-label">Happy Customers</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-number">16+</div>
        <div class="stat-label">Years Experience</div>
      </div>
    </div>
  </div>
</div>

<!-- Features Section -->
<div class="features-section">
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon">🏆</div>
      <h3>Premium Quality</h3>
      <p>All products undergo rigorous quality testing to ensure optimal performance</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🔬</div>
      <h3>Research Driven</h3>
      <p>Continuously innovating with advanced formulations and technologies</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🌍</div>
      <h3>Eco-Friendly</h3>
      <p>Committed to sustainable manufacturing and environmentally safe products</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🤝</div>
      <h3>Expert Support</h3>
      <p>Dedicated technical team to assist with product selection and application</p>
    </div>
  </div>
</div>

<!-- Products Section -->
<div id="products" class="products-section">
  <div class="section-header">
    <h2 class="section-title">Our Products</h2>
    <p class="section-subtitle">Comprehensive range of chemical solutions for every home improvement need</p>
  </div>

  <!-- Products -->
  <div v-for="product in products" :key="product.name" class="product-category">
    <div class="category-header">
      <div class="category-icon-wrapper">
        <span class="category-icon">{{ product.icon }}</span>
      </div>
      <div>
        <h3>{{ product.name }}</h3>
        <p class="category-desc">{{ product.caption }}</p>
      </div>
    </div>
    <div class="product-image-wrapper">
        <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
    </div>
    <div class="products-grid">
      <div v-for="item in product.items" :key="item.name" class="product-card">
        <div class="product-header">
          <div class="product-icon">{{ item.icon }}</div>
          <span class="product-badge">Popular</span>
        </div>
        <h4>{{ item.name }}</h4>
        <p>{{ item.description }}</p>
        <!-- <div class="product-image-wrapper">
          <img :src="item.image" :alt="item.name" class="product-image" loading="lazy" />
        </div> -->
        <a href="#contact" class="product-link">Learn More →</a>
      </div>
    </div>
  </div>
</div>

<!-- Testimonials Section -->
<div id="testimonials" class="testimonials-section">
  <div class="section-header">
    <h2 class="section-title">What Our Customers Say</h2>
    <p class="section-subtitle">Trusted by thousands of homeowners and professionals</p>
  </div>
  <div class="testimonials-grid">
    <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
      <div class="quote-icon">"</div>
      <div class="testimonial-rating">
        <span v-for="i in testimonial.rating" :key="i">⭐</span>
      </div>
      <p class="testimonial-content">{{ testimonial.content }}</p>
      <div class="testimonial-author">
        <div class="author-avatar">{{ testimonial.name.charAt(0) }}</div>
        <div class="author-info">
          <h4>{{ testimonial.name }}</h4>
          <p>{{ testimonial.role }}</p>
        </div>
      </div>
      <div class="verified-badge">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 8L7 10L11 6" stroke="#00a86b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="8" r="7" stroke="#00a86b" stroke-width="1.5"/></svg>
        <span>Verified Customer</span>
      </div>
    </div>
  </div>
</div>

<!-- Contact Section -->
<div id="contact" class="contact-section">
  <div class="section-header">
    <h2 class="section-title">Contact Us</h2>
    <p class="section-subtitle">Have questions? We'd love to hear from you</p>
  </div>
  <div class="contact-container">
    <div class="contact-info">
      <div class="contact-item">
        <span class="contact-icon">📍</span>
        <div>
          <h4>Address</h4>
          <p>SF No. 685/3, Ayyampalayam,<br/>Thottakuruchi village,<br/>Punjai Pugalur,<br/>Karur, Tamilnadu - 639113</p>
        </div>
      </div>
      <div class="contact-item">
        <span class="contact-icon">📞</span>
        <div>
          <h4>Phone</h4>
          <p><a href="tel:+919943621234">+91 99436 21234</a></p>
        </div>
      </div>
      <div class="contact-item">
        <span class="contact-icon">✉️</span>
        <div>
          <h4>Email</h4>
          <p><a href="mailto:sales@ascentmasterchem.com">sales@ascentmasterchem.com</a></p>
        </div>
      </div>
      <!-- <div class="contact-item">
        <span class="contact-icon">🕐</span>
        <div>
          <h4>Working Hours</h4>
          <p>Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
        </div>
      </div> -->
    </div>
  </div>
</div>

<!-- CTA Section -->
<div class="cta-section">
  <div class="cta-content">
    <h2>Ready to Transform Your Home?</h2>
    <p>Get in touch with our experts to find the perfect chemical solution for your project</p>
    <a href="#contact" class="btn-primary">Contact Us Today</a>
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

body, html {
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: 0;
  background: var(--bg-gradient);
  text-align: center;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: -24px;
  margin-bottom: 0;
  width: 100vw;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba(1, 76, 168, 0.85);
}

.hero-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 20s infinite ease-in-out;
}

.hero-circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.hero-circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-delay: 3s;
}

.hero-circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 10%;
  animation-delay: 6s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.1); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 120px 24px;
  width: 100%;
}
@media (max-width: 480px) {
  .hero-content {
    padding: 40px 24px;
  }
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 24px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-subtitle-text {
  display: inline-block;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 40px;
  line-height: 1.7;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease-out 0.8s both;
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
}

.btn-primary {
  background: var(--primary-color);
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(1, 76, 168, 0.3);
  border: 2px solid var(--primary-color);
  z-index: 1;
}

.dark .btn-primary {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 4px 14px rgba(61, 139, 253, 0.4);
  border-color: var(--primary-color);
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

.btn-primary > * {
  position: relative;
  z-index: 1;
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(1, 76, 168, 0.4);
}

.dark .btn-primary:hover {
  box-shadow: 0 8px 24px rgba(61, 139, 253, 0.5);
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 1s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
}

/* Features Section */
.features-section {
  padding: 100px 24px;
  background: var(--bg-white);
  margin: 0 -24px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  text-align: center;
  padding: 40px 32px;
  background: var(--bg-light);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--bg-gradient);
  transform: scaleX(0);
  transition: transform 0.4s;
  transform-origin: left;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--primary-color);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.4s;
}

.feature-card:hover .feature-icon {
  transform: scale(1.2) rotate(5deg);
}

.feature-card h3 {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Products Section */
.products-section {
  padding: 100px 24px;
  background: var(--bg-light);
  margin: 0 -24px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--bg-gradient);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-light);
  margin: 24px auto 0;
  line-height: 1.7;
  text-align: center;
}

.product-category {
  max-width: 1200px;
  margin: 0 auto 80px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  padding: 24px;
  background: var(--bg-white);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.category-icon-wrapper {
  width: 64px;
  height: 64px;
  background: var(--bg-gradient);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

.category-icon {
  font-size: 2rem;
}

.category-header h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0 0 4px;
}

.category-desc {
  color: var(--text-light);
  margin: 0;
  font-size: 0.95rem;
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  transition: opacity 0.4s;
  z-index: 0;
}

.product-card:hover::before {
  opacity: 0.03;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  border-color: var(--primary-color);
}

.product-card > * {
  position: relative;
  z-index: 1;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 32px 32px 0;
}

.product-image-wrapper {
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin: 20px 0;
  padding: 0 32px;
  border-radius: 12px;
  position: relative;
}

.product-image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/*.product-card:hover */
.product-image:hover {
  transform: scale(1.1);
}

.product-icon {
  font-size: 3rem;
  transition: transform 0.4s;
}

.product-card:hover .product-icon {
  transform: scale(1.15) rotate(-5deg);
}

.product-badge {
  padding: 4px 12px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
  line-height: 1.4;
  padding: 0 32px;
}

.product-card p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 20px;
  padding: 0 32px;
}

.product-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: gap 0.3s;
  padding: 0 32px 32px;
  margin-top: auto;
}

.product-link:hover {
  gap: 8px;
}

/* Testimonials Section */
.testimonials-section {
  padding: 140px 24px 100px;
  background: var(--bg-white);
  margin: 0 -24px;
  position: relative;
  overflow: hidden;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  /* background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-white) 100%); */
  z-index: 0;
}

.testimonials-section > * {
  position: relative;
  z-index: 1;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: var(--bg-light);
  padding: 36px;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--bg-gradient);
  transform: scaleX(0);
  transition: transform 0.4s;
  transform-origin: left;
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
  border-color: var(--primary-color);
}

.quote-icon {
  font-size: 4rem;
  color: var(--primary-color);
  opacity: 0.2;
  line-height: 1;
  margin-bottom: -20px;
  font-family: Georgia, serif;
}

.testimonial-rating {
  margin-bottom: 20px;
  font-size: 1.125rem;
}

.testimonial-content {
  font-size: 1.05rem;
  color: var(--text-dark);
  line-height: 1.8;
  margin-bottom: 24px;
  font-style: normal;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  margin-bottom: 16px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  background: var(--bg-gradient);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

.author-info h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0 0 4px;
}

.author-info p {
  font-size: 0.875rem;
  color: var(--text-light);
  margin: 0;
}

.verified-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--secondary-color);
  font-size: 0.875rem;
  font-weight: 600;
}

/* Contact Section */
.contact-section {
  padding: 100px 24px;
  background: var(--bg-light);
  margin: 0 -24px;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  display: contents;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
  padding: 36px 24px;
  background: var(--bg-white);
  border-radius: 20px;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.contact-item:hover {
  border-color: var(--primary-color);
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.contact-icon {
  font-size: 2rem;
  background: var(--bg-gradient);
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(1, 76, 168, 0.3);
  margin-bottom: 8px;
}

.contact-item h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0 0 8px;
}

.contact-item p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.7;
  font-size: 0.95rem;
}

.contact-item a {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s;
  font-weight: 500;
}

.contact-item a:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

.dark .contact-item a {
  color: var(--primary-color);
}

.dark .contact-item a:hover {
  color: #5ea3ff;
}

/* CTA Section */
.cta-section {
  padding: 100px 24px;
  background: var(--bg-gradient);
  margin: 0 -24px -24px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before,
.cta-section::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.cta-section::before {
  width: 400px;
  height: 400px;
  top: -200px;
  right: -100px;
}

.cta-section::after {
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: -100px;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  line-height: 1.3;
}

.cta-content p {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 40px;
  line-height: 1.7;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 80px 20px 60px;
  }
  
  .hero-stats {
    gap: 24px;
  }
  
  .stat-divider {
    display: none;
  }
  
  .features-section,
  .products-section,
  .testimonials-section,
  .contact-section,
  .cta-section {
    padding: 60px 20px;
  }
  
  .section-header {
    margin-bottom: 48px;
  }
  
  .product-category {
    margin-bottom: 60px;
  }
  
  .category-header {
    flex-direction: column;
    text-align: center;
  }
  
  .products-grid,
  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .btn-primary {
    width: 100%;
    justify-content: center;
  }
  
  .contact-form {
    padding: 28px 20px;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Selection colors */
::selection {
  background: var(--primary-color);
  color: white;
}

/* Focus visible for accessibility */
*:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
</style>
