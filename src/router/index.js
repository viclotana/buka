import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Router from 'vue-router'
import menu from '@/components/menu'
import reservations from '@/components/reservations'
import contact from '@/components/contact'
import faqs from '@/components/faqs'

Vue.use(VueMaterial)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: reservations
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: faqs
    }
  ]
})
