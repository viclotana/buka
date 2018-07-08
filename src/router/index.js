import Vue from 'vue'
import Router from 'vue-router'
import navbar from '@/components/navbar'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navbar',
      component: navbar
    }
  ]
})
