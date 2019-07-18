//班级管理
import { getClass, addClass, allclass, Subject, del } from '../services/classmanagement'
// import { message } from 'antd'
export default {
  //命名空间
  namespace: 'classmanagement',
  //模块状态
  state: {
    classList: '',
    getclassList: [],
    allclassList: [],
    subjectList: [],
    deletelist:{}
  },
  //订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  //异步操作
  effects: {
    //获取数据
    *getClass({ }, { call, put }) {
      let data = yield call(getClass)
      yield put({
        type: 'getClassData',
        payload: data.data
      });
    },
    //添加班级接口
    *addClass({ payload }, { call, put }) {  // eslint-disable-line
      let data = yield call(addClass, payload)
      yield put({
        type: 'addClassData',
        payload: data.data
      });
    },
    //删除班级接口
    *deleteClas({ payload }, { call, put }) {
      let data = yield call(del, payload)
      yield put({
        type:"deleteData",
        payload:data
      })
      // data.code===1?message.success(data.msg):message.error(data.msg)
    },
    //所有的教室号
    *allclass({ }, { call, put }) {
      let data = yield call(allclass);
      yield put({
        type: "allclassData",
        payload: data.data
      })
    },
    //所有的课程名
    *Subject({ }, { call, put }) {
      let data = yield call(Subject)
      yield put({
        type: "subjectData",
        payload: data.data
      })
    }
  },
  //同步操作
  reducers: {
    getClassData(state, { payload }) {
      return { ...state, getclassList: payload };
    },
    addClassData(state, { payload }) {
      return { ...state, classList: payload };
    },
    allclassData(state, { payload }) {
      return { ...state, allclassList: payload }
    },
    subjectData(state, { payload }) {
      return { ...state, subjectList: payload }
    },
    deleteData(state, { payload }) {
      return { ...state,deletelist: payload }
    },
  },

};
