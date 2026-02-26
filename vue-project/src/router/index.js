import { createRouter, createWebHistory } from 'vue-router'
import shoes from '@/components/shoes.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'shoes', component: shoes }],
})

export default router
