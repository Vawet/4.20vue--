// 整个项目api的统一管理
import request from "../request.js"
// console.log(request); // 确认 request 是一个有效的函数

export default {
    getTableData() {
        return request({
            url: '/api/home/getTableData',
            method: "get",
        });
    },
};