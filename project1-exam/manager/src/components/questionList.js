import React from 'react';
import { List, Button } from 'antd';
import { connect } from 'dva';

function QuestionList(props){
    let addQuestion=(item) => {
        props.addQuestionFn(item)
    }
    return (
        <div>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={props.props&&props.props}
                style={{padding:20}}
                pagination={{
                    pageSize: 6,
                }}
                renderItem={item => (                
                    <List.Item actions={[<Button type="primary" onClick={()=>addQuestion(item)}>添加</Button>] } style={{display:'flex',justifyContent:'space-between'}} className="table-list">
                        <div>
                            <p>{item.title}</p>
                            <div className="color">
                                <p className="content_every_cont_left_left_y">{item.questions_type_text}</p>
                                <p className="content_every_cont_left_center_y">{item.subject_text}</p>
                                <p className="content_every_cont_left_right_y">{item.exam_name}</p>
                            </div>
                            <p style={{color:'blue'}}>{item.user_name} 发布</p>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}

const mapState = state => {
    return state;
}
const mapDispatch = dispatch => {
    return {
        addQuestionFn(item){
            dispatch({
                type:'examinationmanagement/addQuestionFn',
                item
            })
        }
    }
}

export default connect(mapState,mapDispatch)(QuestionList)
