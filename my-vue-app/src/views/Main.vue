<script setup>
import CommonAside from '@/components/CommonAside.vue'
// 别名 @ 代替 src     把组件components文件夹中的CommonAside.vue文件引入
import CommonHeader from '@/components/CommonHeader.vue'
</script>

<template>
    <div class="common-layout">
        <el-container class="lay-container">
            <common-aside />
            <!-- 这里就是CommonHeader组件 -->
            <el-container>
                <el-header>
                    <common-header />
                    <!-- 这里就是CommonAside组件 -->
                </el-header>
                <el-main class="right-main">
                    main
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
