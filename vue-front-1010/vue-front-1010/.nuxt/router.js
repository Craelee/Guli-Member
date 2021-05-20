import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bbd07a6 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages_course_index" */))
const _5e6cdc38 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _1c8031a4 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _76703e1e = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages_teacher_index" */))
const _1e14bb8e = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages_course__id" */))
const _19cbcce8 = () => interopDefault(import('..\\pages\\order\\_oid.vue' /* webpackChunkName: "pages_order__oid" */))
const _2c548a7a = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages_pay__pid" */))
const _6adca118 = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages_player__vid" */))
const _2be928ce = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages_teacher__id" */))
const _d6758dbe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _1bbd07a6,
    name: "course"
  }, {
    path: "/login",
    component: _5e6cdc38,
    name: "login"
  }, {
    path: "/register",
    component: _1c8031a4,
    name: "register"
  }, {
    path: "/teacher",
    component: _76703e1e,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _1e14bb8e,
    name: "course-id"
  }, {
    path: "/order/:oid?",
    component: _19cbcce8,
    name: "order-oid"
  }, {
    path: "/pay/:pid?",
    component: _2c548a7a,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _6adca118,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _2be928ce,
    name: "teacher-id"
  }, {
    path: "/",
    component: _d6758dbe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
