<template>
    <el-aside :width="width">
        <!-- 宽度会根据isCollapse进行变化 -->
        <el-menu background-color="#545c64" text-color="#fff" :collapse="isCollapse" :collapse-transition="false">
            <!-- 为什么这里的样式要加冒号呢？然后transition为false就可以让过渡的过程消失化 -->
            <h3 v-show="!isCollapse">通用后台管理系统</h3>
            <h3 v-show="isCollapse">后台</h3>
            <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path">
                <!-- 加了:index点击就会字体变蓝 -->
                <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu v-for="item in hasChildren" :index="item.path" :key="item.path">
                <template #title>
                    <component class="icons" :is="item.icon"></component>
                    <span>{{ item.label }}</span>
                </template>
                <!-- #title表示插槽 -->
                <!-- 先渲染有子目录的菜单 -->
                <el-menu-item-group>
                    <el-menu-item v-for="(subItem, subIndex) in item.children" :index="subItem.path"
                        :key="subItem.path">
                        <component class="icons" :is="subItem.icon"></component>
                        <span>{{ subItem.label }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>



<script setup>
import { ref, computed } from 'vue'
import {useAllDataStore} from '@/stores'
const list = ref([
    {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'house',
        url: 'Home'
    },
    {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon: 'video-play',
        url: 'Mall'
    },
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'user',
        url: 'User'
    },
    {
        path: 'other',
        label: '其他',
        icon: 'location',
        children: [
            {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
                url: 'Page1'
            },
            {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
                url: 'Page2'
            }
        ]
    }
])
// 如果没有children 那么就是undefined
const noChildren = computed(() => list.value.filter(item => !item.children))
const hasChildren = computed(() => list.value.filter(item => item.children))
const store=useAllDataStore()
const isCollapse=computed(()=>store.state.isCollapse)
const width=computed(()=>store.state.isCollapse?'64px':'180px');
</script>


<style lang="less" scoped>
// 所有小图标的样式
.icons {
    width: 18px;
    height: 18px;
    margin-right: 5px;
}

.el-menu {
    border-right: none;

    h3 {
        color: #fff;
        text-align: center; // 居中
        line-height: 48px;
        font-size: 16px;
        font-weight: normal;
    }
}

.el-aside {
    height: 100%;
    background-color: #545c64;
}
</style>