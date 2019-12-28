import Vue from 'vue'
import Router from 'vue-router'
import {routers} from './router.js'
Vue.use(Router)
const RouterConfig = {
  routes: routers
}
export const router = new Router(RouterConfig)
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to) => {
  // router.app.$store.commit('breadCrumbs_add', to.name)
})
