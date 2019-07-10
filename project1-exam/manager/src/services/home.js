import request from '../utils/request';

export function userInfo(params) {
  return request.get('/user/userInfo',params);
}
