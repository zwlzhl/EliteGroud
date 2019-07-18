import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Table } from 'antd';
function Pending(props) {
    useEffect(()=>{
        props.getStudentList()
    },[])
    //console.log(props, "yuejaun......")
    let {studentList} = props.markingmanagement
    //console.log(studentList, "studentList.....")
    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: "grade_name"
        },
        {
            title: '课程名称',
            dataIndex: 'subject_text',
            key: "subject_text"
        },
        {
            title: '阅卷状态',
            dataIndex: ''
        },
        {
            title: '课程名称',
            dataIndex: 'subject_text',
            key: "subject_text_1"
        },
        {
            title: '成材率',
            dataIndex: 'room_text',
            key: "room_text"
        },
        {
            title: '操作',
            render: (item)=><a onClick={()=>nextClass(item)} >批卷</a>
        }
    ];
    useEffect(() => {
        //获取用户信息

    }, [])
    let nextClass = (item) =>{
       // console.log(item, "item...........")
        props.history.push('/home/classmate?id=' + item.grade_id + '&&name='+ item.grade_name)
    }
    return (
        <div>
            <h2>待批班级</h2>
            <Table columns={columns} dataSource={studentList} className={styles.table} rowKey={studentList.grade_id} />
        </div>
    );
}
Pending.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state   
    }
}
const mapDispachToProps = dispatch => {
    return {
        getStudentList: payload =>{
            dispatch({
                type: "markingmanagement/getStudentlist",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Pending);
