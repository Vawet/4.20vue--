import { defineStore } from 'pinia'
import { ref } from "vue"
// 所有的ref都要从vue中导入 不然不能使用
function initState() {
    return {
        isCollapse: true,
    }
}
export const useAllDataStore = defineStore("allData", () => {
    const state = ref(initState());
    return {
        state,
    };
})