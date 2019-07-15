//考试管理
import request from '../utils/request';


//获取所有的课程
export function Subject() {
    return request({
        url: "/exam/subject",
        method: "GET"
    })
}
//获取所有的考试类型
export function examType() {
    return request({
        url: "/exam/examType",
        method: "GET"
    })
}
//获取试卷列表
export function  getexamlist(){
    return request.get('/exam/exam')
    // return request({
    //     url:"/exam/exam",
    //     method:"GET"
    // })
}

//按条件获取试题(查询)
export function findList(params) {
    return request({
        url: "/exam/questions/condition",
        method: "GET",
        params
    })
}