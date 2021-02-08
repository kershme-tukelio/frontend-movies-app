import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppLogin from '../views/AppLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'Home',
    component: Home,
    meta: { isAuthRequired: true }
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: AppLogin,
    meta: { isGuestRequired: true }
  }
];

function authGuard(to, from, next) {
  if (localStorage.getItem('token')) {
    next()
  } else {
    next('/')
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (this.$router.meta.isAuthRequired) {
    return authGuard(to, from, next)
  } else {
    return 
  }
})

export default router
