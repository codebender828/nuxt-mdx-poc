import Vue from 'vue'
import VueLive from 'vue-live'

Vue.use(VueLive)

Vue.component('Wrapper', {
  render (h) {
    return h('div', this.$slots.default)
  }
})

Vue.component('InlineCode', {
  render (h) {
    return h('code', this.$slots.default)
  }
})
