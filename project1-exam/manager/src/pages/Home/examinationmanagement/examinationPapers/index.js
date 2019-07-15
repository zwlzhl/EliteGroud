import React, {useEffect} from 'react';
import { connect } from 'dva';
import styles from './index.scss';

function ExaminationPapers(props) {
    useEffect(()=>{
        //获取用户信息
       
    },[])

    return (
       <div>
          ExaminationPapers
        </div>
    );
}
ExaminationPapers.propTypes = {
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
export default connect(mapStateToProps, mapDispachToProps)(ExaminationPapers);
