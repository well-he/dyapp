import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [{
      path: "/index",
      name: "Index",
      component: () => import('../views/index/Index')
    },
    {
      path: "/follow",
      name: "Follow",
      component: () => import('../views/follow/Follow')
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router