import { getUploadImg, getImage, getUserInfo, getUpDataImg } from '../services/user'

export default {
    // 命名空间
    namespace: 'upload',

    // 模块内部的状态
    state: {
        base: '',
        img: '',
        userInfo: {},
        getUpdataimg: {},
        getImageList: {}
    },
    // 订阅路由跳转
    subscriptions: {
        setup({
            dispatch,
            history
        }) { // eslint-disable-line},
        }
    },
    // 异步操作
    effects: {
        //获取用户信息
        *getUserInfo({ payload }, { call, put }) {
            let userinfo = yield call(getUserInfo)
            console.log(userinfo, "userinfo")
            yield put({
                type: "getUserData",
                payload: userinfo
            })
        },
        //更改新用户信息
        *getImage({ payload }, { call, put }) {
            console.log(payload, 'payload....')
            let data = yield call(getImage, payload);
            console.log(data, '更新.....')
            yield put({
                type: "getImageData",
                payload: data.data
            })
        },
        //更改后的信息
        *getUpDataImg({ payload }, { call, put }) {
            let data = yield call(getUpDataImg, payload)
            console.log(data, 'user/user')
            yield put({
                type: "getUpdataData",
                payload: data.data
            })
        },
        *getData({ payload }, { call, put }) {
            let data = yield call(getUploadImg)
            console.log(data, "111")
            yield put({
                type: 'baseImg',
                payload: data.data.base64
            })
        }
    },


    // 同步操作
    reducers: {
        baseImg(state, { payload }) {
            return {
                ...state,
                base: payload
            }
        },
        setImg(state, { payload }) {
            return {
                ...state,
                img: payload
            }
        },
        getUserData(state, { payload: { data } }) {
            return {
                ...state,
                userInfo: data
            }
        },
        getImageData(state, { payload }) {
            return { ...state, getImageList: payload }
        },
        getUpdataData(state, { payload }) {
            return { ...state, getUpdataimg: payload }
        }
    },
};