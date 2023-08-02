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
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts/PostsView.vue'),
      children: [
        {
          path: ':id',
          name: 'post-detal',
          component: () => import('../views/Posts/PostDetailView.vue')
        }
      ]
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/Todos/TodosView.vue'),
      children: [
        {
          path: ':id',
          name: 'post-detal',
          component: () => import('../views/Todos/TodoDetailView.vue')
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
