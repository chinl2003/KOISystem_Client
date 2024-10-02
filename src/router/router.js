import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CustomerPage from '@/pages/CustomerPage.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/customer',
    name: 'CustomerPage',
    component: CustomerPage
  }
]

const router = createRouter({
  history: createWebHistory('/'), 
  routes
})

export default router