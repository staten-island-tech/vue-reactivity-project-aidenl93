import { createRouter, createWebHistory } from 'vue-router'
import app from '../views/App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'app', component: app }],
})

export default router
