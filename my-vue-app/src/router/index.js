import { createRouter, createWebHistory } from 'vue-router'
// 制定路由规则
const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/Main.vue'),
        redirect: "/home",
        // 这个重定向不写的话，页面中的Home.vue就不会渲染
        //这是重定向，所以我现在无论如何都是Main.vue的界面
        // 但是重定向是会保留Main.vue的界面，然后在其中渲染Home.vue的界面
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/Home.vue')
                // 表示直接进入Home页面
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;