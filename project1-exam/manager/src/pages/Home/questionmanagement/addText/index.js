
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import Editor from 'for-editor'
import { Input, Select, Button, Form, message, Modal, Spin } from 'antd';
import styles from './index.scss'

const { Option } = Select;
function AddText(props) {
  //获取考试、课程、题目数据
  useEffect(() => {
    props.getQuestionTypes()
  }, [])
  const { getFieldDecorator } = props.form;
  const { TypeList, SubList, ExamList } = props.questions;
  let [showModal, unshowModal] = useState(false);
  let handleSubmit = () => {
    unshowModal(true)
  }
  //点击添加试题
  let handleOk = () => {
    props.form.validateFields((err, value) => {
      if (!err) {
        const user_id = props.login.userInfo.user_id
        props.addExam({
          questions_type_id: value.questions_type_id,
          questions_stem: value.titleText,
          subject_id: value.subject_id,
          exam_id: value.exam_id,
          user_id: user_id,
          questions_answer: value.valueowen,
          title: value.value
        })
      }
    })
    unshowModal(false)
  }
  let handleCacel = () => {
    unshowModal(false)
  }
  useEffect(() => {
    //console.log(props.questions.examFlag )
    if (props.questions.examFlag === 1) {

      message.success('添加成功');
    }
  })
  return (
    <Form className={styles.content} onSubmit={handleSubmit}>
      <div className={styles.content}>
        <h2 className={styles.title}>添加试题</h2>
        <div className={styles.main}>
          <div className={styles.markcont}>
            <p>题目信息</p>
            <h4>题干</h4>
            <Form.Item>
              {getFieldDecorator('titleText', {
                validateTrigger: "onBlur",
                rules: [
                  { required: true, message: '标题不能为空' },
                  { min: 0, max: 20, message: 'Please input your correct username!' }
                ],
              })(
                <Input
                  placeholder="请输入题目标题，不能超过20字"
                />,
              )}
            </Form.Item>
            <p>题目管理</p>
            <Form.Item>
              {getFieldDecorator('value', {
                rules: [{ required: true, message: "答案信息必填" }],
                initialValue: '',
              })(
                <Editor height='auto' style={{ height: 350 }} />
              )}
            </Form.Item>
          </div>
          <div className={styles.item}>
            <p>请选择考试类型：</p>
            <Form.Item>
              {getFieldDecorator('exam_id', {
                rules: [{ required: true, message: "题目类型必选" }],
                initialValue: "请选择题目类型"
              })(
                <Select style={{ width: 120 }}>
                  {
                    TypeList.map(item => {
                      return (
                        <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                      )
                    })
                  }
                </Select>
              )}
            </Form.Item>
          </div>
          <div className={styles.item}>
            <p>请选择课程类型：</p>
            <Form.Item>
              {getFieldDecorator('subject_id', {
                rules: [{ required: true, message: "题目类型必选" }],
                initialValue: "请选择题目类型"
              })(
                <Select style={{ width: 120 }}>
                  {
                    SubList.map(item => {
                      return (
                        <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                      )
                    })
                  }
                </Select>
              )}
            </Form.Item>
          </div>
          <div className={styles.item}>
            <p>请选择题目类型：</p>
            <Form.Item>
              {getFieldDecorator('questions_type_id', {
                rules: [{ required: true, message: "题目类型必选" }],
                initialValue: "请选择题目类型"
              })(
                <Select style={{ width: 120 }}>
                  {
                    ExamList.map(item => {
                      return (
                        <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                      )
                    })
                  }
                </Select>
              )}
            </Form.Item>
          </div>
          <div className={styles.markcont}>
            <h2>答案信息</h2>
            <Form.Item>
              {getFieldDecorator('valueowen', {
                rules: [{ required: true, message: "答案信息必填" }],
                initialValue: '',
              })(
                <Editor height='auto' style={{ height: 350 }} />
              )}
            </Form.Item>
          </div>
          <Button type="primary" htmlType="submit">提交</Button>
          <Modal
            visible={showModal}
            onCancel={handleCacel}
            onOk={handleOk}
            className={styles.modal}
            cancelText="取消"
            okText="确定"
            width="400px"
            closable={false}
          >
            <p>你确定要添加这道题吗？</p>
            <p>真的要添加吗？</p>
          </Modal>
          {props.global ? <div className={styles.loading}><Spin /></div> : null}

        </div>
      </div>
    </Form>
  );
}
AddText.propTypes = {
};
const mapStateToProps = (state) => {
  return {
    ...state,
    global: state.loading.global
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //获取试题数据
    getQuestionTypes: payload => {
      dispatch({
        type: "questions/getQuestionTypes",
        payload
      })
    },
    //添加试题
    addExam: payload => {
      dispatch({
        type: "questions/insertQuestionsType",
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddText));

