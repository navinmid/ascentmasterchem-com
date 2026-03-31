<template>
  <div class="cs-page">
    <div class="cs-bg"></div>
    <div class="cs-grid"></div>

    <div class="cs-container">
      <div class="cs-logo-wrap">
        <img src="/logo.png" alt="Ascent Master Chem" class="cs-logo" />
      </div>

      <span class="cs-badge">Launching Soon</span>

      <h1 class="cs-title"><span class="cs-gradient">Coming Soon</span></h1>

      <div class="cs-divider"></div>

      <p class="cs-tagline">
        Premium chemical solutions for construction &amp; home improvement —
        tile adhesives, grouts, admixtures, and more. We're putting the
        finishing touches on our new website.
      </p>

      <div class="cs-contact">
        <span class="cs-contact-label">Get in touch</span>
        <a href="tel:+919943621234" class="cs-cta">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 11V13.5C14 14.328 13.328 15 12.5 15C6.159 15 1 9.841 1 3.5C1 2.672 1.672 2 2.5 2H5L6.5 5.5L4.75 7.25C5.849 9.448 6.552 10.151 8.75 11.25L10.5 9.5L14 11Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          +91 99436 21234
        </a>
      </div>

      <p class="cs-copyright">© 2026 Ascent Master Chem. All rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Roboto:wght@300;400&display=swap');

.cs-page {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #030d1e;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}

.cs-bg {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 50%, rgba(1, 76, 168, 0.35) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0, 160, 220, 0.20) 0%, transparent 55%),
    radial-gradient(ellipse 50% 40% at 60% 80%, rgba(1, 76, 168, 0.18) 0%, transparent 50%);
  animation: bgPulse 8s ease-in-out infinite alternate;
  z-index: 0;
}

@keyframes bgPulse {
  from { opacity: 0.7; }
  to   { opacity: 1; }
}

.cs-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 0;
}

.cs-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
  max-width: 640px;
}

.cs-logo-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.cs-logo {
  height: 48px;
  width: auto;
  filter: brightness(0) invert(1);
}

.cs-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  background: rgba(1, 76, 168, 0.25);
  border: 1px solid rgba(1, 76, 168, 0.5);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7eb8ff;
}

.cs-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.cs-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #7eb8ff 50%, #014ca8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cs-tagline {
  font-size: 1.05rem;
  font-weight: 300;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  max-width: 440px;
}

.cs-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #014ca8, #00a0dc);
  border-radius: 2px;
}

.cs-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.cs-contact-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.4);
}

.cs-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.75rem;
  background: linear-gradient(135deg, #014ca8, #0066cc);
  color: #fff;
  text-decoration: none;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 24px rgba(1, 76, 168, 0.4);
}

.cs-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(1, 76, 168, 0.6);
}

.cs-copyright {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.25);
  margin-top: 1rem;
}
</style>
