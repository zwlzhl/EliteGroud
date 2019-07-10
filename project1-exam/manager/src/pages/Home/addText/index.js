import React,{useEffect} from 'react';
import { connect } from 'dva';
// import styles from './index.css';
import axios from 'axios'
function AddText(props) {
  useEffect(()=>{
      console.log(props)
  })
  
  return (
    <div>
    
    </div>
  );
}
AddText.propTypes = {
};

export default connect()(AddText);
