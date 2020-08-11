import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/pages/LogIn/LogIn'
import Main from '@/pages/Main/Main'
import PosterHomePage from '@/pages/Poster/HomePage'
import PosterHole from '@/pages/Poster/Hole'
import IntroductPlatform from '@/pages/Introduct/Platform'
import CourseEdit from '@/pages/Course/Edit'
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
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: '/Poster/Homepage',
          name: 'PosterHomePage',
          component: PosterHomePage
        },
        {
          path: '/Poster/Hole',
          name: 'PosterHole',
          component: PosterHole
        },
        {
          path: '/Introduct/Platform',
          name: 'IntroductPlatform',
          component: IntroductPlatform
        },
        {
          path: '/Course/Edit',
          name: 'CourseEdit',
          component: CourseEdit
        },
        {
          path: '/Arrange/Edit',
          name: 'ArrangeEdit',
          component: ArrangeEdit
        },
        {
          path: '/Teacher/Edit',
          name: 'TeacherEdit',
          component: TeacherEdit
        },
        {
          path: '/Hole/Check',
          name: 'HoleCheck',
          component: HoleCheck
        },
        {
          path: '/Reserve/Check',
          name: 'ReserveCheck',
          component: ReserveCheck
        },
        {
          path: '/Evaluate/Upload',
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
