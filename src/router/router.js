export const login = {
  title: '登陆',
  path: '/login',
  name: 'login',
  component: () => import('@/view/login/login.vue')
}
export const login2 = {
  title: '登陆',
  path: '/',
  name: 'login',
  component: () => import('@/view/login/login.vue')
}
export const index = {
  title: '首页',
  path: '/index',
  name: 'index',
  component: () => import('@/view/index/index.vue'),
  children: [
    {
      title: '首页',
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/home.vue')
    },
    {
      title: '菜单管理',
      path: '/menuManage',
      name: 'menuManage',
      component: () => import('@/view/menuManage/menuManage.vue')
    }
  ]
}
export const appRouter = [] // 功能菜单页
export const routers = [
  ...appRouter,
  login,
  login2,
  index
]
