import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import News from '@/components/News'
import Article from '@/components/Article'
import About from '@/components/About'
import Apply from '@/components/Apply'
import Contact from '@/components/Contact'
import State from '@/components/State'
Vue.use(Router)

export default new Router({
  mode: 'history',   //当使用 history 模式时，URL 就像正常的 url
  routes: [
    {
      path:'/',
      name:'Index',
      component:Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    },
    {
      path: '/state',
      name: 'state',
      component: State
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/article/:newsID(\\d+)',
      name: 'article',
      component: Article
    },
    {
      path: '*',              //这里的path:'*'就是找不到页面时的配置
      component: Error,
      name: '找不到页面'
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
