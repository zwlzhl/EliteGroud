import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import {Table, Select, Button } from 'antd'
const { Option } = Select

function ExaminationPapers(props) {
    useEffect(() => {
        props.getexamlist()
        props.Subject()
        props.examType()
        props.findList()
    }, [])
    let [subject_id, upSubject] = useState('');
    let [exam_id, upExam_id] = useState('');
    const { examTypeList, subjectList, examlistData} = props;
    // console.log(getexam_id)

    const datalist = [
        {
            title: "试卷信息",
            dataIndex: "room_text"
        }, {
            title: "班级",
            dataIndex: "grade_name"
        }, {
            title: "创建人",
            dataIndex: "user_name"
        }, {
            title: "开始时间",
            dataIndex: "start_time"
        }, {
            title: "结束时间",
            dataIndex: "end_time"
        }, {
            title: "操作",
        }
    ]
    //改变考试类型
    let handleChange = (value) => {
        upExam_id(exam_id = value);
    }
    //改变题目类型
    let handleChangeId = (value) => {
        upSubject(subject_id = value)
    }

    let handleFind = () => {
        props.findList({exam_id,subject_id})
    }
    return (
        <div>
            <div className={styles.title}>试卷列表</div>
            <div className={styles.top_Bom}>
                <div className={styles.Bom_item}>
                    <p>考试类型</p>
                    <Select
                        onChange={handleChange}
                        style={{ width: 150, margin: 15, height: 35 }}>
                        {
                            examTypeList && examTypeList.map((item) => {
                                return <Option key={item.exam_id}
                                    value={item.exam_id}
                                >{item.exam_name}</Option>
                            })
                        }
                    </Select>
                </div>
                <div className={styles.Bom_item}>
                    <p>课程</p>
                    <Select
                        onChange={handleChangeId}
                        style={{ width: 150, margin: 15, height: 35 }}>
                        {
                            subjectList && subjectList.map((item) => {
                                return <Option key={item.subject_id}
                                    value={item.subject_id}

                                >{item.subject_text}

                                </Option>
                            })
                        }
                    </Select>
                </div>
                <Button className={styles.Btn} style={{ width: 150, margin: 15 }} onClick={() => handleFind()} type="primary">查询</Button>
            </div>
            <div className="botom">
                <div className={styles.header}>
                    <h1>试卷列表</h1>
                    <h1>
                        <span className={styles.on}>全部</span>
                        <span>进行中</span>
                        <span>已结束</span>
                    </h1>
                </div>
                <Table columns={datalist} dataSource={examlistData}   />

            </div>
        </div>
    );
}
ExaminationPapers.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state.examinationmanagement
    }
}
const mapDispachToProps = dispatch => {
    return {
        getexamlist() {
            dispatch({
                type: "examinationmanagement/getexamlist"
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
        findList(){
            dispatch({
                type:"examinationmanagement/findList"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(ExaminationPapers);
