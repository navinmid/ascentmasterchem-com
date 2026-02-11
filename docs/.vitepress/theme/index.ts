import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import { onMounted, onUnmounted } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h('div', { 
        class: 'nav-phone',
        innerHTML: '<a href="tel:+919943621234" class="nav-phone-link"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V13.5C14 14.328 13.328 15 12.5 15C6.159 15 1 9.841 1 3.5C1 2.672 1.672 2 2.5 2H5L6.5 5.5L4.75 7.25C5.849 9.448 6.552 10.151 8.75 11.25L10.5 9.5L14 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="nav-phone-number">+91 99436 21234</span></a>'
      })
    })
  },
  setup() {
    onMounted(() => {
      const handleScroll = () => {
        const html = document.documentElement
        if (window.scrollY > 50) {
          html.classList.remove('top')
        } else {
          html.classList.add('top')
        }
      }
      
      // Set initial state
      handleScroll()
      
      // Listen for scroll events
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
    })
  }
}
