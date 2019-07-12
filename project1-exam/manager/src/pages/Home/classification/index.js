
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Table, Modal, Form, Input, Button, message } from 'antd'
// import axios from 'axios'
import styles from './index.scss'
import { get } from 'https';
function Classification(props) {
  // 控制添加弹框
  let [showDialog, updateDialog] = useState(false);
  //获取更改value值
  //let [iptValue, upValue] = useState("");
  const columns = [
    {
      title: '类型ID',
      dataIndex: 'questions_type_id'
    },
    {
      title: '类型名称',
      dataIndex: 'questions_type_text',
    },
    {
      title: '操作',
      dataIndex: '',
    }]
  //获取所有试题类型
  useEffect(() => {
    props.getAllExamTypes();
  }, [])
  //事件处理
console.log(props, "props......")

  const { getFieldDecorator } = props.form;
  let handleSubmit=()=>{
    props.form.validateFields((err, value)=>{
      if(!err) {
        props.addExamType({
        text: value.title,
        sort: props.allExamtype.length+1
      })
      } else {
        message.error("请输入内容")
      }
      updateDialog(false)

    })
  }
  return (
    <div className={styles.main}>
      <h2 className={styles.titType}>试题分类</h2>
      <div className={styles.typesContent}>
        <div className={styles.btn}>

          <Button onClick={() => updateDialog(true)}>添加类型</Button>
          <Modal
            visible={showDialog}
            onCancel={() => updateDialog(false)}
            onOk={()=>handleSubmit() }
          >
            <Form onSubmit={handleSubmit}>

              <Form.Item>
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: '请输入类型名称' }],
                })(
                  <Input
                    placeholder="请输入类型名称"
                  />,
                )}
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div className={styles.tableType}>
          <Table columns={columns} dataSource={props.allExamtype} rowKey="questions_type_id" />
        </div>
      </div>
    </div>
  );
}
Classification.propTypes = {
};
const mapStateToProps = (state) => {

  return {
    ...state.questions
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllExamTypes() {
      dispatch({
        type: "questions/getAllExam"
      })
    },

    addExamType:payload=> {
      dispatch({
        type: "questions/addExamType",
        payload
      })
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Classification));

