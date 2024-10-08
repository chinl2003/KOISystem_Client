import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CustomerPage from '@/pages/CustomerPage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import RegisterKoiFishPage from '@/pages/RegisterKoiFishPage.vue'
import ListKoiFishCustomerPage from '@/pages/ListKoiFishCustomerPage.vue'
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
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/register-koi-fish',
    name: 'RegisterKoiFishPage',
    component: RegisterKoiFishPage
  },
  {
    path: '/list-koi-fish',
    name: 'ListKoiFishCustomerPage',
    component: ListKoiFishCustomerPage
  }
]

const router = createRouter({
  history: createWebHistory('/'), 
  routes
})

export default router