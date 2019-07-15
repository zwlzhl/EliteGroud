import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Modal, Form, Input, Table} from 'antd';

function Class(props) {
    const columns = [
        {
          title: '教室号',
          dataIndex: 'name',
          key: '1',
        },
        {
          title: '操作',
          dataIndex: 'age',
          key: '2',
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
            <Button type="primary" onClick={modalShow} className={styles.button}>+   添加教室 </Button>
            <Modal
                visible={showModal}
                onCancel={handleCacel}
                onOk={handleOk}
                className={styles.modal}
                cancelText="取消"
                okText="提交"
                title="添加班级"
            >
                <Form.Item label="教室号">
                    {getFieldDecorator('教室号', {
                        rules: [{ required: true, message: 'Please input the title of collection!' }],
                    })(<Input  placeholder="教室名" />)}
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
