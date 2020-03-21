import { lazy } from 'react';

const config = [
  {
    path: '/login',
    name: '登录页',
    component: lazy(() => import('@pages/Login')),
  },
  {
    path: '/home',
    name: '主页',
    component: lazy(() => import('@pages/Home')),
  },
  {
    path: '/edit',
    name: '编辑页',
    component: lazy(() => import('@pages/edit')),
  },
  {
    path: '/NotFind',
    name: '404',
    component: lazy(() => import('@pages/NotFind')),
  },
  { path: '/', exact: true, redirect: '/login' },
  { path: '*', exact: true, redirect: '/NotFind' },
]

export default config;