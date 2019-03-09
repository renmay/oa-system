/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const meetingRouter = {
  path: '/meeting',
  component: Layout,
  redirect: '/meeting/index',
  name: 'Meeting',
  meta: {
    title: '会议管理',
    icon: 'table'
  },
  children: [
    {
      path: 'my-meeting',
      component: () => import('@/views/meeting/my-meeting'),
      name: 'MyMeeting',
      meta: { title: '我的会议' }
    },
    {
      path: 'meeting',
      component: () => import('@/views/meeting/manage/index'), // Parent router-view
      name: 'meeting',
      meta: { title: '会议管理' },
      redirect: '/meeting/address/person',
      children: [
        {
          path: 'index',
          component: () => import('@/views/meeting/manage/index'),
          name: 'Index',
          meta: { title: '会议管理' }
        },
        {
          path: 'meeting-room',
          component: () => import('@/views/meeting/manage/meeting-room'),
          name: 'MeetingRoom',
          meta: { title: '会议室管理' }
        }
      ]
    }
  ]
}

export default meetingRouter
