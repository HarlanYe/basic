import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/Menu',
  component: Layout,
  redirect: '/Menu/flow',
  name: 'Menu',
  meta: {
    title: '流程',
    icon: 'i-heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: 'page',
      name: 'Flow1',
      component: () => import('@/views/multilevel_menu_example/page.vue'),
      meta: {
        title: '立项',
      },
      children: [
        {
          path: 'Before',
          name: 'multilevelMenuExample2-1',
          component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
          meta: {
            title: '前置',
          },
          children: [
            {
              path: 'Review',
              component: () => import('@/views/multilevel_menu_example/page.vue'),
              meta: {
                title: '内评',
              },
            },
            {
              path: 'ConflictOfInterest',
              component: () => import('@/views/multilevel_menu_example/page.vue'),
              meta: {
                title: '利益冲突',
              },
            },
            {
              path: 'page',
              component: () => import('@/views/multilevel_menu_example/page.vue'),
              meta: {
                title: '反洗钱',
              },
            },
          ],
        },
        {
          path: 'Submit',
          name: 'multilevelMenuExample2-1',
          component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
          meta: {
            title: '提交流程',
          },
          children: [
            {
              path: 'Submit1',
              component: () => import('@/views/multilevel_menu_example/page.vue'),
              meta: {
                title: '提交立项流程',
              },
            },
            {
              path: 'Submit2',
              component: () => import('@/views/multilevel_menu_example/page.vue'),
              meta: {
                title: '提交底稿',
              },
            },
          ],
        },
        {
          path: 'Feedback',
          name: 'multilevelMenuExample2-1',
          component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
          meta: {
            title: '反馈',
          },
          children: [
            {
              path: 'Feedback1',
              component: () => import('@/layouts/components/Content/content.vue'),
              meta: {
                title: '立项反馈回复',
              },
            },
          ],
        },
      ],
    },
    {
      path: 'Flow2',
      name: 'Flow2',
      redirect: '/multilevel_menu_example/level2/page',
      meta: {
        title: '导航2',
      },
      children: [
        {
          path: 'page',
          name: 'multilevelMenuExample2-1',
          component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
          meta: {
            title: '导航2-1',
          },
        },
        {
          path: 'level3',
          name: 'multilevelMenuExample2-2',
          redirect: '/multilevel_menu_example/level2/level3/page1',
          meta: {
            title: '导航2-2',
          },
          children: [
            {
              path: 'page1',
              name: 'multilevelMenuExample2-2-1',
              component: () => import('@/views/multilevel_menu_example/level2/level3/page1.vue'),
              meta: {
                title: '导航2-2-1',
              },
            },
            {
              path: 'page2',
              name: 'multilevelMenuExample2-2-2',
              component: () => import('@/views/multilevel_menu_example/level2/level3/page2.vue'),
              meta: {
                title: '导航2-2-2',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default routes
