//导入请求工具

//提供注册接口的函数
export const userRegisterService=(RegisterData)=>{
    // 借助于这个函数传参
  const params=  new URLSearchParams();
  for (let key in RegisterData){
    params.append(key,RegisterData[key]);

  }
  return request.post('http://localhost:3001/user',params);
}
//提供调用登录接口的函数
export const userLoginService=(loginData)=>{
    const params=new URLSearchParams();
   for(let key in loginData){
    params.append(key,loginData[key])
}
    request.post('path',params)
}