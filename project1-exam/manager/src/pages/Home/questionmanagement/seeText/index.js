import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Select, Button } from 'antd';
import styles from './index.scss'
const { Option } = Select;
function SeeText(props) {
  useEffect(() => {
    props.getClassPage();
    props.Subject()
    props.examType()
    props.getQuestionTypes();

  }, [])
  let { ViewList, subjectList, examTypeList, ExamList } = props;
  //subject_id是课程类型
  let [subject_id, upSubject] = useState('');
  let [exam_id, upExam_id] = useState('');
  let [questions_type_id, upQuestion] = useState('');
  // let [index,checked]=useState('')
  // console.log(subjectList)
  //examTypeList考试类型
  //ExamList 题目类型
  //获取subject_id  课程类型    点击添加样式
  let handleSub = (id) => {
    upSubject(subject_id = id)

  }
  //改变考试类型
  let handleChange = (value) => {
    upExam_id(exam_id = value);
  }
  //改变题目类型
  let handleChangeId = (value) => {
    upQuestion(questions_type_id = value)
  }
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
  let handleFind = () => {
    props.findList({ subject_id, exam_id, questions_type_id })
  }


  // const {CheckableTag}=Tag;
  // // const [selectedTags,selectedTagsP]=useState('')
  // let handleChange=(tag, checked)=> {
  //   // const { selectedTags } = this.state;
  //   // const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
  //   // console.log('You are interested in: ', nextSelectedTags);
  //   // this.setState({ selectedTags: nextSelectedTags });
  // }

  // //全部
  let chooseAll = (e) => {
    //   //     let arr=Array.from(e.target.parentNode.childNodes)
    //   //     arr.map(item => {
    //   //       item.className = "";
    //   //     });
    //   //     e.target.className=styles.active
  }
  return (
    <div className={styles.boxs}>
      <div className={styles.title}>查看试题</div>
      <div className={styles.top}>
        <div className={styles.top_Top}>
          <div >
            <span className={styles.top_Span}>课程类型:</span>
            <span onClick={chooseAll} >All</span>
            {/* {subjectList.map(tag => (
              <CheckableTag
                key={item}
                checked={selectedTags.indexOf(item) > -1}
                onChange={checked =>handleChange(item, checked)}
              >
                {tag.subject_text}
              </CheckableTag>
            ))} */}
            {
              subjectList && subjectList.map((item, index) => {
                return <li className={styles.li }
                  key={item.subject_id}
                  onClick={() => handleSub(item.subject_id, index)}
                >{item.subject_text} </li>
                // <CheckableTag  checked={index} onChange={handleCh} />
              })
            }
          </div>
        </div>
        <div className={styles.top_Bom}>
          <div className={styles.Bom_item}>
            <p>考试类型</p>
            <Select
              onChange={handleChange}
              style={{ width: 150, margin: 15, height: 35 }}>
              {
                examTypeList && examTypeList.map((item) => {
                  return <Option key={item.exam_id}
                    value={item.exam_id}
                  >{item.exam_name}</Option>
                })
              }
            </Select>
          </div>
          <div className={styles.Bom_item}>
            <p>题目类型</p>
            <Select
              onChange={handleChangeId}
              style={{ width: 150, margin: 15, height: 35 }}>
              {
                ExamList && ExamList.map((item) => {
                  return <Option key={item.questions_type_id}
                    value={item.questions_type_id}

                  >{item.questions_type_text}</Option>
                })
              }
            </Select>
          </div>
          <Button className={styles.Btn} style={{ width: 150, margin: 15 }} onClick={() => handleFind()} type="primary">查询</Button>
        </div>
      </div>
      <div className={styles.center}>
        {
          ViewList && ViewList.map((item) => {
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
    findList(payload) {
      dispatch({
        type: "questions/findList",
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeeText);
