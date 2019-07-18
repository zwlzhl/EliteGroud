import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import {Table, Select, Button } from 'antd'
import { Link } from 'dva/router';
const { Option } = Select
const ButtonBtn = Button.Group;
function ExaminationPapers(props) {
    useEffect(() => {
        props.getexamlist()
        props.Subject()
        props.examType()
        props.findList()
    }, [])
    
    let [subject_id, upSubject] = useState('');
    let [exam_id, upExam_id] = useState('');
    const { examTypeList, subjectList, examlistData } = props;


    const datalist = [
        {
            key: "0",
            title: "试卷信息",
            dataIndex: "title",
            render: (tages, obj) => <div>
                <h4>{tages}</h4>
                <p>
                    <span style={{ marginRight: '10px' }}>考试时间：{computTime(obj)}</span>
                    <span>{obj.number}道题作弊{obj.status}分</span>
                </p>
            </div>
        }, {
            key: "1",
            title: "班级",
            dataIndex: "grade_name",
            render: (tags, obj) => <div>
                <h4>考试班级</h4>
                {
                    tags.map((it, ind) => {
                        return <p key={ind} style={{ margin: 0 }}>{it}</p>
                    })
                }
            </div>
        }, {
            key: "2",
            title: "创建人",
            dataIndex: "user_name"
        }, {
            key: "3",
            title: "开始时间",
            dataIndex: "start_time",
            render: (time) => <div>
                <p>{new Date(time * 1).toLocaleDateString()}&nbsp;&nbsp;{new Date(time * 1).toLocaleTimeString()}</p>
            </div>
        }, {
            key: "4",
            title: "结束时间",
            dataIndex: "end_time",
            render: (time) => <div>
                <p>{new Date(time * 1).toLocaleDateString()}&nbsp;&nbsp;{new Date(time * 1).toLocaleTimeString()}</p>
            </div>
        }, {
            key: "5",
            title: "操作",
            render: (key, p) =>
                <Link to={{ pathname: '/home/examdetail', detail: { item: p }, params: `id=${p.exam_exam_id}` }}>详情</Link>
        }
    ]
    // 计算考试时间
    function computTime(obj) {
        let startTime = obj.start_time * 1;
        let endTime = obj.end_time * 1;
        let newTime = endTime - startTime;
        //计算出小时数
        var leave1 = newTime % (24 * 3600 * 1000);
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000);
        var minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000);
        var seconds = Math.round(leave3 / 1000);
        return hours + ":" + minutes + ":" + seconds;
    }
    //改变考试类型
    let handleChange = (value) => {
        upExam_id(exam_id = value);
    }
    //改变题目类型
    let handleChangeId = (value) => {
        upSubject(subject_id = value)
    }

    let handleFind = () => {
        props.findList({ exam_id, subject_id })
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
                    <ButtonBtn className='btn'>
                        <Button >全部</Button>
                        <Button >进行中</Button>
                        <Button >已结束</Button>
                    </ButtonBtn>
                </div>
                <Table columns={datalist} dataSource={examlistData} rowKey='exam_exam_id' />
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
        findList() {
            dispatch({
                type: "examinationmanagement/findList"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(ExaminationPapers);
