import React,{useEffect} from 'react'
import { connect } from 'dva';
import { Button } from 'antd';
import style from './index.scss';

function Personal(props){
    useEffect(()=>{
        props.getData()
    },[])
   let inpChange=e=>{
        var reader=new FileReader()
        reader.onload=function(e){
            let base=e.target.result
            props.setImg(base)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (<div>
            <div className={style.uploadImg}>
                <Button type="primary">上传头像</Button>
                <input type="file" onChange={inpChange} className={style.inputLoad}/>
            </div>
    </div>)
}
const mapStateToProps=(state)=>{
    return {
        ...state.upload
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getData(){
            dispatch({type:'upload/getData'})
        },
        setImg(payload){
            dispatch({type:'upload/setImg',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Personal)