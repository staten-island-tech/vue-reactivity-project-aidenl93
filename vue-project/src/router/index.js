import { createRouter, createWebHistory } from 'vue-router'
import shoes from '@/components/shoes.vue'
import App from '../App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'app', component: App }],
})

export default router
