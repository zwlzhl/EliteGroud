
import Cookie from 'js-cookie'

const key = "authorization";
export  function setToken(val) {
    //设置cook
    let data = new Date();
    let expires = data.getTime() + 10 * 60 * 60 * 1000;
    data.setTime(expires);
    Cookie.set(key, val, { expires: data }); 
}
//读取cookie
export function getToken(){
    return Cookie.get(key)
}
//删除cook
export function removeToken(){
   Cookie.remove(key);
}