//班级管理

import request from '../utils/request';

//添加班级接口
export function addClass(params){
    return request.post('/manger/grade',params)
}
//获取全部教室
export function allclass(){
    return request.get('/manger/room')
}
//获取所有的课程
export function Subject() {
    return request({
        url: "/exam/subject",
        method: "GET"
    })
}