import { 
    userColumnsList,
    identityData,
    api_authority,
    apiAuthorityApi,
    getviewuthority,
    identity_view_authority_relation
 } from '../services/usermanagement'
export default {
    //命名空间
    namespace: 'usermanagement',
    //模块状态
    state: {
        userList: [],
        identityList:[],
        apiAuthorityList:[],
        apiAuthorityDataList:[],
        getviewuthorityList:[],
        identityRelationList:[]
    },
    //订阅d
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {
        //展示用户数据
        *userColumnsList({ payload }, { call, put }) {
            let data = yield call(userColumnsList,payload)
            yield put({
                type: "userColumns",
                payload: data.data
            })
        },
        //展示身份数据
        *identityData({payload},{call,put}){
            let data=yield call(identityData,payload)
            yield put({
                type:'identitydata',
                payload:data.data
            })
        },
        //展示api接口权限数据
        *api_authority({payload},{call,put}){
            let data=yield call(api_authority,payload)
            yield put({
                type:"apiAuthoritydata",
                payload:data.data
            })
        },
        //展示身份和api数据
        *apiAuthorityApi({payload},{call,put}){
            let data=yield call(apiAuthorityApi)
            console.log(data.data)
            yield put({
                type:"apiAuthorityDatappp",
                payload:data.data
            })
        },
        //展示视图接口权限
        *getviewuthority({},{call,put}){
            let data=yield call(getviewuthority)
            yield put({
                type:"getviewuthorityData",
                payload:data.data
            })
        },
        //身份和视图权限关系
        *identity_view_authority_relation({},{call,put}){
                let data=yield call(identity_view_authority_relation)
                yield put({
                    type:"identityRelation",
                    payload:data.data
                })
        }
    },
    //同步操作
    reducers: {
        userColumns(state, { payload }) {
            return { ...state, userList: payload }
        },
        identitydata(state,{payload}){
            return {...state,identityList:payload}
        },
        apiAuthoritydata(state,{payload}){
            return {...state,apiAuthorityList:payload}
        },
        apiAuthorityDatappp(state,{payload}){
          
            return {...state,apiAuthorityDataList:payload}
        },
        getviewuthorityData(state,{payload}){
            return {...state,getviewuthorityList:payload}
        },
        identityRelation(state,{payload}){
            return {...state,identityRelationList:payload}
        }
        
        
    },

};
