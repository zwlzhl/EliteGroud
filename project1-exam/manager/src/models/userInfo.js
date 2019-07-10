import {getToken} from '../utils/index'
import {userInfo} from '../services/index'
export default {
    //命名空间
    namespace: 'userInfo',
    //模块状态
    state: {},
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {
        *userInfo({ payload, type }, { call, put }) {  // eslint-disable-line
            console.log(payload, type, "userInfo")
            let data = yield call(userInfo, payload)
            console.log(data, "userinfo.data")
            yield put({ 
                type: 'getUserInfo',
                payload
            });
        },
    },
    //同步操作
    reducers: {
        getUserInfo(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
