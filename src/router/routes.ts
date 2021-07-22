import { RouteRecordRaw } from "vue-router"
import Layout from '@/layout/index.vue'
import NotFound from '@/views/not-found.vue'
import Login from '@/views/login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    meta: {
      title: 'slideBarHome',
      icon: 'icon-dashboard'
    },
    children: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/guid',
    component: Layout,
    redirect: '/guid/index',
    meta: {
      title: 'slideBarGuid',
      icon: 'icon-document'
    },
    children: [
      {
        name: 'Guid',
        path: '/guid/index',
        component: () => import('@/views/guid/index.vue')
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    meta: {
      title: 'slideBarAbout',
      icon: 'icon-document'
    },
    children: [
      {
        name: 'About',
        path: '/about/index',
        component: () => import('@/views/about/index.vue')
      }
    ]
  },
  {
    path: '/icons',
    component: Layout,
    redirect: '/icons/index',
    meta: {
      title: 'slideBarSvgIcon',
      icon: 'icon-component'
    },
    children: [
      {
        name: 'MyComponent',
        path: '/icons/index',
        component: () => import('@/views/component/index.vue')
      }
    ]
  },
  {
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/line-charts',
    meta: {
      title: 'slideBarEcharts',
      icon: 'icon-charts'
    },
    children: [
      {
        name: 'Echarts',
        path: '/echarts/index',
        component: () => import('@/views/echarts/index.vue'),
        meta: {
          title: 'slideBarEchartsSummary',
          icon: 'icon-charts'
        }
      },
      {
        name: 'LineChart',
        path: '/echarts/linne-charts',
        component: () => import('@/views/echarts/line-charts.vue'),
        meta: {
          title: 'slideBarEchartsLine',
          icon: 'icon-line-charts'
        }
      },
      {
        name: 'BarChart',
        path: '/echarts/bar-charts',
        component: () => import('@/views/echarts/bar-charts.vue'),
        meta: {
          title: 'slideBarEchartsBar',
          icon: 'icon-bar-charts'
        }
      },
      {
        name: 'PieChart',
        path: '/echarts/pie-charts',
        component: () => import('@/views/echarts/pie-charts.vue'),
        meta: {
          title: 'slideBarEchartsPie',
          icon: 'icon-pie-charts'
        }
      }
    ]
  },
  {
    path: '/nested',
    redirect: '/nested/menu1',
    component: Layout,
    meta: {
      title: 'slideBarNested',
      icon: 'icon-nested'
    },
    children: [
      {
        path: '/nested/menu1',
        component: () => import('@/views/nested/menu1.vue'),
        meta: {
          title: 'slideBarNested1',
          icon: 'icon-nested',
          alwaysShow: true
        },
        children: [
          {
            path: '/nested/menu1-1',
            component: () => import('@/views/nested/menu1-1.vue'),
            meta: {
              title: 'slideBarNested11',
              icon: 'icon-nested'
            },
          },
          {
            path: '/nested/menu1-2',
            component: () => import('@/views/nested/menu1-2.vue'),
            meta: {
              title: 'slideBarNested12',
              icon: 'icon-nested'
            },
          }
        ]
      },
      {
        path: '/nested/menu2',
        component: () => import('@/views/nested/menu2.vue'),
        meta: {
          title: 'slideBarNested2',
          icon: 'icon-nested'
        }
      }
    ]
  },
  {
    path: '/error',
    redirect: '/error/404',
    component: Layout,
    meta: {
      title: 'slideBarError',
      icon: 'icon-error',
      alwaysShow: true
    },
    children: [
      {
        path: '/error/404',
        component: () => import('@/views/errors/not-found.vue'),
        meta: {
          icon: 'icon-404',
          title: 'slideBarNotFound',
        }
      }
    ]
  },
  {
    path: '/international',
    component: Layout,
    redirect: '/international/index',
    meta: {
      title: 'slideBarInternational',
      icon: 'icon-international'
    },
    children: [
      {
        path: '/international/index',
        component: () => import('@/views/international/index.vue')
      }
    ]
  },
  {
    path: '/mock',
    component: Layout,
    redirect: '/mock/index',
    meta: {
      title: 'slideBarMock',
      icon: 'icon-mock'
    },
    children: [
      {
        path: '/mock/index',
        component: () => import('@/views/mock/index.vue')
      }
    ]
  },
  {
    path: '/theme',
    redirect: '/theme/index',
    component: Layout,
    meta: {
      title: 'slideBarTheme',
      icon: 'icon-theme'
    },
    children: [
      {
        path: '/theme/index',
        component: () => import('@/views/theme/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

export default routes