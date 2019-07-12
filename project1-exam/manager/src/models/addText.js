import {
    getQuestionTypes,
    insertQuestionsType,
    getClassPage,
    Subject,
    examType,
    findList,
    getSubject,
    getExam
} from '../services/addText'
//import { routerRedux } from 'dva/router'
export default {
    //命名空间
    namespace: 'questions',
    //模块状态
    state: {
        TypeList: [],
        ViewList: [],
        insertList: [],
        subjectList:[],
        examTypeList:[],
        detail:{},
        edit:{},
        findEdit:[],
        SubList:[],
        ExamList: [],
        examFlag: -1
    },
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {
        // 获取所有试题类型
        *getQuestionType({payload}, { call, put }) {
            //console.log(payload, "addtext.data")
            let data = yield call(getQuestionTypes)
            let subList = yield call(getSubject)
            let examList = yield call(getExam)
            //console.log('data...', data.data)
            yield put({
                type: "typeUpdata",
                payload: data
            })
            yield put({
                type: "getSubData",
                payload: subList
            })
            yield put({
                type: "getExamData",
                payload: examList
            })
        },
        //课程类型
        *Subject({payload},{call,put}){
            let data=yield call(Subject)
            // console.log(data)
            yield put({
                type:"subjectL",
                payload:data.data
            })
        },
        //获取所有的考试类型
        *examType({payload},{call,put}){
            let data=yield call(examType)
            // console.log(data)
            yield put({
                type:"getexamType",
                payload:data.data
            })
        },
        //跳转详情页
        *clickItem({ payload }, { call, put }) {
            console.log(payload)
            yield put({
                type: "ClickUpdata",
                payload:payload
            })
        },
        //跳转编辑页
        *clickedit({payload},{call,put}){
            yield put({
                type:"editData",
                payload
            })
        },
        //查询页面
        *findList({payload},{call,put}){
            let data=yield call(findList);
            console.log(data)
            yield put({
                type:"findData",
                payload:data.data
            })
        },
        //点击添加试题
        *insertQuestionsType({ payload }, { call, put }) {
            let examData = yield call(insertQuestionsType, payload);
            console.log(examData, "examData......");
            yield put({
                type: "addExam",
                paylaod: examData
            })
        },

        //获取所有的试题
        *getClassPage({ payload}, { call, put }) {
            let data=yield call(getClassPage)
            // console.log('getClassPage',data)
            yield put({
                type:"getData",
                payload:data
            })
         }
    },

    //同步操作
    reducers: {
        //获取所有的考试类型
        typeUpdata(state, {payload: {data}}) {
            return { 
                ...state, 
                TypeList: data 
            }
        },
        //获取所有的课程类型
        getSubData(state, {payload: {data}}) {
            return { 
                ...state, 
                SubList: data 
            }
        },
        //点击添加试题
        addExam(state, action) {
            return {
                ...state,
                examFlag: action.paylaod.code
            }
        },
        //获取所有的题目类型
        getExamData(state, {payload: {data}}) {
            return { 
                ...state, 
                ExamList: data 
            }
        },
        getData(state,{payload}){
            return {...state,ViewList:payload}
        },
        subjectL(state,{payload}){
            return {...state,subjectList:payload}
        },
        getexamType(state,{payload}){
            return {...state,examTypeList:payload}
        },
        ClickUpdata(state,{payload}){
            return {...state,detail:payload}
        },
        editData(state,{payload}){
            return {...state,edit:payload}
        },
        findData(state,{payload}){
            return {...state,findEdit:payload}
        }
    }
    

};
