//考试管理
import request from '../utils/request';

//获取所有的试题

export function getQuestions(){
    return request({
        url:'/exam/questions/new',
        method:'GET'
    })
}
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

//创建试卷
 export function createPage (params){
     return request.post('/exam/exam',params)
 }

 //删除接口
 export function getdelete(){
     return  request.delete('/exam/exam/w5tcy-g2dts')
 }

 //获取详情列表

 export default function getDetail (){
    //  return request.get('/exam/exam/w5tcy-g2dts')
 }
