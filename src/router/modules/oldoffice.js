/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const tableRouter = {
  path: '/office',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Office',
  meta: {
    title: '个人办公',
    icon: 'table'
  },
  children: [
    {
      path: 'message',
      component: () => import('@/views/office/message'),
      name: 'message',
      meta: { title: 'message' }
    },
    // {
    //   path: 'email',
    //   component: () => import('@/views/office/email/index'),
    //   name: 'email',
    //   meta: { title: 'email' }
    // },
    {
      path: 'address',
      component: () => import('@/views/office/address'),
      name: 'address',
      meta: { title: 'address' }
    }
  ]
}
export default tableRouter
