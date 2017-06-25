import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import feathers from '../feathers'

Vue.use(Router)

// Include it as a CommonJS module
const vueFeathers = require('vue-feathers')
// And plug it in
Vue.use(vueFeathers, feathers)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
