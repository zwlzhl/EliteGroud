import React, {useEffect} from 'react';
import { connect } from 'dva';
import styles from './index.scss';

function Student(props) {
    useEffect(()=>{
        //获取用户信息
       
    },[])

    return (
       <div>
           Student
        </div>
    );
}
Student.propTypes = {
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
export default connect(mapStateToProps, mapDispachToProps)(Student);
