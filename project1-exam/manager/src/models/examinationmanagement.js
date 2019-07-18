import {
  getexamlist,
  examType,
  Subject,
  findList,
  createPage,
  getdelete
} from '../services/examinationmanagement'
//考试管理
export default {
  //命名空间
  namespace: 'examinationmanagement',
  //模块状态
  state: {
    createPageList: [],
    getdeleteList:[],
    examlistData: [],
    examTypeList: [],
    subjectList: [],
    ViewList: []
  },
  //订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  //异步操作
  effects: {
    //创建试卷
    *createPage({ payload }, { call, put }) {
      let data = yield call(createPage, payload)
      yield put({
        type: "createPageData",
        payload: data.data
      })
    },
    //删除试卷
    *getdelete({call,put}){
        let data=yield call(getdelete)
        console.log(data)
        yield put({
          type:"getdeleteData",
          payload:data.data
        })
    },
    //获取所有的考试类型
    *examType({payload}, {call, put }) {
      let data = yield call(examType)
      yield put({
        type: "getexamType",
        payload: data.data
      })
    },
    //课程类型
    *Subject({payload}, {call, put }) {
      let data = yield call(Subject)
      yield put({
        type: "subjectL",
        payload: data.data
      })
    },
    //获取试卷列表接口
    *getexamlist({payload}, {call, put }) {
      let data = yield call(getexamlist)
      // console.log("试卷列表......",data)
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
    createPageData(state, { payload }) {
      return { ...state, createPageList: payload }
    },
    getdeleteData(state,{payload}){
      return {...state,getdeleteList:payload}
    },
    examlist(state, { payload }) {
      // console.log(payload, '数据.....')
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
