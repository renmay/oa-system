/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const newsRouter = {
  path: '/news',
  component: Layout,
  redirect: '/news/list',
  name: 'news',
  meta: {
    title: '新闻管理',
    icon: 'table'
  },
  children: [
    {
      path: 'news-list',
      component: () => import('@/views/news/list'),
      name: 'newsList',
      meta: { title: '新闻' }
    },
    {
      path: 'news-manage',
      component: () => import('@/views/news/manage'),
      name: 'newsManage',
      meta: { title: '新闻管理' }
    }
  ]
}

export default newsRouter
