import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Modal, Form, Input, Select, Table} from 'antd';
const { Option } = Select;
function Class(props) {
    const columns = [
        {
          title: '班级名',
          dataIndex: 'name',
          key: '1',
        },
        {
          title: '课程名',
          dataIndex: 'age',
          key: '2',
        },
        {
          title: '教室号',
          dataIndex: 'address',
          key: '3',
        },
        {
            title: '操作',
            dataIndex: 'address',
            key: '4',
          }
        ]
    useEffect(() => {
        //获取用户信息

    }, [])
    let [showModal, unshowModal] = useState(false);
    const { getFieldDecorator } = props.form;
    let modalShow = () => {
        unshowModal(true)
    }

    let handleCacel = () => { 
        unshowModal(false)
    }
    let handleOk = () => { 
        unshowModal(false)
    }
    return (
        <div className={styles.wrap}>
            <Button type="primary" onClick={modalShow} className={styles.button}>+   添加班级 </Button>
            <Modal
                visible={showModal}
                onCancel={handleCacel}
                onOk={handleOk}
                className={styles.modal}
                cancelText="取消"
                okText="提交"
                title="添加班级"
            >
                <Form.Item label="班级名">
                    {getFieldDecorator('班级名', {
                        rules: [{ required: true, message: 'Please input the title of collection!' }],
                    })(<Input  placeholder="班级名"/>)}
                </Form.Item>
                <Form.Item label="教室号">
                    <Select defaultValue="请选择教室号" style={{ width: 470 }}>
                        <Option value="jack">Jack</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="课程名">
                    <Select defaultValue="课程名" style={{ width: 470 }}>
                        <Option value="jack">Jack</Option>
                    </Select>
                </Form.Item>
            </Modal>
            <Table columns={columns} dataSource="" />
        </div>
    );
}
Class.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispachToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(Class));
