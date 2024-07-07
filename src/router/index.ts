import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import tasksRouter from "@/modules/tasks/router";
import authRouter from "@/modules/auth/router";
// import isAuthenticatedGuard from '@/modules/auth/router/auth-guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/daybook',
    //   beforeEnter: [isAuthenticatedGuard],
    //   ...tasksRouter
    // },
    // {
    //   path: '/',
    //   ...authRouter
    // },
    {
      path: '/tasks',
      ...tasksRouter
    }
  ]
})

export default router
