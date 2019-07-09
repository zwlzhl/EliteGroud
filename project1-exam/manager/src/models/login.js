import {login} from '../services/login'
export default {
    //命名空间
    namespace: 'login',
  
    //模块状态
    state: {
        isLogin:false
    },
    //订阅
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
    //异步操作
    effects: {
      //*表示generator函数
      *login({ payload,type }, { call, put }) {  // eslint-disable-line
        console.log('data...',payload,type)
        let data=yield call(login,payload);
        console.log(data)
        yield put({ 
          type: 'updateLogin',
          payload:data.code==1 
        });
      },
    },
    //同步操作
    reducers: {
      //*updateLogin是type *type当做函数名
      updateLogin(state, action) {
        return { ...state,isLogin:action.payload };
      }
    }
  
  };
  