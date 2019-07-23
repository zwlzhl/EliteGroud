import request from '../utils/request';


export function getUploadImg(data) {
    return request({
        url: 'http://123.206.55.50:11000/tobase64',
        method: 'POST',
        data: {
            url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987907653,720009510&fm=27&gp=0.jpg'
        }
    })
}


//获取用户信息
export function getUserInfo() {
    return request.get("/user/userInfo")
}
//更改新用户信息
export function getImage(data) {
    return request.put('/user/user',data)
}
//更改后的信息
export function getUpDataImg() {
    return request.get('/user/user')

}