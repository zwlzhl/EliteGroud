import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Select, Button } from 'antd';
import styles from './index.scss'
const { Option } = Select
function SeeText(props) {
  useEffect(() => {

    props.getClassPage();
    props.Subject()
    props.examType()
    props.getQuestionTypes();
   
  }, [])
  // let [subject_text,upSubject] = useState('');
  // console.log(subject_text)
  let { ViewList, subjectList, examTypeList, TypeList } = props;
   console.log(ViewList, "ViewList....")

  //点击编辑页面
  let handelEdit = (item) => {
    props.clickedit(item)
    props.history.push('/home/editPage?id=' + item.questions_type_id)
  }
  //点击跳转详情页
  let handleClick = (item) => {
    props.clickItem(item)
    props.history.push('/home/pending?id=' + item.questions_type_id)
  }
  //查询页面
  let handleFind=()=>{
      // props.findList();

  }
  return (
    <div className={styles.boxs}>
      <div className={styles.title}>查看试题</div>
      <div className={styles.top}>
        <div className={styles.top_Top}>
          <div className={styles.active}>
            <span className={styles.top_Span}>课程类型:</span>
            {
              subjectList && subjectList.map((item) => {
                return <li className={styles.li} key={item.subject_id}>{item.subject_text}</li>
              })
            }
          </div>
        </div>
        <div className={styles.top_Bom}>
          <div className={styles.Bom_item}>
            <p>考试类型</p>
            <Select style={{ width: 150, margin: 15, height: 35 }}>
              {
                examTypeList && examTypeList.map((item) => {
                  return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                })
              }
            </Select>
          </div>
          <div className={styles.Bom_item}>
            <p>题目类型</p>
            <Select style={{ width: 150, margin: 15, height: 35 }}>
              {
                TypeList && TypeList.map((item) => {
                  return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                })
              }
            </Select>
          </div>
          <Button className={styles.Btn} style={{ width: 150, margin: 15 }} onClick={()=>handleFind()} type="primary">查询</Button>
        </div>
      </div>
      <div className={styles.center}>
        {
          ViewList.data && ViewList.data.map((item) => {
            return <div key={item.questions_id} className={styles.center_Item}>
              <div className={styles.left} onClick={() => handleClick(item)}>
                <div className={styles.Title}>{item.title}</div>
                <div className={styles.Item_Box}>
                  <div className={styles.small_Item}>
                    <span>{item.questions_type_text}</span>
                    <span>{item.subject_text}</span>
                    <span>{item.exam_name}</span>
                  </div>
                </div>
                <div className={styles.Item_Name}>{item.user_name}</div>
              </div>
              <p className={styles.compile} onClick={() => handelEdit(item)}>编辑</p>
            </div>
          })
        }
      </div>
    </div>
  );
}
SeeText.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    ...state.questions
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getClassPage() {
      dispatch({
        type: "questions/getClassPage"
      })
    },
    //课程类型
    Subject() {
      dispatch({
        type: "questions/Subject"
      })
    },
    //获取所有的考试类型
    examType() {
      dispatch({
        type: "questions/examType"
      })
    },
    //所有的试题类型
    getQuestionTypes() {
      dispatch({
        type: "questions/getQuestionTypes"
      })
    },
    clickItem(payload) {
      dispatch({
        type: "questions/clickItem",
        payload
      })
    },
    clickedit(payload) {
      dispatch({
        type: "questions/clickedit",
        payload
      })
    },
    //查询
    findList(payload){
        dispatch({
          type:"questions/findList",
          payload
        })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeeText);
