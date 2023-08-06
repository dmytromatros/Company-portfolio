import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Components

import HomePage from '@/views/HomePage'
import WorksPage from '@/views/WorksPage'

Vue.config.productionTip = false

// Usage

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes: [
    {
      path: '',
      component: HomePage
    },
    {
      path: '/about',
      component: WorksPage
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


