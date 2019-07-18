import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Modal, Form, Input, Select, Table, Divider } from 'antd';
const { Option } = Select;
function Class(props) {

    useEffect(() => {
        props.Subject()
        props.allclass()
        props.getClass()
        if (props.deletelist.code === 1) {
            props.getClass()
        } else {
            return
        }
    }, [props.deletelist])
    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: 'grade_name'
        },
        {
            title: '课程名',
            dataIndex: 'subject_text',
            key: 'subject_text',
        },
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_text',
        },
        {
            title: '操作',
            key: 'grade_id',

            render: (text, record) => (
                <span>
                    <a style={{ color: "#0139FD" }} onClick={() => handleUpdate(record, "reset")}>修改</a>
                    <Divider type="vertical" />
                    <a style={{ color: "#0139FD" }} onClick={() => handleDelete(record.grade_id)}>删除</a>
                </span>
            ),
        }
    ]

    const { allclassList, subjectList, getclassList } = props;

    let [showModal, unshowModal] = useState(false);
    const { getFieldDecorator } = props.form;
    let modalShow = () => {
        unshowModal(true)
    }
    //删除
    const handleDelete = (id) => {
        props.deleteClass({ grade_id: id })
    }
    //修改
    let handleUpdate = () => {
        unshowModal(true)
    }


    let handleCacel = () => {
        unshowModal(false)
    }
    let handleOk = () => {
        props.form.validateFields((err, values) => {
            if (!err) {
                let item = {
                    grade_name: values.grade_name,
                    room_id: values.room_text,
                    subject_id: values.subject_text
                }
                props.addClass(item)
                unshowModal(false)
            }
        })
    }
    return (
        <div className={styles.wrap}>
            <Form className={styles.content}>
                <Button type="primary" onClick={modalShow} className={styles.button}>添加班级 </Button>
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
                        {getFieldDecorator('grade_name', {
                            rules: [{ required: true, message: '请输入班级名' }],
                        })(<Input placeholder="班级名" />)}
                    </Form.Item>
                    <Form.Item label="教室号">
                        {getFieldDecorator('room_text', {
                            rules: [{required: true, message: '请输入教室号' }],
                        })
                            (<Select style={{width:470}}>
                                {
                                    allclassList && allclassList.map(item => {
                                        return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                                    })
                                }
                            </Select>)}
                    </Form.Item>
                    <Form.Item label="课程名">
                        {getFieldDecorator('subject_text', {
                            rules: [{ required: true, message: '请输入课程名' }],
                        })(<Select style={{ width:470}}>
                            {
                                subjectList && subjectList.map((item, index) => {
                                    return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                                })
                            }

                        </Select>)}
                    </Form.Item>
                </Modal>
                <Table columns={columns} dataSource={getclassList} rowKey='grade_id' />
            </Form>
        </div>
    );
}
Class.propTypes = {
};
const mapStateToProps = state => {
    console.log(state)
    return {
        ...state.classmanagement
    }
}
const mapDispachToProps = dispatch => {
    return {
        getClass() {
            dispatch({
                type: "classmanagement/getClass"
            })
        },
        deleteClass(payload) {
            console.log(payload)
            dispatch({
                type: "classmanagement/deleteClas",
                payload
            })
        },
        addClass(payload) {
            dispatch({
                type: 'classmanagement/addClass',
                payload
            })
        },
        allclass() {
            dispatch({
                type: "classmanagement/allclass"
            })
        },
        Subject() {
            dispatch({
                type: "classmanagement/Subject"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(Class));
