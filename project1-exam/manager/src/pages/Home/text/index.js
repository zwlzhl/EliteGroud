import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import ReactMarkdown  from "react-markdown"
function Text(props) {
  let { detail } = props;
  console.log(detail)
  useEffect(() => {
  }, [])

  return (
    <div className={styles.box}>
      <h2>试题详情</h2>
      <div>
        <div className={styles.center}>
          <div className={styles.left}>
            <h5> <span>出题人：</span>{detail.user_name}</h5>
            <h6 style={styles.h6}>出题信息</h6>
            <div className={styles.small_Item}>
              <span>{detail.questions_type_text}</span>
              <span>{detail.subject_text}</span>
              <span>{detail.exam_name}</span>
            </div>
            <div style={{ margin: '15px 0' }}>
              <h3>{detail.title}</h3>
              <div>
              <ReactMarkdown>{detail.questions_stem}</ReactMarkdown>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h4>答案信息</h4>
            <ReactMarkdown >{detail.questions_answer}</ReactMarkdown>
            
          </div>
        </div>
      </div>
    </div>
  );
}
Text.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    ...state.questions
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Text);
