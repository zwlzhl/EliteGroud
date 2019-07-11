
import React, { useEffect } from 'react';
import { connect } from 'dva';
import Editor from 'for-editor'
import { Input ,Select, Button,Form} from 'antd';
import styles from './index.scss'
// import axios from 'axios'
// const { Option } = Select;
function AddText(props) {
  //获取所有试题类型
  useEffect(() => {
    // console.log(props)
    // props.getQuestionTypes();
  }, [])
  const { getFieldDecorator } = props.form;
  return (
    <Form  className={styles.content}>
     <div className={styles.content}>
        <h2 className={styles.title}>添加试题</h2>
              <div className={styles.main}>
                    <div className={styles.markcont}>
                        <p>题目信息</p>
                          <Form.Item>
                              {getFieldDecorator('titleText', {
                                  validateTrigger:"onBlur",
                                  rules: [{ required: true, message: '标题不能为空' }],
                              })(
                                  <Input
                                  placeholder="请输入题目标题，不能超过20字"
                                  />,
                              )}
                          </Form.Item>
                          <p>题目管理</p>
                          <Form.Item>
                            {getFieldDecorator('value', {
                                rules: [{ required: true, message: "答案信息必填" }],
                                initialValue: '',
                            })(
                                <Editor height='auto'/>
                            )}
                        </Form.Item>
                       
                    </div>
                    <div>
                         <p>请选择考试类型：</p>
                         <Form.Item>
                            {getFieldDecorator('exam_id', {
                                rules: [{ required: true, message: "题目类型必选" }],
                                initialValue: "请选择题目类型"
                            })(
                              <Select style={{ width: 120 }}>
                               
                               
                              </Select>
                            )}
                        </Form.Item>
                        
                      </div>
                      <div>
                         <p>请选择课程类型：</p>
                         <Form.Item>
                            {getFieldDecorator('subject_id', {
                                rules: [{ required: true, message: "题目类型必选" }],
                                initialValue: "请选择题目类型"
                            })(
                              <Select  style={{ width: 120 }}>
                                
                             </Select>
                            )}
                        </Form.Item>
                      </div>
                      <div>
                         <p>请选择题目类型：</p>
                         <Form.Item>
                            {getFieldDecorator('questions_type_id', {
                                rules: [{ required: true, message: "题目类型必选" }],
                                initialValue: "请选择题目类型"
                            })(
                              <Select  style={{ width: 120 }}>
                                
                              </Select>
                            )}
                        </Form.Item>
                        
                      </div>
                      <div className={styles.markcont}>
                        <h2>答案信息</h2>
                        <Form.Item>
                            {getFieldDecorator('valueowen', {
                                rules: [{ required: true, message: "答案信息必填" }],
                                initialValue: '',
                            })(
                                <Editor height='auto'/>
                            )}
                        </Form.Item>
                       
                      </div>
                      <Button type="primary" htmlType="submit" >提交</Button>
                </div>
            </div> 
        </Form>
    
  );
}
AddText.propTypes = {
};
const mapStateToProps = (state) => {
  return {
    ...state.addText
  }

}
const mapdispatchToProps = (dispatch) => {
  return {

    // getQuestionTypes(){
    //   dispatch({
    //     type:"addText/QuestionTypes"
    //   })
    // },
  }
}
export default connect(mapStateToProps, mapdispatchToProps)(Form.create()(AddText));
