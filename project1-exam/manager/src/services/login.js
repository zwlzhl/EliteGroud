import request from '../utils/request';

//登录验证
export function login(params) {
  return request.post('/user/login',params);
}
//获取用户信息
export function getUserInfo() {
  return request.get("/user/userInfo")
}

