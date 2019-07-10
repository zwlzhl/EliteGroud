import React,{useEffect} from 'react';

import { connect } from 'dva';
// import styles from './index.css';

function SeeText(props) {
  useEffect(()=>{
      props.getClassPage();
  })
let {ViewList}=props;
  console.log(ViewList)
  return (
    <div>
       查看试题
       {
         ViewList.map(item=>(
           item.title,
           item.exam_name,
           item.questions_stem
          
         ))
       }
    </div>
  );
}
SeeText.propTypes = {
};

const mapStateToProps=(state)=>{
  return {
    ...state.questions
  }
}
const mapDispatchToProps=(dispatch)=>{
    return {
      getClassPage(){
        dispatch({
          type:"questions/getClassPage"
        })
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SeeText);
