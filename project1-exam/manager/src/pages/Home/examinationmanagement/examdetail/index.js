import React, {useEffect} from 'react';
import { connect } from 'dva';
//import ReactMarkdown  from "react-markdown"
import styles from './index.scss';

function Examdetail(props) {
    useEffect(()=>{
        //获取用户信息
    //   props.getDetail()
    },[])
    const {createPageList}=props;
    const {detail}=props.location
    let txt = JSON.parse(window.localStorage.getItem('list'))
    console.log( txt ,detail.item,createPageList)
    return (
        <div className={styles.box}>
        <h2>试题详情</h2>
        <div className={styles.center}>
          <div className={styles.left}>
            <div style={{ margin:'10px 0' }}>
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
                                    {/* <img src='https://raw.githubusercontent.com/JackCrysler/react-start/master/1.png' alt=""/>   */}
                                </h2>
                                <span>{item.questions_answer}</span>
                            </li>
                        </div>
                    })
                }
            </ul>
              {/* <h3>{detail.item.title}</h3>
              <div>
              <ReactMarkdown>
              {detail.item.exam_name}
              </ReactMarkdown>
              </div> */}
            </div>
          </div>
          <div className={styles.right}>
            {/* <ReactMarkdown >
            {detail.questions_answer}
            </ReactMarkdown> */}
            
          </div>
        </div>
    
    </div>
        // <div style={{ margin: '15px 0' }}>
        //       <h3>{detail.item.title}</h3>
        //       <span>{detail.item.exam_name}</span>
        //       <div>
        //       <ReactMarkdown>{detail.item.subject_text}</ReactMarkdown>
        //       </div>
        //     </div>
    );
}
Examdetail.propTypes = {
};
const mapStateToProps = state =>{
    return {
        ...state.examinationmanagement
    }
}
const mapDispachToProps = dispatch =>{
    return {
        getDetail(){
            dispatch({
                type:"examinationmanagement/getDetail"
            })
            
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Examdetail);
