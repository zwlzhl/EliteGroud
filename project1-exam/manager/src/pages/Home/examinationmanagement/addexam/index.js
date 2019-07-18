import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Input, Select, Form, Button, DatePicker, InputNumber } from 'antd'
// const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select
function Addexam(props) {
    useEffect(() => {
        props.Subject()
        props.examType()
    }, [])
    const { examTypeList, subjectList } = props;
    //点击创建按钮 进行表单校验
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
            console.log()
            if (!err) {
                let item = {
                    subject_id: values.subject_id,
                    exam_id: values.exam_id,
                    title: values.value,
                    number: values.number,
                    start_time: values.date_time_picker * 1,
                    end_time: values.date_time * 1
                }
                let txt=window.localStorage.setItem('list', JSON.stringify(item));
                props.createPage(item)
                props.history.push('/home/createPage')
            }
        })
    }
    //开始时间
    let handelStart = (time) => {
        // console.log(new Date(time*1).toLocaleDateString())
        // getStartTime(start_time=time)
    }
    //结束时间
    let handelEnd = (time) => {
        // getEndTime(end_time=time)
    }
    let handleNumberChange = () => {

        // props.form.validatePrimeNumber((err,values) => { })
    }

    const { getFieldDecorator } = props.form
    return (
        <Form className={styles.content} onSubmit={handleSubmit}>
            <div className={styles.content}>
                <h2 className={styles.title}>添加考试</h2>
                <div className={styles.main}>
                    <div className={styles.markcont}>
                        <Form.Item label="试卷名称">
                            {getFieldDecorator('value', {
                                rules: [{ required: true, message: "请输入试卷名称" }],
                                initialValue: '',
                            })(<Input style={{ width: '300px' }} type="text" />)}
                        </Form.Item>
                    </div>
                    <div className={styles.item}>
                        <Form.Item label="选择考试">
                            {getFieldDecorator('exam_id', {
                                rules: [{ required: true, message: "请输入考试类型" }],
                                initialValue: ""
                            })(
                                <Select style={{ width: 120 }}>
                                    {
                                        examTypeList && examTypeList.map((item) => {
                                            return <Option key={item.exam_id}
                                                value={item.exam_id}
                                            >{item.exam_name}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                    </div>
                    <div className={styles.item}>
                        <Form.Item label="选择课程">
                            {getFieldDecorator('subject_id', {
                                rules: [{ required: true, message: "请选择课程类型" }],
                                initialValue: ""
                            })(
                                <Select style={{ width: 120 }}>
                                    {
                                        subjectList && subjectList.map((item) => {
                                            return <Option key={item.subject_id}
                                                value={item.subject_id}>
                                                {item.subject_text}
                                                </Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="设置题量">
                            {getFieldDecorator('number', {
                                rules: [{ required: true, message: "请设置题量" }],
                                initialValue: ""
                            })(<InputNumber min={3} onChange={handleNumberChange} />)}
                        </Form.Item>
                    </div>
                    <div style={{ width: '400px', height: '80px', display: 'flex', lineHeight: '80px' }}>
                        <Form.Item label="考试时间">
                            {getFieldDecorator('date_time_picker',
                                { rules: [{ type: 'object', required: true, message: '请选择开始时间' }] })(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onChange={handelStart} />,
                                )}
                        </Form.Item>
                        <Form.Item style={{ marginTop: '38px', marginLeft: '15px' }}>
                            {getFieldDecorator('date_time',
                                { rules: [{ type: 'object', required: true, message: '请选择结束时间' }] })(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onChange={handelEnd} />,
                                )}
                        </Form.Item>
                    </div>
                    <Button type="primary" htmlType="submit" style={{ marginTop: '50px' }}>创建试卷</Button>
                </div>
            </div>
        </Form>
    );
}
Addexam.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state.examinationmanagement
    }
}
const mapDispachToProps = dispatch => {
    return {
        createPage(payload) {
            dispatch({
                type: 'examinationmanagement/createPage',
                payload
            })
        },
        examType() {
            dispatch({
                type: "examinationmanagement/examType"
            })
        },
        Subject() {
            dispatch({
                type: "examinationmanagement/Subject"
            })
        },
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(Addexam));
