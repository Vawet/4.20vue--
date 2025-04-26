import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/index.less"
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 这是在使用完整的引入的方法导入elementplus插件
import { createPinia } from "pinia"
import "@/api/mock.js"

import api from "@/api/mockData/api.js"
// 导入Mock数据
const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$api = api;
// 挂载到全局
app.use(ElementPlus)
app.use(pinia)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')