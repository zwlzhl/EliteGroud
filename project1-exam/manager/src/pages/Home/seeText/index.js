import React from 'react';
import { connect } from 'dva';
// import styles from './index.css';

function SeeText() {
  return (
    <div>
       查看试题
    </div>
  );
}
SeeText.propTypes = {
};

export default connect()(SeeText);
