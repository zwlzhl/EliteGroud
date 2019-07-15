import {
  getexamlist, examType, Subject,findList
} from '../services/examinationmanagement'
//考试管理
export default {
  //命名空间
  namespace: 'examinationmanagement',
  //模块状态
  state: {
    examlistData: [],
    examTypeList: [],
    subjectList: [],
    ViewList:[]
  },
  //订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  //异步操作
  effects: {
    //获取所有的考试类型
    *examType({ payload }, { call, put }) {
      let data = yield call(examType)
      yield put({
        type: "getexamType",
        payload: data.data
      })
    },
    //课程类型
    *Subject({ payload }, { call, put }) {
      let data = yield call(Subject)
      yield put({
        type: "subjectL",
        payload: data.data
      })
    },
    //获取试卷列表接口
    *getexamlist({ }, { call, put }) {
      let data = yield call(getexamlist)
      yield put({
        type: "examlist",
        payload: data.exam
      })
    },
    //查询页面
    *findList({ payload }, { call, put }) {
      let data = yield call(findList, payload);
      // console.log(data.data)
      yield put({
          type: "findData",
          payload: data.data
      })
  },
  },
  //同步操作
  reducers: {
    examlist(state, { payload }) {
      return { ...state, examlistData: payload }
    },
    subjectL(state, { payload }) {
      return { ...state, subjectList: payload }
    },
    getexamType(state, { payload }) {
      return { ...state, examTypeList: payload }
    },
    findData(state, { payload }) {
      return { ...state, ViewList: payload }
  },
    
  }

};
