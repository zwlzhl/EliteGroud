import React from 'react';
import { connect } from 'dva';
import { Input, Select, Form ,Button,Modal} from 'antd';
import styles from './index.scss'
import Editor from 'for-editor';
const { Option } = Select;
const { confirm } = Modal;
function EditPage(props) {
    const { edit } = props;
    const { getFieldDecorator } = props.form;
    let { ViewList, SubList, ExamList, TypeList } = props;
    console.log(props.edit.questions_id)
    // console.log(props.location.params.item.questions_type_id)
    //提交按钮
    function showConfirm(e) {
        confirm({
          title: '您要修改吗?',
          content: '确定要修改这道题吗?',
          onOk() {
              props.form.validateFields((err,values)=>{
                  if(!err){
                      let exam={
                          ...values,
                          question_id:props.edit.questions_id
                      }
                      props.upDataQuestions(exam)
                  }
              })

            confirm({
                title:"更新失败",
               
            })
            // return new Promise((resolve, reject) => {
            //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            // }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {
            confirm({
                title:"更新错误"
            })
          },
        });
      }
      
    //点击编辑页面
    return (
        <div>
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
                                    TypeList && TypeList.map(Item => {
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
                                    SubList && SubList.map(Item => {
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
                                    ExamList && ExamList.map(Item => {
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
        <Button type="primary" className={styles.Btn} style={{ width: 150, margin: 15 }} onClick={showConfirm}>提交</Button>
    </div>
    );
}
EditPage.propTypes = {};

const mapStateToProps = (state) => {
    return {...state.questions}
}
const mapDispatchToProps = (dispatch) => {
    return {
        upDataQuestions(payload){
            console.log(payload)
            dispatch({
                type:"questions/upDataQuestions",
                payload
            })    
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(EditPage));
