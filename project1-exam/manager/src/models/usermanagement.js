import {
    userColumnsList,
    identityData,
    api_authority,
    apiAuthorityApi,
    getviewuthority,
    identity_view_authority_relation,
    getUserIdentity,
    getUserUser,
    addUser,
    getviewAuthority,
    getApiAuthority,
    getUseNew
} from '../services/usermanagement'
export default {
    //命名空间
    namespace: 'usermanagement',
    //模块状态
    state: {
        userList: [],
        identityList: [],
        apiAuthorityList: [],
        apiAuthorityDataList: [],
        getviewuthorityList: [],
        identityRelationList: [],
        identityData: [],
        userUserData: [],
        addUserData: [],
        viewAuthorityData: [],
        apiAuthorityData: [],
        userNewData: []
    },
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {
        //展示用户数据
        *userColumnsList({ payload }, { call, put }) {
            let data = yield call(userColumnsList, payload)
            yield put({
                type: "userColumns",
                payload: data.data
            })
        },
        //展示身份数据
        *identityData({ payload }, { call, put }) {
            let data = yield call(identityData, payload)
            yield put({
                type: 'identitydata',
                payload: data.data
            })
        },
        //展示api接口权限数据
        *api_authority({ payload }, { call, put }) {
            let data = yield call(api_authority, payload)
            yield put({
                type: "apiAuthoritydata",
                payload: data.data
            })
        },
        //展示身份和api数据
        *apiAuthorityApi({ payload }, { call, put }) {
            let data = yield call(apiAuthorityApi)
            // console.log(data.data)
            yield put({
                type: "apiAuthorityDatappp",
                payload: data.data
            })
        },
        //展示视图接口权限
        *getviewuthority( { call, put }) {
            let data = yield call(getviewuthority)
            yield put({
                type: "getviewuthorityData",
                payload: data.data
            })
        },
        //身份和视图权限关系
        *identity_view_authority_relation( { call, put }) {
            let data = yield call(identity_view_authority_relation)
            yield put({
                type: "identityRelation",
                payload: data.data
            })
        },
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        //添加用户界面，展示数据
        *getUserIdentity({ payload }, { call, put }) {
            //获取用户数据
            let identityData = yield call(getUserIdentity)
            //console.log(identityData, "getUserIdentity...")
            yield put({
                type: "getidentityData",
                payload: identityData
            })
            //获取身份
            let userData = yield call(getUserUser)
            //console.log(userData, "userData.....")
            yield put({
                type: "getuseruserdata",
                payload: userData.data
            })
            //获取视图
            let viewAuthority = yield call(getviewAuthority)
            //console.log(viewAuthority, "viewAuthorityData.......")
            yield put({
                type: "getviewAuthorityData",
                payload: viewAuthority
            })
            //获取API接口权限数据
            let apiAuthority = yield call(getApiAuthority)
            //console.log(apiAuthority, "apiAuthority......")
            yield put({
                type: "getapiAuthorityData",
                payload: apiAuthority
            })
        },
        //添加用户
        *addUser({ payload }, { call, put }) {
            let adduser = yield call(addUser, payload)
            //console.log(adduser, "adduser.......")
            put({
                type: "adduser",
                payload: adduser
            })
        },
        //获取已有视图
        *getUserNew({ payload }, { call, put }) {
            let usernew = yield getUseNew(payload)
            console.log(usernew, "usernew.......")
            yield put({
                type: "getusernew",
                payload: usernew
            })
        }
    },
    //同步操作
    reducers: {
        userColumns(state, { payload }) {
            return { ...state, userList: payload }
        },
        identitydata(state, { payload }) {
            return { ...state, identityList: payload }
        },
        apiAuthoritydata(state, { payload }) {
            return { ...state, apiAuthorityList: payload }
        },
        apiAuthorityDatappp(state, { payload }) {

            return { ...state, apiAuthorityDataList: payload }
        },
        getviewuthorityData(state, { payload }) {
            return { ...state, getviewuthorityList: payload }
        },
        identityRelation(state, { payload }) {
            return { ...state, identityRelationList: payload }
        },
        save(state, action) {
            return { ...state, ...action.payload };
        },
        //获取用户数据--->添加用户
        getidentityData(state, { payload: data }) {
            return {
                ...state,
                identityData: data.data
            }
        },
        //获取身份标识
        getuseruserdata(state, { payload: data }) {
            return {
                ...state,
                userUserData: data
            }
        },
        //添加用户
        adduser(state, { payload: data }) {
            return {
                ...state,
                addUserData: data
            }
        },
        //获取视图
        getviewAuthorityData(state, action) {
            return {
                ...state,
                viewAuthorityData: action.payload.data
            }
        },
        //获取API接口权限数据
        getapiAuthorityData(state, action) {
            return {
                ...state,
                apiAuthorityData: action.payload.data
            }
        },
        //获取已有视图
        getusernew(state, action) {
            return {
                ...state,
                userNewData: action.payload.data
            }
        }

    },

};
