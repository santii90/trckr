import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import feathers from '../services/feathers'

Vue.use(Router)

// Include it as a CommonJS module
const vueFeathers = require('vue-feathers')
// And plug it in
Vue.use(vueFeathers, feathers)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
