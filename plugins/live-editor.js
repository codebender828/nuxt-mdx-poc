import Vue from 'vue'
import VueLive from 'vue-live'
import { LiveEditor } from '@/components'

Vue.use(VueLive)

Vue.component('LiveEditor', LiveEditor)

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
