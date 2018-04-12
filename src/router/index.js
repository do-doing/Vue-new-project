import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import News from '@/components/News'
import Article from '@/components/Article'
import About from '@/components/About'
import Apply from '@/components/Apply'
import Contact from '@/components/Contact'
import State from '@/components/State'
import Error404 from '@/components/Error404'
Vue.use(Router)

const router = new Router({
  mode: 'history',   //当使用 history 模式时，URL 就像正常的 url
  routes: [
    {
      path:'/',
      name:'Index',
      meta: {
        title: '首页'
      },
      component:Main
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '協會簡介'
      },
      component: About
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: '行業動態'
      },
      component: News
    },
    {
      path: '/apply',
      name: 'apply',
      meta: {
        title: '入會申請'
      },
      component: Apply
    },
    {
      path: '/state',
      name: 'state',
      meta: {
        title: '協會動態'
      },
      component: State
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: '聯繫我們'
      },
      component: Contact
    },
    {
      path: '/article/:newsid(\\d+)',
      name: 'article',
      component: Article
    },
    {
      path: '*',              //这里的path:'*'就是找不到页面时的配置
      component: Error404,
      name: '找不到页面',
      meta: {
        title: '找不到页面'
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }   //保证每次跳转的滚动条都从0开始
  },
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
  } else{
    document.title = to.query.title
  }
  next()
})
export default router