
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Table, Modal, Form, Input, Button } from 'antd'
import styles from './index.scss'
function Classification(props) {
  // 控制添加弹框
  let [showDialog, updateDialog] = useState(false);
  //获取更改value值
  const { TypeList } = props;
  console.log(TypeList)
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
    props.getQuestionTypes();
  }, [])
  //事件处理

  const { getFieldDecorator } = props.form;
  return (
    <div className={styles.main}>
      <h2 className={styles.titType}>试题分类</h2>
      <div className={styles.typesContent}>
        <div className={styles.btn}>

          <Button onClick={() => updateDialog(true)}>添加类型</Button>
          <Modal visible={showDialog} onCancel={() => updateDialog(false)}>
            <Form  >
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    placeholder="请输入试题类型"
                  />,
                )}
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div className={styles.tableType}>
          <Table columns={columns} dataSource={props.TypeList} />
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
    getQuestionTypes() {
      dispatch({
        type: "questions/getQuestionTypes"
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Classification));

