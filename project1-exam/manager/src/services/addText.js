import request from '../utils/request'


//获取所有的试题类型
export function getQuestionTypes(){
    return request.get('/exam/examType')
}
//获取所有的课程类型
export function getSubject() {
    return request.get("/exam/subject")
}
//获取所有的题目类型
export function getExam() {
    return request.get("/exam/getQuestionsType")
}
//添加试题
export function insertQuestionsType(params){
    return request.post("/exam/questions", params)
}

//获取所有的试题
export function getClassPage(){
        return request({
            url:"/exam/questions/new",
            method:"GET"
        })
}