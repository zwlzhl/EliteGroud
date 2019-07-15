import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Form, Input, Select, Button, Table } from 'antd'
const { Option } = Select
function Student(props) {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: '1',
        },
        {
            title: '学号',
            dataIndex: 'age',
            key: '2',
        },
        {
            title: '班级',
            dataIndex: 'address',
            key: '3',
        },
        {
            title: '教室',
            dataIndex: 'address',
            key: '4',
        },
        {
            title: '密码',
            dataIndex: 'address',
            key: '5',
        },
        {
            title: '操作',
            dataIndex: 'address',
            key: 'address',
        }
    ]
    useEffect(() => {
        //获取用户信息

    }, [])
    const { getFieldDecorator } = props.form
    return (
        <div className={styles.wrap}>
            <h2>学生管理</h2>
            <div>
                <Form>
                    <Form.Item style={{ width: 200 }} className={styles.input}>
                        {getFieldDecorator('教室号', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(<Input placeholder="请输入学生姓名" />)}
                    </Form.Item>
                    <Form.Item className={styles.input}>
                        <Select defaultValue="请选择教室号" style={{ width: 200 }}>
                            <Option value="jack">Jack</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item className={styles.input}>
                        <Select defaultValue="班级名" style={{ width: 200 }}>
                            <Option value="jack">Jack</Option>
                        </Select>
                    </Form.Item>
                    <Button type="primary" className={styles.button}>搜索</Button>
                    <Button type="primary" className={styles.button}>重置</Button>
                </Form>
                <Table columns={columns} dataSource="" />
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

    }
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(Student));
