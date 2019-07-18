//班级管理
import {
  getClass,
  addClass,
  allclass,
  Subject,
  del,
  getPlacementStudent,
  getPlacementMangerRoom,
  getPlacementMangerGrade,
  delateStudentId,
  addManagerRoom,
  deleteManagerRoom
} from '../services/classmanagement.js'
export default {
  //命名空间
  namespace: 'classmanagement',
  //模块状态
  state: {
    classList: '',
    getclassList: [],
    allclassList: [],
    subjectList: [],
    deletelist: {},
    placementStudentList: [],
    PlacementMangerRoomlist: [],
    PlacementMangerGradeList: [],
    delateStudentIdList: {},
    addManagerRoomCode: -1,
    deleteManagerRoomCode: -1
  },
  //订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  //异步操作
  effects: {
    //获取数据
    *getClass({payload}, { call, put }) {
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
    *deleteClass({ payload }, { call, put }) {
      let data = yield call(del, payload)
      yield put({
        type: "deleteData",
        payload: data
      })
      // data.code===1?message.success(data.msg):message.error(data.msg)
    },
    //所有的教室号
    *allclass({payload}, { call, put }) {
      let data = yield call(allclass);
      yield put({
        type: "allclassData",
        payload: data.data
      })
    },
    //所有的课程名
    *Subject({payload}, { call, put }) {
      let data = yield call(Subject)
      yield put({
        type: "subjectData",
        payload: data.data
      })
    },
    //获取页面展示数据
    *getPlacementStudentPage({ payload }, { call, put }) {
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
        payload: getPlacementMangerGradeData
      })
    },
    //删除学生接口
    *delateStudentId({ payload }, { call, put }) {
      //console.log(payload, "payoad....")
      let deleteData = yield delateStudentId( payload)
      console.log(deleteData, "deleteData.....")
      yield put({
        type: "delatestudentid",
        payload: deleteData
      })
    },
    //添加教室
    *addManagerRooms({payload}, {call, put}) {
      let addManagerRoomData = yield call(addManagerRoom, payload) 
      console.log(addManagerRoomData, "addManagerRoomData.......")
      yield put({
        type: "addmanagerroomdata",
        payload: addManagerRoomData
      })
    },
    //删除教室
    *deleteManagerRoom({payload}, {call, put}) {
      console.log(payload)
      let deleteManagerRoomData = yield deleteManagerRoom(payload)
      console.log(deleteManagerRoomData, "deleteManagerRoom...")
      yield put({
        type: "deletemanagerroomdata",
        payload: deleteManagerRoomData
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
      return { ...state, deletelist: payload }
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
        PlacementMangerGradeList: action.payload.data
      }
    }, 
    //删除学生
    delatestudentid(state, action) {
      return {
        ...state,
        delateStudentIdList: action.payload
      }
    },
    //添加教室
    addmanagerroomdata(state, action) {
      return {
        ...state,
        addManagerRoomCode: action.payload.code
      }
    },
    //删除教室
    deletemanagerroomdata(state, action) {
      return {
        ...state,
        deleteManagerRoomCode: action.payload.code
      }
    }
  },

};

