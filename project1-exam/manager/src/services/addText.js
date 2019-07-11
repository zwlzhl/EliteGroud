import request from '../utils/request'

//获取所有的试题类型
export function getQuestionTypes(){
    return request.get('/exam/getQuestionsType')
}

//添加试题
export function insertQuestionsType(params){
    return request({
            url:"/exam/questions",
            method:"POST",
            data:params
    })
}

//获取所有的试题
export function getClassPage(){
        return request({
            url:"/exam/questions/new",
            method:"GET"
        })
}