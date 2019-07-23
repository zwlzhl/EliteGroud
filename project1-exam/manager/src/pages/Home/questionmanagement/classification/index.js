
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Table, Modal, Form, Input, Button, message } from 'antd'
import { injectIntl } from 'react-intl'
// import axios from 'axios'
import styles from './index.scss'
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
  let handleSubmit = () => {
    props.form.validateFields((err, value) => {
      if (!err) {
        props.addExamType({
          text: value.title,
          sort: props.allExamtype.length + 1
        })
      } else {
        message.error("请输入内容")
      }
      updateDialog(false)

    })
  }
  return (
    <div className={styles.main}>
      <h2 className={styles.titType}>{props.intl.formatMessage({ id: 'questions.type.title' })} </h2>
      <div className={styles.typesContent}>
        <div className={styles.btn}>

          <Button onClick={() => updateDialog(true)} className={styles.button}> 添加类型</Button>
          <Modal
            title="创建新类型"
            visible={showDialog}
            onCancel={() => updateDialog(false)}
            onOk={() => handleSubmit()}
            className={styles.modal}
            cancelText="取消"
            okText="确定"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Item>
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: '请输入类型名称'}],
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
    //获取试题类型
    getAllExamTypes() {
      dispatch({
        type: "questions/getAllExam"
      })
    },
    //添加试题类型
    addExamType: payload => {
      dispatch({
        type: "questions/addExamType",
        payload
      })
    }

  }
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Form.create()(Classification)));

