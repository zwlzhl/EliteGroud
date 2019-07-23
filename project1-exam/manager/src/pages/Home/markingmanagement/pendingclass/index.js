import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Table } from 'antd';
import XLSX from 'xlsx'
function Pending(props) {
    useEffect(() => {
        props.getStudentList()
    }, [])
    //console.log(props, "yuejaun......")
    let { studentList } = props.markingmanagement
    //console.log(studentList, "studentList.....")
    // const columns = [
    //     {
    //         title: '班级名',
    //         dataIndex: 'grade_name',
    //         key: "grade_name"
    //     },
    //     {
    //         title: '课程名称',
    //         dataIndex: 'subject_text',
    //         key: "subject_text"
    //     },
    //     {
    //         title: '阅卷状态',
    //         dataIndex: ''
    //     },
    //     {
    //         title: '课程名称',
    //         dataIndex: 'subject_text',
    //         key: "subject_text_1"
    //     },
    //     {
    //         title: '成材率',
    //         dataIndex: 'room_text',
    //         key: "room_text"
    //     },
    //     {
    //         title: '操作',
    //         render: (item) => <a onClick={() => nextClass(item)} >批卷</a>
    //     }
    // ];
    useEffect(() => {
        //获取用户信息

    }, [])
    // 申明表格数据
    let [data, setData] = useState([]);
    var [columns, setColumns] = useState([]);

    // 处理表格上传
    let uploadExcel = e => {
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, { type: 'array' });

            /* DO SOMETHING WITH workbook HERE */

            // 读取第1张表
            var sheetName = workbook.SheetNames[0];
            var obj = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

            // 处理表格数据
            setData(obj);

            // 处理表头
            let columns = Object.keys(obj[0]).map(item => {
                return {
                    title: item,
                    dataIndex: item
                }
            })
            setColumns(columns);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
    //处理表头
    let nextClass = (item) => {
        // console.log(item, "item...........")
        props.history.push('/home/classmate?id=' + item.grade_id + '&&name=' + item.grade_name)
    }
    //处理excel导出
    let exportExcel = () => {
        // 1. 生成workSheet
        var ws = XLSX.utils.json_to_sheet(data);
        // 2. 生成workBook
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws);
        // 3. 导出workBook
        XLSX.writeFile(wb, 'out.xlsb');

    }
    return (
        <>
            <div>
                <h2>待批班级</h2>
                <Table columns={columns} dataSource={data} className={styles.table} rowKey="身份证号" />
            </div>
            <input type="file"
                accept="*"
                placeholder="上传Excel"
                onChange={uploadExcel}
            />
             <button onClick={()=>exportExcel()}>导出excel</button>
        </>
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
        getStudentList: payload => {
            dispatch({
                type: "markingmanagement/getStudentlist",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Pending);
