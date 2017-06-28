import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import ChapterOne from '@/components/Slide/ChapterOne/ChapterOne'
import Ch1S2 from '@/components/Slide/ChapterOne/2/Slide'

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
      path: '/ChapterOne/2',
      name: 'ChapterOneSTwo',
      component: Ch1S2
    }
  ]
})
