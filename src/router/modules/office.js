/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const officeRouter = {
  path: '/office',
  component: Layout,
  redirect: '/office/message',
  name: 'Office',
  meta: {
    title: '个人办公',
    icon: 'table'
  },
  children: [
    {
      path: 'message',
      component: () => import('@/views/office/message'),
      name: 'Message',
      meta: { title: '消息' }
    },
    {
      path: 'schedule',
      component: () => import('@/views/office/schedule'),
      name: 'Schedule',
      meta: { title: '日程安排' }
    },
    {
      path: 'communication',
      component: () => import('@/views/office/communication'),
      name: 'Communication',
      meta: { title: '即时沟通' }
    },
    {
      path: 'email',
      component: () => import('@/views/office/email/index'), // Parent router-view
      name: 'Email',
      meta: { title: '内部邮件' },
      redirect: '/office/email',
      children: [
        {
          path: 'write',
          component: () => import('@/views/office/email/write'),
          name: 'write',
          meta: { title: '写信' }
        },
        {
          path: 'inbox',
          component: () => import('@/views/office/email/inbox'),
          name: 'Inbox',
          meta: { title: '收件箱' }
        },
        {
          path: 'outbox',
          component: () => import('@/views/office/email/outbox'),
          name: 'Outbox',
          meta: { title: '发件箱' }
        },
        {
          path: 'drafts',
          component: () => import('@/views/office/email/drafts'),
          name: 'Drafts',
          meta: { title: '草稿箱' }
        }
      ]
    },
    {
      path: 'address',
      component: () => import('@/views/office/address/index'), // Parent router-view
      name: 'address',
      meta: { title: '通讯录' },
      redirect: '/office/address/person',
      children: [
        {
          path: 'person',
          component: () => import('@/views/office/address/person'),
          name: 'Person',
          meta: { title: '个人通讯录' }
        },
        {
          path: 'company',
          component: () => import('@/views/office/address/company'),
          name: 'Company',
          meta: { title: '公司通讯录' }
        }
      ]
    },
    {
      path: 'setting',
      component: () => import('@/views/office/setting/index'), // Parent router-view
      name: 'Setting',
      meta: { title: '个人设置' },
      redirect: '/office/setting/person',
      children: [
        {
          path: 'person',
          component: () => import('@/views/office/setting/person'),
          name: 'Person',
          meta: { title: '个人信息' }
        },
        {
          path: 'edit',
          component: () => import('@/views/office/setting/edit'),
          name: 'Edit',
          meta: { title: '修改密码' }
        }
      ]
    }
  ]
}
export default officeRouter
