import Vue from 'vue'
import Router from 'vue-router'

import Index from './docs/index.vue'
import Test from './docs/test.mdx'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Index
      },
      {
        path: '/test',
        component: Test
      }
    ]
  })
}
