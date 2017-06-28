import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import ChapterOne from '@/components/Slide/ChapterOne/ChapterOne'
import ChapterTwo from '@/components/Slide/ChapterTwo/ChapterTwo'

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
    }
  ]
})
