/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const notifyRouter = {
  path: '/notify',
  component: Layout,
  redirect: '/notify/list',
  name: 'notify',
  meta: {
    title: '通知管理',
    icon: 'table'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/notify/list'),
      name: 'List',
      meta: { title: '通知' }
    },
    {
      path: 'notify-manage',
      component: () => import('@/views/notify/manage'),
      name: 'NotifyManage',
      meta: { title: '通知管理' }
    }
  ]
}

export default notifyRouter
