import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/dashboard'
import CRUD from '../views/crud'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/crud',
      name: 'crud',
      component: CRUD
    }
  ]
})
