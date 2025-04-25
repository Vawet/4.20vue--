<script setup>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'

</script>

<template>
    <div class="common-layout">
        <el-container class="lay-container">
            <common-aside />
            <el-container>
                <el-header>
                    <common-header />
                    <!-- 要实现 两个的联动 需要使用pinia -->
                     <!-- 秒的fw -->
                </el-header>
                <el-main class="right-main">
                    <router-view></router-view>
                    <!-- 这是在渲染核心的Home.vue界面 -->
                </el-main>
            </el-container>
        </el-container>
        
    </div>
</template>

<style scoped lang="less">
.common-layout,
.lay-container {
    height: 100%;
}

.el-header {
    background-color: #333;
}
</style>
