//班级管理

import request from '../utils/request';

//添加班级接口
export function addClass(params) {
    return request.post('/manger/grade', params)
}
export function getClass() {
    return request.get('/manger/grade')
}
//获取全部教室
export function allclass() {
    return request.get('/manger/room')
}
//获取所有的课程
export function Subject() {
    return request({
        url: "/exam/subject",
        method: "GET"
    })
}

//删除班级
export function deleteClasss(data) {
    return request.delete('/manger/grade/delete',{
        data
    })
    // console.log(params)
    // return request({
    //   url: '/manger/room/delete',
    //   method: "DELETE",
    //   params
    // })
  }