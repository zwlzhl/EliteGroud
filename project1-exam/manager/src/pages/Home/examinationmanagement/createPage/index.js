import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button, Drawer } from 'antd';
import TableView from '../../../../components/questionList'
function CreatePage(props) {
    useEffect(() => {
        //   props.getdelete()
    }, [props.createPageList.questions])
    //本地存储拿出来
    let txt = JSON.parse(window.localStorage.getItem('list'))
    let { createPageList } = props;
    console.log(createPageList.questions)
    const [showModal, unshowModal] = useState(false)
    //删除
    let handelClick = (index) => {
      props.questionDel(index)
    }
    //点击添加按钮
    let modalShow = () => {
        unshowModal(true)
    }
    //点击弹框
    let handelClose = () => {
        unshowModal(false)
    }
    //点击创建试卷
    let handleCreate = () => {
        props.history.push('/home/testpaper')

    }
    console.log(props.createPageList)
    return (
        <div >
            <p style={{ fontSize: '18px', color: '#000' }}>创建试题</p>
            <Button onClick={modalShow}>添加新题</Button>
            <div className={styles.main}>
                {/* <h1 className={styles.title}>{txt.title}</h1> */}
                <p>
                    <span>考试时间:1小时30分钟</span>
                    <span>监考人:刘宇</span>
                    <span>开始考试时间:2018.9.10</span>
                    <span>阅卷人:刘宇</span>
                </p>
            </div>
            <ul>
                {
                    createPageList.questions && createPageList.questions.map((item, index) => {
                        return <div key={index} className={styles.cont_list}>
                            <li>
                                <h2 style={{ display: 'flex', justifyContent: 'space-between', padding: '0 15px' }}>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>{index + 1}:</span>
                                        <span style={{ fontSize: '16px' }}>{item.title}</span>
                                    </p>
                                    <p> <span style={{ fontSize: '12px' }} onClick={() => handelClick(index)}>删除</span></p>
                                    {/* <img src='https://raw.githubusercontent.com/JackCrysler/react-start/master/1.png' alt=""/>   */}
                                </h2>
                                <span>{item.questions_answer}</span>
                            </li>
                        </div>
                    })
                }
            </ul>
            <Button type="primary" htmlType="submit" style={{ marginTop: '50px' }} onClick={handleCreate}>创建试卷</Button>
            <Drawer
                title="所有的题目"
                placement="right"
                closable={false}
                width="520"
                onClose={handelClose}
                visible={showModal}
            >
                {
                    props.ViewList.length?<TableView props={props.ViewList} /> : null
                }
            </Drawer>

        </div>


    );
}
CreatePage.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state.examinationmanagement
    }
}
const mapDispachToProps = dispatch => {
    return {
        getdelete(payload) {
            dispatch({
                type: 'examinationmanagement/getdelete',
                payload
            })
        },
        questionDel(index){
            dispatch({
                type:"examinationmanagement/questionDel",
                index
            })
        }

       
    }
}
export default connect(mapStateToProps, mapDispachToProps)(CreatePage);
