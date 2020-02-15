<template>
  <div>
    <Navbar />
    <nuxt class="main" />
  </div>
</template>

<script>
import { Navbar } from '@/components'
export default {
  components: { Navbar },
  transition: 'fade'
}
</script>

<style>
html,
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
}

.main {
  padding: 5rem 10rem;
}

.CodeMirror {
  font-family: 'Menlo', monospace !important;
  font-size: 0.85em !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
