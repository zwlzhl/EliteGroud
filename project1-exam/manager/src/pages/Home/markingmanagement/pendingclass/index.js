import React, {useEffect} from 'react';
import { connect } from 'dva';
import styles from './index.scss';

function Pending(props) {
    useEffect(()=>{
        //获取用户信息
       
    },[])

    return (
       <div>
           Pending
        </div>
    );
}
Pending.propTypes = {
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
export default connect(mapStateToProps, mapDispachToProps)(Pending);
