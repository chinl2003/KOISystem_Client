import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CustomerPage from '@/pages/CustomerPage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import ListCompetitionPage from '@/pages/ListCompetitionPage.vue'

import CreateCompetition from '@/modal/CreateCompetition.vue'
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
    path: '/list-competition',
    name: 'ListCompetitionPage',
    component: ListCompetitionPage
  },
  {
    path: '/create-competition',
    name: 'CreateCompetition',
    component: CreateCompetition
  }
]

const router = createRouter({
  history: createWebHistory('/'), 
  routes
})

export default router