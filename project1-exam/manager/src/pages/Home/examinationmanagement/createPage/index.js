import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Button } from 'antd';

function CreatePage(props) {
    useEffect(() => {
        //   props.getdelete()
    }, [])
    //本地存储拿出来
    let txt = JSON.parse(window.localStorage.getItem('list'))
    let { createPageList,getdeleteList } = props;
    console.log(createPageList.questions)
    let handelClick=(item,index)=>{
       console.log(item.parent())
    }
    return (
        <div >
            <p style={{ fontSize: '18px', color: '#000' }}>创建试题</p>
            <Button className={styles.btn}>添加新题</Button>
            <div className={styles.main}>
                <h1 className={styles.title}>{txt.title}</h1>
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
                                <h2 style={{display:'flex',justifyContent:'space-between',padding:'0 15px'}}>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>{index + 1}:</span>
                                        <span style={{ fontSize: '16px' }}>{item.title}</span>
                                    </p>
                                    <p> <span style={{fontSize:'12px'}} onClick={()=>handelClick(item)}>删除</span></p>
                                    {/* <img src='https://raw.githubusercontent.com/JackCrysler/react-start/master/1.png' alt=""/>   */}
                                </h2>
                                <span>{item.questions_answer}</span>
                            </li>
                        </div>
                    })
                }
            </ul>
            <Button type="primary" htmlType="submit" style={{ marginTop: '50px' }}>创建试卷</Button>
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
        // getdelete(payload) {
        //     dispatch({
        //         type: 'examinationmanagement/getdelete',
        //         payload
        //     })
        // },
    }
}
export default connect(mapStateToProps, mapDispachToProps)(CreatePage);
