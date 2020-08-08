import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '../pages/LogIn/LogIn'
import Main from '../pages/Main/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LogIn
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
})
