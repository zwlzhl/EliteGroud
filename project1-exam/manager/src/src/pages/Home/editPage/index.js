import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Input, Select, Button, Form } from 'antd';
import styles from './index.scss'
import Editor from 'for-editor';
const { Option } = Select
function EditPage(props) {

    const { edit } = props;

    // let [subject_text,upSubject] = useState('');
    // console.log(subject_text)
    const { getFieldDecorator } = props.form;
    let { ViewList, subjectList, examTypeList, TypeList } = props;
    console.log(ViewList)
    //点击编辑页面
    let handelEdit = () => {

    }
    return (
        <Form className={styles.content}>
            <div className={styles.content}>
                <h2 className={styles.title}>编辑试题</h2>
                <Form.Item>
                    {getFieldDecorator('titleText', {
                        rules: [{ required: true, message: "答案信息必填" }],
                        initialValue: edit.title,
                    })(<Input
                        placeholder="请输入题目标题，不能超过20字"
                    />,
                    )}
                </Form.Item>
                <div>
                    <p>题目主题</p>
                    <Form.Item>
                        {getFieldDecorator('value', {
                            rules: [{ required: true, message: "答案信息必填" }],
                            initialValue: edit.questions_stem,
                        })(
                            <Editor height='auto' />
                        )}
                    </Form.Item>
                </div>

                <div>
                    <p>请选择考试类型：</p>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "题目类型必填" }],
                            initialValue: edit.exam_name,
                        })(
                            <Select style={{ width: 120 }}>
                                {
                                    examTypeList && examTypeList.map(Item => {
                                        return <Option key={Item.exam_id}>{Item.exam_name}</Option>
                                    })
                                }
                            </Select>
                        )}
                    </Form.Item>
                </div>
                <div>
                    <p>请选择课程类型：</p>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "题目类型必填" }],
                            initialValue: edit.subject_text,
                        })(
                            <Select style={{ width: 120 }}>
                                {
                                    subjectList && subjectList.map(Item => {
                                        return <Option key={Item.subject_id}>{Item.subject_text}</Option>
                                    })
                                }
                            </Select>
                        )}
                    </Form.Item>
                </div>
                <div>
                    <p>请选择题目类型：</p>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "题目类型必填" }],
                            initialValue: edit.questions_type_text,
                        })(
                            <Select style={{ width: 120 }}>
                                {
                                    TypeList && TypeList.map(Item => {
                                        return <Option key={Item.questions_type_id}>{Item.questions_type_text}</Option>
                                    })
                                }
                            </Select>
                        )}
                    </Form.Item>
                </div>
                <div>
                    <p>答案信息</p>
                    <Form.Item>
                        {getFieldDecorator('value', {
                            rules: [{ required: true, message: "答案信息必填" }],
                            initialValue: edit.questions_answer,
                        })(
                            <Editor height='auto' />
                        )}
                    </Form.Item>
                </div>
            </div>
        </Form>
    );
}
EditPage.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        ...state.questions
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(EditPage));
