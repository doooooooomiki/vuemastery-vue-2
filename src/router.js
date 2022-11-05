import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      props: true
    },
  ]
})