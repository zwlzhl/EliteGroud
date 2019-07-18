import request from '../utils/request';
export  function getUploadImg(data){
    return request({
        url:'http://123.206.55.50:11000/tobase64',
        method:'POST',
        data:{
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2062712286,1954365920&fm=26&gp=0.jpg'
        }
    })
}
  