import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import tasksRouter from "@/modules/tasks/router";
import authRouter from "@/modules/auth/router";
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      ...authRouter
    },
    {
      path: '/tasks',
      beforeEnter: [isAuthenticatedGuard],
      ...tasksRouter
    }
  ]
})

export default router
