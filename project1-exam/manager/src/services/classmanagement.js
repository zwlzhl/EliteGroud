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
export function del(data) {
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


//更新班级信息
export function upDataClass(){
    
}








//获取已经分班的学生
export function getPlacementStudent() {
    return request.get("/manger/student") 
}
//获取所有教室--->学生展示
export function getPlacementMangerRoom() {
    return request.get("/manger/room")
}
//获取所有班级--->学生展示
export function getPlacementMangerGrade() {
    return request.get("/manger/grade")
}
//删除学生接口
export function delateStudentId(params) {
    return request({
        url: "/manger/student/"+params.id,
        method: "DELETE"
    })
}
 //更新班级信息
 export default function updataCalss(data){
    return request.put('/manger/grade/update',{data})
}

//添加教室
export function addManagerRoom(params) {
    return request.post("/manger/room", params)
}
//删除教室
export function deleteManagerRoom(params) {
    return request({
        url: "/manger/room/delete",
        method: "DELETE",
        data: params
    })
}
