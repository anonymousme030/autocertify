import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72069eae = () => interopDefault(import('../pages/connect/index.vue' /* webpackChunkName: "pages/connect/index" */))
const _06cf44d0 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _6ff24cac = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3a687496 = () => interopDefault(import('../pages/connect/_id.vue' /* webpackChunkName: "pages/connect/_id" */))
const _034192da = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/connect",
    component: _72069eae,
    name: "connect"
  }, {
    path: "/dashboard",
    component: _06cf44d0,
    name: "dashboard"
  }, {
    path: "/login",
    component: _6ff24cac,
    name: "login"
  }, {
    path: "/connect/:id",
    component: _3a687496,
    name: "connect-id"
  }, {
    path: "/",
    component: _034192da,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
