import React,{useEffect} from 'react';
import { connect } from 'dva';
import {getQuestions} from  '../../../services/index'
// import styles from './index.css';
import axios from 'axios'
function AddText(props) {
  getQuestions()
  
  return (
    <div>

    </div>
  );
}
AddText.propTypes = {
};
const mapStateToProps=(state)=>{
  return {
    ...state
  }

}
const mapdispatchToProps=(dispatch)=>{
  return {
    
  }
}
export default connect(mapStateToProps,mapdispatchToProps)(AddText);
