import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Modal, Form, Input, Select, Table } from 'antd';
const { Option } = Select;
function Class(props) {

    useEffect(() => {
        props.Subject()
        props.allclass()
    }, [])
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
            render:(item)=><div>
                <span>修改</span>
                <span>删除</span>
            </div>,
            key: '4',
        }
    ]
    const { allclassList, subjectList, classList } = props;
    console.log(props)
    let [showModal, unshowModal] = useState(false);
    const { getFieldDecorator } = props.form;
    let modalShow = () => {
        unshowModal(true)
    }

    let handleCacel = () => {
        unshowModal(false)
    }
    let handleOk = () => {
        props.form.validateFields((err, values) => {
            let item = {
                grade_name: values.grade_name,
                room_id: values.room_id,
                subject_id: values.subject_id
            }
            props.addClass(item)
            //  unshowModal(false)
        })

    }
    let handelInput = () => {

    }
    let handleSubmit = () => {

    }
    return (
        <div className={styles.wrap}>
            <Form className={styles.content} onSubmit={handleSubmit}>
                <Button type="primary" onClick={modalShow} className={styles.button}>+ 添加班级 </Button>
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
                        })(<Input onChange={handelInput} placeholder="班级名" />)}
                    </Form.Item>
                    <Form.Item label="教室号">
                        {getFieldDecorator('room_id', {
                            rules: [{ required: true, message: '请输入教室号' }],
                        })
                            (<Select defaultValue="请选择教室号" style={{ width: 470 }}>
                                {
                                    allclassList && allclassList.map(item => {
                                        return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                                    })
                                }
                            </Select>)}
                    </Form.Item>
                    <Form.Item label="课程名">
                        {getFieldDecorator('subject_id', {
                            rules: [{ required: true, message: '请输入课程名' }],
                        })
                            (
                                <Select defaultValue="课程名" style={{ width: 470 }}>
                                    {
                                        subjectList && subjectList.map((item, index) => {
                                            return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                                        })
                                    }

                                </Select>)}
                    </Form.Item>
                </Modal>
                <Table columns={columns} dataSource="" />
            </Form>
        </div>
    );
}
Class.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state.classmanagement
    }
}
const mapDispachToProps = dispatch => {
    return {
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
