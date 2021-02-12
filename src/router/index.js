import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AppLogin from '../views/AppLogin.vue'
import AppRegister from '../views/AppRegister.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'Home',
    // component: Home,
    meta: { isAuthRequired: true },
    // beforeEnter: (to, from, next) => {
    //   if(!this.$store.getters.isAuthenticated)
    //   return redirect('/login')
    // }
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: AppLogin,
    meta: { isGuestRequired: true }
  },
  {
    path: '/register',
    name: 'AppRegister',
    component: AppRegister
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (this.$store.getters.isAuthenticated) {
    
//   } else {
    
//   }
// })

export default router
