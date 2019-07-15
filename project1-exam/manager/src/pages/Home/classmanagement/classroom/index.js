import React, {useEffect} from 'react';
import { connect } from 'dva';
import styles from './index.scss';

function Classroom(props) {
    useEffect(()=>{
        //获取用户信息
       
    },[])

    return (
       <div>
           Classroom
        </div>
    );
}
Classroom.propTypes = {
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
export default connect(mapStateToProps, mapDispachToProps)(Classroom);
