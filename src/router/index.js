import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import ChapterOne from '@/components/Slide/ChapterOne/ChapterOne'

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
    }
  ]
})
