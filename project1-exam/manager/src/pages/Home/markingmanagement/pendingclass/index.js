import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Table } from 'antd';
function Pending(props) {
    const columns = [
        {
            title: '班级名',
            dataIndex: 'name',
            key: '1',
        },
        {
            title: '课程名称',
            dataIndex: 'age',
            key: '2',
        },
        {
            title: '阅卷状态',
            dataIndex: 'address',
            key: '3',
        },
        {
            title: '课程名称',
            dataIndex: 'address',
            key: '4',
        },
        {
            title: '成材率',
            dataIndex: 'address',
            key: '5',
        },
        {
            title: '操作',
            dataIndex: 'address',
            key: '6',
        }
    ];
    useEffect(() => {
        //获取用户信息

    }, [])

    return (
        <div>
            <h2>待批班级</h2>
            <Table columns={columns} dataSource="" className={styles.table} />
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

    }
}
export default connect(mapStateToProps, mapDispachToProps)(Pending);
