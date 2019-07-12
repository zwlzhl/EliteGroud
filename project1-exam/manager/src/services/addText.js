import request from '../utils/request'

//获取所有的试题类型
export function getQuestionTypes(){
    return request.get('/exam/getQuestionsType')
}

//添加试题
export function insertQuestionsType(){
    return request({
            url:"/exam/insertQuestionsType",
            method:"GET",    
    })
}

//获取所有的试题
export function getClassPage(){
        return request({
            url:"/exam/questions/new",
            method:"GET"
        })
}

//获取所有的课程
export function Subject(){
    return request({
        url:"/exam/subject",
        method:"GET"
    })
}
//获取所有的考试类型
export function examType(){
    return request({
        url:"/exam/examType",
        method:"GET"
    })
}

//按条件获取试题(查询)
export function findList(){
    return request({
        url:"/exam/questions/condition",
        method:"GET"
    })
}