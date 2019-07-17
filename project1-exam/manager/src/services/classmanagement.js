//班级管理
import request from '../utils/request';
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