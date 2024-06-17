//定义store
import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
// 需要两个参数，第一是名字具有唯一性，第二个参数是函数，函数的内部可以定义状态的所有内容
export const useTokenStore =defineStore('token',()=>{
    //定义状态的内容
    //1.响应式变量
    const token=ref('')
    const tokenValue = computed(()=>{
        return token.value;
    })
    //2.定义一个函数，修改token的值,
    const setToken=(newToken)=>{
        token.value=newToken
    }
    //3.移除token的值
    const removeToken=()=>{
        token.value=''
    }
    const getNumber = computed(()=>{
        return number.value;
    })
    let number = ref(1);
    const addNumber = ()=>{
        console.log('number:',number.value);
        number.value++;
    }
    const setNumber = (newNumber)=>{
        number.value = newNumber;
    }
    //返回
    return {
        token,setToken,removeToken,tokenValue,number,addNumber,getNumber,setNumber
    }
    //持久化存储
    {persist:true}
});
