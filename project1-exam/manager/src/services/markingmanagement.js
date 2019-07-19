//阅卷管理
import request from '../utils/request';
//获取学生待批试题列表
export function getStudentList() {
    return request.get("/manger/grade")
}
//获取试题列表
export function getStudentData(params) {
    return request.get("/exam/student", {params})
}
//获取试题详情
export function getStudent(params) {
    console.log(params, "paramsssssss")
    return request({
        url: "/exam/student/"+params,
        method: "GET"
    })
}
//提交阅卷
export function submitNumber(params) {
    return request({
        url: "/exam/student/" +params.id,
        method: "PUT",
        data:params
    })
}
