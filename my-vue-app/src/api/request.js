import axios from "axios"
import { ElMessage } from 'element-plus'
const service = axios.create();
const NETWORK_ERROR = '网络错误。。。'
// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

// 添加响应拦截器
service.interceptors.response.use(
    (res) => {
        console.log('完整响应：', res)
        const { code, data } = res.data
        if (code === 200) {
            return data.tableData
            // 直接返回我目标数据的数组
        } else {
            const NETWORK_ERROR = "网络错误。。。"
            ElMessage.error(NETWORK_ERROR)
            return Promise.reject(NETWORK_ERROR)
        }
    },
    (error) => {
        const NETWORK_ERROR = "网络错误。。。"
        ElMessage.error(error.message || NETWORK_ERROR)
        return Promise.reject(error)
    }
);

function request(options) {
    options.method = options.method || "get";
    return service(options);
}
export default request;
