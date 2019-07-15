import {
    getQuestionTypes,
    insertQuestionsType,
    getClassPage,
    Subject,
    examType,
    findList,
    getSubject,
    getExam,
    upDataQuestions,
    addExamType
} from '../services/addText'
export default {
    //命名空间
    namespace: 'questions',
    //模块状态
    state: {
        TypeList: [],
        ViewList: [],
        insertList: [],
        subjectList: [],
        examTypeList: [],
        detail: {},
        edit: {},
        insertData: [],
        SubList: [],
        ExamList: [],
        examFlag: -1,
        upDataExam: [],
        allExamtype: [],
        examtypeFlag: {},
        index: 0
    },
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {
        // 获取所有试题类型
        *getQuestionTypes({ payload }, { call, put }) {
            //console.log(payload, "addtext.data")
            let data = yield call(getQuestionTypes)
            let subList = yield call(getSubject)
            let examList = yield call(getExam)
            //console.log(data, "Data.......")
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
        *Subject({ payload }, { call, put }) {
            let data = yield call(Subject)
            // console.log(data)
            yield put({
                type: "subjectL",
                payload: data.data
            })
        },
        //获取所有的考试类型
        *examType({ payload }, { call, put }) {
            let data = yield call(examType)
            // console.log(data)
            yield put({
                type: "getexamType",
                payload: data.data
            })
        },
        //跳转详情页
        *clickItem({ payload }, { call, put }) {
            console.log(payload)
            yield put({
                type: "ClickUpdata",
                payload: payload
            })
        },
        //跳转编辑页
        *clickedit({ payload }, { call, put }) {
            yield put({
                type: "editData",
                payload
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
        //点击添加试题(记得传参)
        *insertQuestionsType({ payload }, { call, put }) {
            let examData = yield call(insertQuestionsType, payload);
            //console.log(examData, "examData......");
            yield put({
                type: "addExam",
                payload: examData

            })
        },
        //获取所有的试题
        *getClassPage({ payload }, { call, put }) {
            let data = yield call(getClassPage)
            // console.log('getClassPage',data)
            yield put({
                type: "getData",
                payload: data.data
            })
        },


        //更新试题
        *upDataQuestions({ paylaod }, { call, put }) {
            let data = yield call(upDataQuestions)
            console.log(data)
            yield put({
                type: "upDataList",
                paylaod
            })
        },
        //获取所有的试题类型
        * getAllExam({ payload }, { call, put }) {
            let allExam = yield call(getExam)
            console.log(allExam, "allExam......")
            yield put({
                type: "getAllexam",
                payload: allExam
            })
        },
        //点击添加试题类型
        * addExamType({ payload }, { call, put }) {
            let typeData = yield addExamType(payload)
            console.log(typeData, "typedaa................")
            if (typeData.code === 1) {
                yield put({
                    type: "addexamtype",
                    payload: typeData
                })
            }
        }
    },

    //同步操作
    reducers: {
        //获取所有的考试类型
        typeUpdata(state, { payload: { data } }) {
            return {
                ...state,
                TypeList: data
            }
        },
        //获取所有的课程类型
        getSubData(state, { payload: { data } }) {
            return {
                ...state,
                SubList: data
            }
        },
        //点击添加试题
        addExam(state, action) {
            return {
                ...state,
                examFlag: action.payload.code
            }
        },
        //获取所有的题目类型
        getExamData(state, { payload: { data } }) {
            return {
                ...state,
                ExamList: data
            }
        },
        getData(state, { payload }) {
            return { ...state, ViewList: payload }
        },
        subjectL(state, { payload }) {
            return { ...state, subjectList: payload }
        },
        getexamType(state, { payload }) {
            return { ...state, examTypeList: payload }
        },
        ClickUpdata(state, { payload }) {
            return { ...state, detail: payload }
        },
        editData(state, { payload }) {
            return { ...state, edit: payload }
        },
        findData(state, { payload }) {

            return { ...state, ViewList: payload }
        },
        upDataList(state, { paylaod }) {
            return { ...state, upDataExam: paylaod }

            // return { ...state, findEdit: payload }
        },
        //获取所有的试题类型
        getAllexam(state, { payload: { data } }) {
            return {
                ...state,
                allExamtype: data
            }

        },
        //点击添加试题类型
        addexamtype(state, { payload: { data } }) {
            return {
                ...state,
                examtypeFlag: data
            }

        }
    }


};
