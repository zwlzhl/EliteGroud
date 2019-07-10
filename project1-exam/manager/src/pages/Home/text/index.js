import React from 'react';
import { connect } from 'dva';
//import styles from './index.css';

function Text(props) {
  console.log(props)
  return (
    <div>
        阅卷管理
    </div>
  );
}
Text.propTypes = {
};

export default connect()(Text);
