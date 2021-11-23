import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Bicicletaria from '../components/Bicicletaria'
import Modelos from '../components/Modelos'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Bicicletaria',
    component: Bicicletaria
    
  },
  {
    path: '/Modelos',
    component: Modelos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
