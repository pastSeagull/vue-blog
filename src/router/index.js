import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content/Content'
import Aricle from '@/components/article/Article'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Content
    },
    {
      path: '/note/',
      name: 'note',
      component: Aricle,
      children: [
        {
          path: '/note/',
          name: 'noteSom',
          component: r => require.ensure([], () => r(require('../docs/note/note.md')))
        }
      ]
    },
    {
      path: '/blogs/',
      name: 'blogs',
      component: Aricle,
      children: [
        {
          path: '/blogs/',
          name: 'blogsOne',
          component: r => require.ensure([], () => r(require('../docs/blogs/blogs.md')))
        },
        {
          path: '/blogTest/',
          name: 'blogTest',
          component: r => require.ensure([], () => r(require('../docs/blogs/blogTest.md')))
        }
      ]
    },
    {
      path: '/essay/',
      name: 'essay',
      component: Aricle,
      children: [
        {
          path: '/Iessay/',
          name: 'Iessay',
          component: r => require.ensure([], () => r(require('../docs/essay/essay.md')))
        },
        {
          path: '/essayTest/',
          name: 'essayTest',
          component: r => require.ensure([], () => r(require('../docs/essay/essayTest.md')))
        }
      ]
    }
  ]
})
