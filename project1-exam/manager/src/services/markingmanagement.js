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
export function getStudent() {
    return request.get("/exam/student/t27znv-gu7azm-qpq9ai-laaf9m")
}
//提交阅卷
export function submitNumber() {
    return request({
        url: "/exam/student/t27znv-gu7azm-qpq9ai-laaf9m",
        method: "PUT"
    })
}
