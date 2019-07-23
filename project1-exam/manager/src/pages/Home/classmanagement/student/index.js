import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Form, Input, Select, Button, Table } from 'antd'
const { Option } = Select
function Student(props) {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'student_name',
            key: '1',
        },
        {
            title: '学号',
            dataIndex: 'student_id',
            key: '2',
        },
        {
            title: '班级',
            dataIndex: 'grade_name',
            key: '3',
        },
        {
            title: '教室',
            dataIndex: 'room_text',
            key: '4',
        },
        {
            title: '密码',
            dataIndex: 'student_pwd',
            key: '5',
        },
        {
            title: '操作',
            render: (item) => <a onClick={() => deletaStudent(item)}>删除</a>,
            key: '6',
        }
    ]

    useEffect(() => {
        props.getPlacementStudentPage()
        
    }, [props.getPlacementStudentPage])
    let {delateStudentIdList} = props.classmanagement

    
    //console.log(props, "props学生")
    let { placementStudentList, PlacementMangerRoomlist, PlacementMangerGradeList } = props.classmanagement
    const { getFieldDecorator } = props.form
    let deletaStudent = (item) => {
        console.log(item.subject_id)
        props.delateStudentId({
            id: item.subject_id
        })
        props.getPlacementStudentPage()
    }
    
    console.log(delateStudentIdList)
    
    let reset = () => {
        props.form.resetFields()
    }
    let handleSubmit = () => {

    }
    
    return (
        <div className={styles.wrap}>
            <h2>学生管理</h2>
            <div>
                <Form onSubmit={handleSubmit} className={styles.from}>
                    <Form.Item style={{ width: 200 }} className={styles.input}>
                        {getFieldDecorator('教室号', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(<Input placeholder="请输入学生姓名" />)}
                    </Form.Item>
                    <Form.Item style={{
                        width: 200
                    }}>
                        {getFieldDecorator('gender', {
                            rules: [{ required: true, message: 'Please select your gender!' }],
                        })(
                            <Select 
                                placeholder="请选择教室号"
                            >
                                {
                                    PlacementMangerRoomlist.map(item => {
                                        return (
                                            <Option value={item.room_id} key={item.room_id}>{item.room_text}</Option>
                                        )
                                    })
                                }
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item style={{
                        width: 200
                    }}>
                        {getFieldDecorator('genderr', {
                            rules: [{ required: true, message: 'Please select your gender!' }],
                        })(
                            <Select
                                placeholder="班级名"
                            >
                                {
                                    PlacementMangerGradeList.map(item => {
                                        return (
                                            <Option value={item.grade_id} key={item.grade_id}>{item.grade_name}</Option>
                                        )
                                    })
                                }
                            </Select>,
                        )}
                    </Form.Item>
                    <Button type="primary" className={styles.button} htmlType="submit">搜索</Button>
                    <Button type="primary" className={styles.button} onClick={reset}>重置</Button>
                </Form>
                <Table columns={columns} dataSource={placementStudentList}  rowKey='student_id'/>
            </div>
        </div>
    );
}
Student.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispachToProps = dispatch => {
    return {
        //获取页面展示数据
        getPlacementStudentPage: payload => {
            dispatch({
                type: "classmanagement/getPlacementStudentPage",
                payload
            })
        },
        delateStudentId: payload => {
            dispatch({
                type: "classmanagement/delateStudentId",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(Student));
