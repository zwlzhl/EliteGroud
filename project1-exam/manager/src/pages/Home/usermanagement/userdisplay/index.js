import React, {useEffect} from 'react';
import { connect } from 'dva';
import styles from './index.scss';

function Userdisplay(props) {
   
    return (
        <>
            用户展示
        </>
    );
}
Userdisplay.propTypes = {
};
const mapStateToProps = state =>{
    return {
        
    }
}
const mapDispachToProps = dispatch =>{
    return {
       
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Userdisplay);
