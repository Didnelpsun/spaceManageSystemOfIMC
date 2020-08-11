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
      redirect: '/Main/PosterHomepage',
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: 'PosterHomepage',
          name: 'PosterHomePage',
          component: PosterHomePage
          // meta: {
          //   keepAlive: true
          // }
        },
        {
          path: 'PosterHole',
          name: 'PosterHole',
          component: PosterHole
        },
        {
          path: 'IntroductPlatform',
          name: 'IntroductPlatform',
          component: IntroductPlatform
        },
        {
          path: 'CourseEdit',
          name: 'CourseEdit',
          component: CourseEdit
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
