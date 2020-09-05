import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/pages/LogIn/LogIn'
import Main from '@/pages/Main/Main'
import Poster from '@/pages/Poster/Poster'
import Course from '@/pages/Course/Course'
import ArrangeEdit from '@/pages/Arrange/Edit'
import TeacherEdit from '@/pages/Teacher/Edit'
import HoleCheck from '@/pages/Hole/Check'
import ReserveCheck from '@/pages/Reserve/Check'
import EvaluateUpload from '@/pages/Evaluate/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: LogIn
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      redirect: '/Main/Poster',
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: 'Poster',
          name: 'Poster',
          component: Poster
          // meta: {
          //   keepAlive: true
          // }
        },
        {
          path: 'Course',
          name: 'Course',
          component: Course
        },
        {
          path: 'ArrangeEdit',
          name: 'ArrangeEdit',
          component: ArrangeEdit
        },
        {
          path: 'TeacherEdit',
          name: 'TeacherEdit',
          component: TeacherEdit
        },
        {
          path: 'HoleCheck',
          name: 'HoleCheck',
          component: HoleCheck
        },
        {
          path: 'ReserveCheck',
          name: 'ReserveCheck',
          component: ReserveCheck
        },
        {
          path: 'EvaluateUpload',
          name: 'EvaluateUpload',
          component: EvaluateUpload
        }
        // {
        //   path: '',
        //   name: '',
        //   component: null
        // }
      ]
    }
  ]
})
