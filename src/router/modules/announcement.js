/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const announcementRouter = {
  path: '/announcement',
  component: Layout,
  redirect: '/announcement/list',
  name: 'announcement',
  meta: {
    title: '公告管理',
    icon: 'table'
  },
  children: [
    {
      path: 'system-list',
      component: () => import('@/views/announcement/system/list'),
      name: 'List',
      meta: { title: '系统公告' }
    },
    {
      path: 'system-manage',
      component: () => import('@/views/announcement/system/manage'),
      name: 'SystemManage',
      meta: { title: '系统公告管理' }
    },
    {
      path: 'department-list',
      component: () => import('@/views/announcement/department/list'),
      name: 'List',
      meta: { title: '部门公告' }
    },
    {
      path: 'department-manage',
      component: () => import('@/views/announcement/department/manage'),
      name: 'DepartmentManage',
      meta: { title: '部门公告管理' }
    }
  ]
}

export default announcementRouter
