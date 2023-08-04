import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/Counter/Counter.vue'),
      children: [
        {
          path: ':id',
          name: 'post-detal',
          component: () => import('../views/Counter/PostDetailView.vue')
        }
      ]
    },
    {
      path: '/stopwatch',
      name: 'stopwatch',
      component: () => import('../views/Stopwatch/Stopwatch.vue'),
      children: [
        {
          path: ':id',
          name: 'post-detal',
          component: () => import('../views/Stopwatch/TodoDetailView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
