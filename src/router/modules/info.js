/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const infoRouter = {
  path: '/info',
  component: Layout,
  redirect: '/info/list',
  name: 'info',
  meta: {
    title: '信息管理',
    icon: 'table'
  },
  children: [
    {
      path: 'institution-list',
      component: () => import('@/views/info/institution/list'),
      name: 'InstitutionList',
      meta: { title: '规章制度' }
    },
    {
      path: 'institution-manage',
      component: () => import('@/views/info/institution/manage'),
      name: 'InstitutionManage',
      meta: { title: '规章制度管理' }
    },
    {
      path: 'laws-list',
      component: () => import('@/views/info/laws/list'),
      name: 'LawsList',
      meta: { title: '法律法规' }
    },
    {
      path: 'laws-manage',
      component: () => import('@/views/info/laws/manage'),
      name: 'LawsManage',
      meta: { title: '法律法规管理' }
    }
  ]
}

export default infoRouter
