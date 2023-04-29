import { createRouter, createWebHistory } from 'vue-router'
const MainPage = () => import('@comp/HelloWorld.vue')
const FirstPage = () => import('@comp/HelloWorld.vue')

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path:'/helloWorld',
        component: FirstPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active', // 현재 메뉴 표시 css class
    // linkExactActiveClass: 'active',
    routes,
  
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })

export default router