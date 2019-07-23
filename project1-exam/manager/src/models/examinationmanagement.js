import {
  getexamlist,
  examType,
  Subject,
  findList,
  createPage,
  getdelete,
  getDetail
} from '../services/examinationmanagement';
//考试管理
export default {
  //命名空间
  namespace: 'examinationmanagement',
  //模块状态
  state: {
    createPageList: [],
    getdeleteList: [],
    examlistData: [],
    examTypeList: [],
    subjectList: [],
    ViewList: [],
    detailList: {},
    createPageList: localStorage.list ? JSON.parse(localStorage.list) : {},

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
      console.log(data)
      // data.code===1?message.success(data.msg):message.error(data.msg);
      yield put({
        type: "createPageData",
        payload: data.data
      })
    },
    //删除试卷
    *getdelete({ payload }, { call, put }) {
      let data = yield call(getdelete)
      console.log(data)
      yield put({
        type: "getdeleteData",
        payload: data.data
      })
    },
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
    *getexamlist({ payload }, { call, put }) {
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
    //获取详情的数据
    *getDetail({ payload }, { call, put }) {
      // let data=yield call(getDetail)
      // console.log(data,"试卷详情页")
      // yield put({
      //   type:'getDetailData',
      //   payload:data.data
      // })
    }
  },
  //同步操作
  reducers: {
    createPageData(state, { payload }) {
      return { ...state, createPageList: payload }
    },
    getdeleteData(state, { payload }) {
      return { ...state, getdeleteList: payload }
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
    getDetailData(state, { payload }) {
      return { ...state, detailList: payload }
    },
    // 添加试题
    addQuestionFn(state, { item }) {
      let arr = JSON.parse(localStorage.exam);
      arr.examinationmanagement.push(item);
      localStorage.exam = JSON.stringify(arr);
      return {
        ...state,
        createPageList: arr
      }
    },
    //删除
    questionDel(state, { index }) {
      let arr = JSON.parse(localStorage.exam);
      arr.examinationmanagement.splice(index, 1);
      localStorage.exam = JSON.stringify(arr);
      return {
        ...state,
        createPageList: arr
      }
    },
  }

};
