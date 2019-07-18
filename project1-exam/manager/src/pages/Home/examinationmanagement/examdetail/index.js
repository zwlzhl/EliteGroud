import React, {useEffect} from 'react';
import { connect } from 'dva';
import ReactMarkdown  from "react-markdown"
//import styles from './index.scss';

function Examdetail(props) {
    useEffect(()=>{
        //获取用户信息
       
    },[])
    const {detail}=props.location
    // console.log(props.location.params)   id
    console.log(detail.item)  
    return (
        <div style={{ margin: '15px 0' }}>
              <h3>{detail.item.title}</h3>
              <span>{detail.item.exam_name}</span>
              <div>
              <ReactMarkdown>{detail.item.subject_text}</ReactMarkdown>
              </div>
            </div>
    );
}
Examdetail.propTypes = {
};
const mapStateToProps = state =>{
    return {
        ...state
    }
}
const mapDispachToProps = dispatch =>{
    return {
        
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Examdetail);
