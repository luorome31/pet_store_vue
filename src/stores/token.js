//定义store
import {defineStore} from 'pinia'
import {ref} from 'vue'
// 需要两个参数，第一是名字具有唯一性，第二个参数是函数，函数的内部可以定义状态的所有内容
export const useTokenStore =defineStore('token',()=>{
    //定义状态的内容
    //1.响应式变量
    const token=ref('')
    //2.定义一个函数，修改token的值,
    const setToken=(newToken)=>{
        token.value=newToken
    }
    //3.移除token的值
    const removeToken=()=>{
        token.value=''
    }
    //返回
    return {
        token,setToken,removeToken
    }
    //持久化存储
    {persist:true}
});
