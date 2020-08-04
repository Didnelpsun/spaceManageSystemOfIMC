import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '../pages/LogIn/LogIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogIn
    }
  ]
})
