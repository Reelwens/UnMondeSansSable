import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import ChapterOne from '@/components/Slide/ChapterOne/ChapterOne'
import ChapterTwo from '@/components/Slide/ChapterTwo/ChapterTwo'
import ChapterThree from '@/components/Slide/ChapterThree/ChapterThree'
import ChapterFour from '@/components/Slide/ChapterFour/ChapterFour'
import ChapterFive from '@/components/Slide/ChapterFive/ChapterFive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ChapterOne',
      name: 'ChapterOne',
      component: ChapterOne
    },
    {
      path: '/ChapterTwo',
      name: 'ChapterTwo',
      component: ChapterTwo
    },
    {
      path: '/ChapterThree',
      name: 'ChapterThree',
      component: ChapterThree
    },
    {
      path: '/ChapterFour',
      name: 'ChapterFour',
      component: ChapterFour
    },
    {
      path: '/ChapterFive',
      name: 'ChapterFive',
      component: ChapterFive
    }
  ]
})
