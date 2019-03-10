/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const voteRouter = {
  path: '/vote',
  component: Layout,
  redirect: '/vote/list',
  name: 'vote',
  meta: {
    title: '投票管理',
    icon: 'table'
  },
  children: [
    {
      path: 'vote-list',
      component: () => import('@/views/vote/list'),
      name: 'VoteList',
      meta: { title: '投票' }
    },
    {
      path: 'vote-manage',
      component: () => import('@/views/vote/manage'),
      name: 'VoteManage',
      meta: { title: '投票管理' }
    }
  ]
}

export default voteRouter
