import React, { useEffect, useState } from 'react'
import { connect } from 'dva';
import { Button } from 'antd';
import style from './index.scss';

function Personal(props) {
    useEffect(() => {
        props.getData()
        props.getUserInfo()
        props.getUpDataImg()
    }, [])
    let [img, setImg] = useState("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987907653,720009510&fm=27&gp=0.jpg")
    let [user, setuser] = useState({})
    useEffect(() => {
        setImg(props.base)
    }, [props.base])
    useEffect(() => {
        setuser(user=props.userInfo)
    }, [props.userInfo])
    const { userInfo } = props
    let inpChange = e => {
        var reader = new FileReader()
        reader.onload = function (e) {
            let base = e.target.result
            props.setImg(base)
        }
        reader.readAsDataURL(e.target.files[0])
        // console.log(userInfo.user_id)
        // console.log(img, "00000")
        props.getImage({ user_id: userInfo.user_id, avatar: img })
        

    }


    return (<div>
        <div className={style.uploadImg}>
            <Button type="primary">上传头像</Button>
            <input type="file" onChange={inpChange} className={style.inputLoad} />
        </div>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        ...state.upload
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData() {
            dispatch({ type: 'upload/getData' })
        },
        setImg(payload) {
            dispatch({ type: 'upload/setImg', payload })
        },
        getUserInfo(payload) {
            dispatch({
                type: "upload/getUserInfo", payload
            })
        },
        getImage(payload) {
            dispatch({
                type: "upload/getImage",
                payload
            })
        },
        getUpDataImg(payload) {
            dispatch({
                type: "upload/getUpDataImg",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Personal)