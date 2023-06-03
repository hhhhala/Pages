import { defineStore } from 'pinia'

export const mainStore = defineStore('main',{
    // 数据(data)
    state:() => {
        return {
            linkOpenstate:false,
        }
    },
    // 计算属性(computed)
    getters: {
        
    },
    // 方法(methods)
    actions: {
        
    }
})