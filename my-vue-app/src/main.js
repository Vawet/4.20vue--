import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/index.less"
// 这是样式文件 index.less
import router from './router'
// 自动找到router文件下面的index.js文件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 这是在使用完整的引入的方法导入elementplus插件
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router).mount('#app')
// 路径有了 组件有了 
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}