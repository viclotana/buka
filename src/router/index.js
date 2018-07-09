import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Router from 'vue-router'
import menu from '@/components/menu'
import records from '@/components/records'
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
      path: '/records',
      name: 'records',
      component: records
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
