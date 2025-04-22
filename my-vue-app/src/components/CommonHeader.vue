<template>
    <div class="header">
        <div class="l-content">
            <el-button size="small">
                <component class="icons" :is="menu"></component>
                <!-- 意思是说这个时候是在渲染menu组件 -->
            </el-button>
            <!-- 左侧放的是面包屑导航栏,比如说A/B/C -->
            <el-breadcrumb separator="/" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 右侧放的是用户的头像  -->
        <div class="r-content">
            <el-dropdown>
                <!-- 就是当鼠标悬浮在其上面的时候，会出现个人中心和退出的框框选择。 -->
                <span class="el-dropdown-link">
                    <img :src="getImageUrl('user')" class="user">
                    <!-- 为什么有些东西是在后面写/ 但是有些是在前面呢   单标签包裹？？？这是啥？？？
                     -->
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <!-- 下拉出来的菜单 -->
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`, import.meta.url).href
}
// 为什么要写后面的import.meta.url呢
</script>
<style lang="less" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #333;
}

.icons {
    width: 20px;
    height: 20px;

}

.l-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px;
    }
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

:deep(.bread span) {
    color: #fff !important;
    cursor: pointer !important;
}
// !important的作用是覆盖掉默认的样式
</style>