import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Llama from '../views/Llama.vue'
import Alpaca from '../views/Alpaca.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/llama',
    name: 'Llama',
    component: Llama
  },
  {
    path: '/alpaca',
    name: 'Alpaca',
    component: Alpaca
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
