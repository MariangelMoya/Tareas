import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
      },
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      meta: {
      },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/board',
      name: 'board',
      meta: {
      },
      component: () => import('../views/Board.vue')
    }
  ]
})

export default router
