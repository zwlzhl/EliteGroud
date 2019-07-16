//阅卷管理
import {
  getStudentList,
  getStudentData,
  submitStudent
} from '../services/markingmanagement.js'
export default {
    //命名空间
    namespace: 'markingmanagement',
    //模块状态
    state: {
      studentList: [],
      approvalList: [],
      submitStudentList: {}
    },
    //订阅
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
    //异步操作
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      }, 
      //获取学生待批试题列表
      *getStudentlist({payload}, {call, put}) {
        let studentData = yield call(getStudentList)
        //console.log(studentData, "studentData。。。。。。。。。。。")
        yield put({
          type: "getStudentList",
          payload: studentData
        })
      },
      //获取试题列表
      *getStudentData({payload}, {call, put}) {
        let approvalData = yield getStudentData(payload)
        //console.log(approvalData, "approvalData......数据")
        yield put({
          type: "getstudentdata",
          payload: approvalData
        })
      },
      //提交阅卷
      *submitStudent({payload}, {call, put}) {
        let submitData = yield call(submitStudent)
        console.log(submitData, "submitData..........")
        yield put({
          type: "submitstudent",
          payload:submitData
        })
      }
    },
    //同步操作
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      // 获取学生待批试题列表
      getStudentList(state, action) {
        return {
          ...state,
          studentList: action.payload.data
        }
      },
      //获取试题列表
      getstudentdata(state, action) {
        return {
          ...state,
          approvalList: action.payload.exam
        }
      },
      //提交阅卷
      submitstudent(state, action) {
        return {
          ...state,
          submitStudentList: action.payload
        }
      }
    },
  
  };
  