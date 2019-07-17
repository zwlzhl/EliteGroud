//班级管理
import {
  getPlacementStudent,
  getPlacementMangerRoom,
  getPlacementMangerGrade,
  delateStudentId
} from '../services/classmanagement.js'
export default {
    //命名空间
    namespace: 'classmanagement',
    //模块状态
    state: {
      placementStudentList: [],
      PlacementMangerRoomlist: [],
      PlacementMangerGradeList: [],
      delateStudentIdList: {}
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
      //获取页面展示数据
      *getPlacementStudentPage({payload}, {call, put}) {
        //获取已经分班学生
        let getPlacementStudentData = yield call(getPlacementStudent)
        //console.log(getPlacementStudentData, "getPlacementStudentData.....")
        yield put({
          type: "getplacementstudentdata",
          payload: getPlacementStudentData
        })
        //获取全部教室
        let getPlacementMangerRoomData = yield call(getPlacementMangerRoom)
        //console.log(getPlacementMangerRoomData, "getPlacementMangerRoom")
        yield put({
          type: "getplacementmangerroomdata",
          payload: getPlacementMangerRoomData
        })
        //获取所有班级
        let getPlacementMangerGradeData = yield call(getPlacementMangerGrade)
        //console.log(getPlacementMangerGradeData,"getPlacementMangerGrade.........")
        yield put({
          type: "getplacementmangergradedata",
          payload:getPlacementMangerGradeData
        })
      },
      //删除学生接口
      *delateStudentId({payload}, {call, put}) {
         let deleteData = yield call(delateStudentId, payload)
         console.log(deleteData, "deleteData.....")
         yield put({
           type: "delatestudentid",
           payload: deleteData
         })
      }
    },
    //同步操作
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      //获取已经分班的学生
      getplacementstudentdata(state, action) {
        return {
          ...state,
          placementStudentList: action.payload.data
        }
      },
      //获取全部教室
      getplacementmangerroomdata(state, action) {
        return {
          ...state,
          PlacementMangerRoomlist: action.payload.data
        }
      },
      //获取所有班级
      getplacementmangergradedata(state, action) {
        return {
          ...state,
          PlacementMangerGradeList:action.payload.data
        }
      },
      //删除学生
      delatestudentid(state, action) {
        return {
          ...state,
          delateStudentIdList: action.payload
        }
      }
    },
  
  };
  