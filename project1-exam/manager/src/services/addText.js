import request from '../utils/request'
export function getQuestions(){
    return request({
        url:"/exam/questions"
    })
}
export function getQuestionTypes(){
    return request({
        url:'/exam/questions/new'
    })
}