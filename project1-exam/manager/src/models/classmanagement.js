//班级管理
import {addClass,allclass,Subject} from '../services/classmanagement'
export default {
    //命名空间
    namespace: 'classmanagement',
    //模块状态
    state: {
      classList:[],
      allclassList:[],
      subjectList:[]
    },
    //订阅
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
    //异步操作
    effects: {
      //添加班级接口
      *addClass({ payload }, { call, put }) {  // eslint-disable-line
        let data=yield call(addClass,payload)
        console.log(data)
        yield put(
          { 
            type: 'save' ,
            payload:data.data
        });
      },
      //所有的教室号
      *allclass({},{call,put}){
          let data=yield call(allclass);
          console.log(data)
          yield put ({
            type:"allclassData",
            payload:data.data
          })
      },
      //所有的课程名
      *Subject({},{call,put}){
          let data=yield call(Subject)
          yield put({
            type:"subjectData",
            payload:data.data
          })
      }
    },
    //同步操作
    reducers: {
      save(state, action) {
        console.log(7777777777)
        return { ...state, classList:action.payload };
      },
      allclassData(state,{payload}){
        return{...state,allclassList:payload}
      },
      subjectData(state,{payload}){
        return {...state,subjectList:payload}
      }
    },
  
  };
  