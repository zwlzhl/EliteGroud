import {
    ident, 
    viewAuthority, 
    apiAuthority, 
    userId, 
    userAdd, 
    addIdent, 
    upIdent, 
    addAuthorityApi, 
    addAuthorityView, 
    setIdentityApi, 
    setIdentityView
} from "../services/addUser.js";

export default {
    namespace: "addusers",

    state: {
        userList: [],
        viewList: [],
        apiList: [],
        userLists: [],
        codeNum: -1
    },

    effects: {
        *ident({ payload }, { call, put }) {
            let data = yield call(ident);
            yield put({
                type: "adduserList",
                payload: data.data
            })
        },
        //获取已有视图
        *viewAuthority({ payload }, { call, put }) {
            let data = yield call(viewAuthority);
            yield put({
                type: "viewAuthoritys",
                payload: data.data
            })
        },
        //获取api接口权限数据
        *apiAuthority({ payload }, { call, put }) {
            let data = yield call(apiAuthority);
            yield put({
                type: "apiAuthoritys",
                payload: data.data
            })
        },
        //获取用户id
        *getUser({ payload }, { call, put }) {
            let data = yield call(userId);
            yield put({
                type: "getUsers",
                payload: data.data
            })
        },
        //添加用户
        *userAdd({ payload }, { call, put }) {
            let data = yield call(userAdd, payload);
            yield put({
                type: "setCode",
                payload: data.code
            })
        },
        *addIdent({ payload }, { call, put }) {
            let data = yield call(addIdent, payload);
            console.log("添加身份", data);
            yield put({
                type: "setCode",
                payload: data.code === 1 ? 1 : 0
            })
        },
        *upIdent({ payload }, { call, put }) {
            let data = yield call(upIdent, payload);
            console.log("更新用户", data);
            yield put({
                type: "setCode",
                payload: data.code
            })
        },
        //添加api接口权限
        *addAuthorityApi({ payload }, { call, put }) {
            let data = yield call(addAuthorityApi, payload);
            console.log("添加api接口权限", data);
            yield put({
                type: "setCode",
                payload: data.code
            })
        },
        //添加视图权限
        *addAuthorityView({ payload }, { call, put }) {
            let data = yield call(addAuthorityView, payload);
            console.log("添加视图权限", data);
            yield put({
                type: "setCode",
                payload: data.code
            })
        },
        //给身份设置api接口权限
        *setIdentityApi({ payload }, { call, put }) {
            let data = yield call(setIdentityApi, payload);
            console.log("给身份设置api接口权限", data);
            yield put({
                type: "setCode",
                payload: data.code
            })
        },
        //给身份设置视图权限
        *setIdentityView({ payload }, { call, put }) {
            let data = yield call(setIdentityView, payload);
            console.log("给身份设置视图权限", data);
            yield put({
                type: "setCode",
                payload: data.code
            })
        }
    },

    reducers: {
        adduserList(state, action) {
            return { ...state, userList: action.payload };
        },
        viewAuthoritys(state, action) {
            return { ...state, viewList: action.payload }
        },
        apiAuthoritys(state, { payload }) {
            return { ...state, apiList: payload }
        },
        getUsers(state, { payload }) {
            return { ...state, userLists: payload }
        },
        setCode(state, action) {
            console.log(action.payload)
            return { ...state, codeNum: action.payload }
        }
    }
};
