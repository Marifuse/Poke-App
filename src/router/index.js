import Vue from 'vue'
import VueRouter from 'vue-router'
import Firebase from 'firebase'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    alias: ['/home', '/casa'],
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    alias: ['/autenticacion', '/usuario'],
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: () => import(/* webpackChunkName: "Apod" */ '../views/Pokedex.vue'),
    alias: ['/pokemon', '/buscar'],
    meta: {
      requireLogin: true // El meta tiene relación con la función guardia (se representa con una respuesta booleana)
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.requireLogin)
  if(!user && authRequired) {
    next('login') 
  } else {
    next()
  }
})

export default router
