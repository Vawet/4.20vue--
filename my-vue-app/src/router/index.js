import { createRouter, createWebHistory } from 'vue-router'
// 制定路由规则
const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/Main.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;