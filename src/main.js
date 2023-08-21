import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Components

import HomePage from '@/views/HomePage'
import AboutPage from '@/views/AboutPage'
import TeamPage from '@/views/TeamPage'
import PricePage from "@/views/PricePage";

Vue.config.productionTip = false

// Usage

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapIconsPlugin);

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/team',
      component: TeamPage
    },
    {
      path: '/price-list',
      component: PricePage
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


