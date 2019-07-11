import {
    Type,
    getQuestionTypes,
    insertQuestionsType,
    getClassPage
} from '../services/addText'
import { routerRedux } from 'dva/router'
export default {
    //命名空间
    namespace: 'questions',
    //模块状态
    state: {
        TypeList: [],
        ViewList: [],
        insertList: []
    },
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {

        // 获取所有试题类型
        *getQuestionTypes({ }, { call, put }) {
            let data = yield call(getQuestionTypes)
            console.log('data...', data.data)
            yield put({
                type: "typeUpdata",
                payload: data.data
            })
        },
        //添加类型
        *insertQuestionsType({ payload }, { call, put }) {
            let data = yield call(insertQuestionsType, payload);
            console.log(data);
        },

        //获取所有的试题
        *getClassPage({ payload}, { call, put }) {
            let data=yield call(getClassPage)
            console.log('getClassPage',data)
            yield put({
                type:"getData",
                payload:data.data
            })
         }
    },

    //同步操作
    reducers: {
        typeUpdata(state, { payload }) {
            return { ...state, TypeList: payload }
        },
        getData(state,{payload}){
            return {...state,ViewList:payload}
        }
    },

};
