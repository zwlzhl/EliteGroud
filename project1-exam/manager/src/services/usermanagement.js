//用户管理
import request from '../utils/request'

//展示用户数据
export const userColumnsList=()=>{
        return request({
            url:"/user/user"
        })
}

//展示身份数据

export const identityData=()=>{
    return request({
        url:"/user/identity"
    })
}

//展示api接口权限数据
export const api_authority=()=>{
    return request({
        url:"/user/api_authority"
    })
}
//展示身份和api权限关系
export const apiAuthorityApi=()=>{
    return request({
        url:"/user/identity_api_authority_relation"
    })
}

//*** */获取视图权限数据
export const getviewuthority=()=>{
    return request({
        url:"/user/view_authority"
    })
}


//展示身份和视图权限关系

export const identity_view_authority_relation=()=>{
    return request({
        url:"/user/identity_view_authority_relation"
    })
}

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
