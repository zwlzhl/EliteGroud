import request from '../utils/request';

//获取用户数据
export function getUserIdentity() {
    return request.get("/user/identity")
}
//获取身份标识
export function getUserUser() {
    return request.get("user/user")
}
//添加用户
export function addUser(params) {
    return request.post("/user", params)
}
//获取视图
export function getviewAuthority() {
    return request.get("/user/view_authority")
}
//获取API接口权限ID
export function getApiAuthority() {
    return request.get("/user/api_authority")
}
