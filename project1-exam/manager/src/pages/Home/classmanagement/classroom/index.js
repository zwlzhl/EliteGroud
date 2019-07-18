import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Modal, Form, Input, Table, message } from 'antd';
const confirm = Modal.confirm
function Class(props) {
    const columns = [
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_id',
        },
        {
            title: '操作',
            render: (item) => <a onClick={() => removeRoom(item)}>删除</a>,
            key: '2',
        }
    ]
    useEffect(() => {
        props.getManagerRoom()

    }, [])
    console.log(props, "props. 教室管理")
    let [showModal, unshowModal] = useState(false);
    const { getFieldDecorator } = props.form;
    let { allclassList } = props.classmanagement
    let modalShow = () => {
        unshowModal(true)
    }
    function removeRoom(item) {
        console.log(item)
        confirm({
            title: "确定要删除吗？",
            cancelText: "取消",
            okText: "确定",
            onOk() {
                props.deleteManagerRoom({
                    room_id: item.room_id
                })
            },
            onCancel() { }
        })
    }
    let handleSubmit = () => {}
    let handleCacel = () => {
        unshowModal(false)
    }
    let handleOk = () => {
        props.form.validateFields((err, value) => {
            if (!err) {
                props.addManagerRooms({
                    room_text: value.classromm
                })
            }

            unshowModal(false)
        })
    }
    let {addManagerRoomCode, deleteManagerRoomCode} = props.classmanagement
    useEffect(()=>{
        if(addManagerRoomCode === 1) {
            message.success("添加成功")
            props.getManagerRoom()
        } else if(addManagerRoomCode === 0) {
            message.error("添加失败")
        }
    }, [addManagerRoomCode])
    useEffect(()=>{
        if(deleteManagerRoomCode === 1) {
            message.success("删除成功")
            props.getManagerRoom()
        } else if(deleteManagerRoomCode === 0) {
            message.error("删除失败")
        }
    }, [deleteManagerRoomCode])
    return (
        <div className={styles.wrap}>
            <Form onSubmit={handleSubmit}>
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
                        {getFieldDecorator('classromm', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(<Input placeholder="教室名" />)}
                    </Form.Item>
                </Modal>
                <Table columns={columns} dataSource={allclassList} rowKey={allclassList.room_id} />
            </Form>
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
        //获取全部教室
        getManagerRoom: payload => {
            dispatch({
                type: "classmanagement/allclass",
                payload
            })
        },
        //添加教室
        addManagerRooms: payload => {
            dispatch({
                type: "classmanagement/addManagerRooms",
                payload
            })
        },
        //删除教室
        deleteManagerRoom: payload => {
            dispatch({
                type: "classmanagement/deleteManagerRoom",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(Class));
