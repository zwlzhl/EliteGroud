import { login, getUserInfo, getViewAuthority } from '../services/login'
import { setToken, getToken } from '@/utils/index';
import { routerRedux } from 'dva/router'
import allAuthority from '../router/index';
export default {
  //命名空间
  namespace: 'login',
  //模块状态
  state: {
    isLogin: -1,
    userInfo: {},
    myView: [],
    forbiddenView: []
  },
  //订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        // 1.判断去的页面是否是登陆页面
        if (pathname.indexOf('/login') === -1) {
          // 1.1 判断是否有登陆态
          if (!getToken()) {
            // 1.1.1没有登陆态，利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search: `?redirect=${encodeURIComponent(pathname)}`
            }))
          }
          // 1.2用户没有登录态
        } else {
          // 1.2.1去登陆页面，如果已登陆跳回首页
          if (getToken()) {
            // 利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/`,
            }))
          }
        }
        //   // 获取用户信息
        // dispatch({
        //   type: 'getUserInfo'
        // })
      });
    },
  },
  //异步操作
  effects: {
    //*表示generator函数
    *login({ payload, type }, { call, put }) {
      // console.log('payload...', payload, type)
      let data = yield call(login, payload);
      // console.log('data...', data);
      //console.log(data.data)
      if (data.code === 1) {
        // 1.设置cookie
        setToken(data.token)
      }
      // 调用reduce改变登陆状态    
      yield put({
        type: 'updateLogin',
        payload: data.code
      })

      
    },
    //获取用户信息
    *getUserInfo({ payload }, { call, put }) {
      let userinfo = yield call(getUserInfo)
      console.log(userinfo, "userinfo")
      // if (Object.keys(userinfo).length) {
      //   console.log(111)
      //   return;
      // }
      yield put({
        type: "getUserData",
        payload: userinfo
      })
      //获取权限数据
      let authority = yield getViewAuthority();
      console.log('authority...', authority);
      yield put({
        type: 'updateViewAuthority',
        payload: authority.data
      })
    }
  },
  //同步操作
  reducers: {
    //*updateLogin是type *type当做函数名
    updateLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
    //获取用户信息
    getUserData(state, { payload: { data } }) {
      return {
        ...state,
        userInfo: data
      }
    },
    //获取权限数据
    updateViewAuthority(state, action) {
      let myView = [], forbiddenView = [];
      allAuthority.routes.forEach(item=>{
        let obj = {
          name: item.name,
          children: []
        }
        item.children.forEach(value=>{
          if (action.payload.findIndex(item=>item.view_id === value.view_id) !== -1){
            obj.children.push(value);
          }else{
            forbiddenView.push(value);
          }
        })

        myView.push(obj)
      })

      return {...state, myView, forbiddenView}
    }
  }

};
