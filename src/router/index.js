import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Ch1S1 from '@/components/Slide/ChapterOne/1/Slide'
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
      path: '/ChapterOne/1',
      name: 'ChapterOneSOne',
      component: Ch1S1
    },
    {
      path: '/ChapterOne/2',
      name: 'ChapterOneSTwo',
      component: Ch1S2
    }
  ]
})
