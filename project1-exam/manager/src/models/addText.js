import { getQuestions, getQuestionTypes } from '../services/addText'
import { routerRedux } from 'dva/router'
export default {
    //命名空间
    namespace: 'addText',
    //模块状态
    state: {
        isLogin: 0
    },
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {
        //获取所有的试题
        *getQuestions({ payload }, { call, put }) {
            let data = yield call(getQuestions);
            console.log(data)
        },
        //获取所有的试题类型
        *getQuestionTypes({ payload }, { call, put }) {
            let data=yield call(getQuestionTypes)
            console.log(data)
        }
    },
    //同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
