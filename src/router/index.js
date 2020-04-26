import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: 'index'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
        path: "/index",
        name: "Index",
        component: () => import('../views/index/Index'),
        children: [{
          path: "/index",
          name: "Index",
          component: () => import('../components/index/VideoList'),
        }]
      },
      {
        path: "/follow",
        name: "Follow",
        component: () => import('../views/follow/Follow')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router