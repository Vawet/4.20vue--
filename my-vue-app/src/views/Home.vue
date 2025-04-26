<script setup>
import {ref,getCurrentInstance,onMounted} from 'vue'
// import axios from 'axios'
const {proxy} = getCurrentInstance();
// console.log(proxy.$api); // 查看是否定义，结构是否符合预期
// // 解构
// proxy.$api.getTableData().then(data=>{
//     console.log(data)
// });


const getImageUrl=(user)=>{
    return new URL(`../assets/images/${user}.png`,import.meta.url).href
}

//这个tableData是假数据，等会我们使用axios请求mock数据
const tableData = ref([
    {
      name: "Java",
      todayBuy: 100,
      monthBuy: 200,
      totalBuy: 300,
    },
    {
      name: "Python",
      todayBuy: 100,
      monthBuy: 200,
      totalBuy: 300,
    }
])

const tableLabel = ref({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买",
})

const getTableData=async ()=>{
    const data=await proxy.$api.getTableData()
    console.log(data)
    tableData.value=data
}

onMounted(()=>{getTableData()});


// axios({
//     url:'/api/home/getTableData',
//     // 添加了api的前缀，表示通过代理转发
//     method:'get'
// }).then(res=>{
//     console.log(res)
//     if(res.data.code===200){
//         console.log(res.data.data.tableData)
//         tableData.value=res.data.data.tableData
//     }
// }).catch(err=>{
//     console.log(err)
// })

</script>

<template>
    <el-row class="home" :gutter="20" >
        <el-col :span="8" style="margin-top:20px">
            <!-- :gutter表示相邻两列之间的拘留 ：span表示 -->
            <el-card shadow="hover">
                <!-- 设置阴影属性 -->
                <div class="user">
                    <img :src="getImageUrl('user')" class="user"/>
                    <div class="user-info">
                        <p class="user-info-admin">Admin</p>
                        <p class="user-info-p">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间:<span>2024-4-22</span></p>
                    <p>上次登录地点:<span>北京</span></p>
                    <!-- <Setup/> -->
                </div>
            </el-card>
            <el-card shadow="hover" class="user-table">
                <!-- 设置阴影属性 -->
                <el-table :data="tableData">
                    <!-- 从上面获取假数据 -->
                    <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">
                        <template #default="{row}">
                            {{ row[key] }}
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped lang="less">
.home{
    height:100%;
    overflow:hidden;
    // 溢出的部分直接裁剪掉
    .user{
    display:flex;
    align-items: center;
    border-bottom:1px solid #ccc;
    margin-bottom:20px;
    img{
        width: 150px;
        height:150px;
        border-radius: 50%;
        margin-right:40px;
    }
    .user-info{
        p{
            line-height:40px;
        }
        .user-info-admin{
            font-size:30px;
        }
        .user-info-p{
            color:#999;
        }
    }
}
.login-info{
    p{
        line-height:30px;
        font-size:14px;
        color:#999;
        span{
            color:#666;
            margin-left:60px;
        }
    }
}
.user-table{
    margin-top:20px;
}

}
//解决因为从接口里面获取的html 是子组件 由于scoped的原因不能使用到css的问题

</style>
