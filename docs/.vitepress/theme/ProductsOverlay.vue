<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()
const showProductsOverlay = ref(false)

const products = [
  {
    name: "Concrete Admixtures",
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
        description: 'Brick admixtures enhance strength, durability, water resistance, and overall quality.',
        image: "home/admixtures.jpeg",
        link: "bricks-admixtures.html"
      }
    ]
  }
]

function openProductsOverlay() {
  showProductsOverlay.value = true
  document.body.style.overflow = 'hidden'
}

function closeProductsOverlay() {
  showProductsOverlay.value = false
  document.body.style.overflow = ''
}

let closeTimer = null
let navLink = null
const isHoverDevice = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

function scheduleClose() {
  closeTimer = setTimeout(closeProductsOverlay, 120)
}
function cancelClose() {
  if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
}
function onNavMouseEnter() {
  cancelClose()
  openProductsOverlay()
}
function onNavMouseLeave() {
  scheduleClose()
}

const _savedOnBeforeRouteChange = router.onBeforeRouteChange
router.onBeforeRouteChange = (to) => {
  if (to && to.includes('/products')) {
    openProductsOverlay()
    return false
  }
  return _savedOnBeforeRouteChange ? _savedOnBeforeRouteChange(to) : undefined
}

onMounted(() => {
  navLink = document.querySelector('.VPNavBarMenuLink[href*="products"]')
  if (navLink && isHoverDevice()) {
    navLink.addEventListener('mouseenter', onNavMouseEnter)
    navLink.addEventListener('mouseleave', onNavMouseLeave)
  }
})

onUnmounted(() => {
  router.onBeforeRouteChange = _savedOnBeforeRouteChange
  if (navLink) {
    navLink.removeEventListener('mouseenter', onNavMouseEnter)
    navLink.removeEventListener('mouseleave', onNavMouseLeave)
  }
  cancelClose()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="products-overlay">
      <div
        v-if="showProductsOverlay"
        class="products-overlay-wrapper"
      >
        <div class="products-overlay-backdrop" @click="closeProductsOverlay"></div>
        <div class="products-overlay-panel" @mouseleave="scheduleClose" @mouseenter="cancelClose">
          <div class="products-overlay-grid">
            <a
              v-for="item in products.flatMap(p => p.items)"
              :key="item.name"
              :href="item.link"
              class="overlay-product-card"
              :style="{ backgroundImage: 'url(' + item.image + ')' }"
              @click="closeProductsOverlay"
            >
              <div class="overlay-product-content">
                <p>{{ item.description }}</p>
                <h4>{{ item.name }}</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.products-overlay-wrapper {
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  right: 0;
  z-index: 9999;
}

.products-overlay-backdrop {
  position: fixed;
  inset: 0;
  top: var(--vp-nav-height);
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  z-index: -1;
}

.products-overlay-panel {
  width: 100%;
  background: var(--vp-c-bg, #ffffff);
  border-bottom: 1px solid var(--vp-c-divider, #e5e7eb);
  box-shadow: 0 16px 48px -8px rgba(0, 0, 0, 0.2);
  padding: 32px 48px 40px;
  overflow-y: auto;
  max-height: calc(100vh - var(--vp-nav-height));
}

.products-overlay-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.overlay-product-card {
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-height: 280px;
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.overlay-product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.overlay-product-content {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column-reverse;
  padding: 24px;
  transition: background 0.4s ease;
}

.overlay-product-card:hover .overlay-product-content {
  background: rgba(0, 0, 0, 0.5);
}

.overlay-product-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0 0 6px;
}

.overlay-product-content p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  margin: 0 0 12px;
}

.products-overlay-enter-active {
  transition: opacity 0.25s ease;
}
.products-overlay-leave-active {
  transition: opacity 0.2s ease;
}
.products-overlay-enter-active .products-overlay-panel {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.products-overlay-leave-active .products-overlay-panel {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.products-overlay-enter-from,
.products-overlay-leave-to {
  opacity: 0;
}
.products-overlay-enter-from .products-overlay-panel,
.products-overlay-leave-to .products-overlay-panel {
  transform: translateY(-12px);
  opacity: 0;
}
</style>
