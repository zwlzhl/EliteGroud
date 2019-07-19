import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Slider, Modal, Form, message } from 'antd';
import styles from "./index.scss";
import ReactMarkdown from 'react-markdown';

function Marking(props) {
    let id = props.location.search.split("&&")[0].split("=")[1]
    console.log(id, "iddd")
    useEffect(() => {
        props.getStudent({id})
    }, [])
    console.log(props, "阅卷")
    let { questions } = props.markingmanagement.studentDetaillist
    const [state, setstate] = useState(0)
    const [visible, unvisible] = useState(false)
    let handleOk = () => {
        props.submitStudent({
            id,
            score: state
        })
        unvisible(false)
    }
    let handleCancel = () => {
        unvisible(false)
    }
    let sliderChange = (value) => {
        setstate(value)
    }
    let submitNumber = () => {
        unvisible(true)

    }
    let { submitNumberCode } = props.markingmanagement
    //console.log(submitNumberCode)
    useEffect(() => {
        if (submitNumberCode === 1) {
            message.success("阅卷成功")
            // props.history.push("/home/pendingclass")
        } else if (submitNumberCode === 0) {
            message.error("阅卷失败")
        }
    }, [submitNumberCode])
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>阅卷</p>
            <div className={styles.wrap}>
                <div className={styles.wrapLeft}>
                    {
                        questions && questions.map((item, index) => {
                            return <div key={index}>
                                <p>{index + 1}.{item.title}<span className={styles.icon}>{item.questions_type_text}</span></p>
                                <ReactMarkdown
                                    className={styles.markdown}
                                    source={item.questions_stem}
                                />
                                <div className={styles.answer}>
                                    <div>
                                        <p>学生答案</p>
                                    </div>
                                    <div>
                                        <p>标准答案</p>
                                        <div className={styles.goodAnswer}>{item.questions_answer}</div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className={styles.wrapRight}>
                    <Form>
                        <h2>得分: <span className={styles.span}>{state}</span></h2>
                        <Form.Item>
                            <Slider defaultValue={0} className={styles.slider} onChange={(value) => sliderChange(value)} />
                            <Button type="primary" htmlType="submit" className={styles.button} onClick={submitNumber}>确定</Button>
                            <Modal
                                visible={visible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                cancelText="取消"
                                okText="确定"
                                okType="primary"
                                width="400px"
                                className={styles.modal}
                            >
                                <p>确定提交阅卷结果？</p>
                                <p>分数值是：<span>{state}</span></p>
                            </Modal>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
Marking.propTypes = {
};
const mapState = state => {
    return { ...state };
};
const mapDispatch = dispatch => {
    return {
        //获取试题详情
        getStudent: payload => {
            dispatch({
                type: "markingmanagement/getStudent",
                payload
            })
        },
        //提交批卷
        submitStudent: payload => {
            dispatch({
                type: "markingmanagement/submitStudent",
                payload
            })
        }
    }
};
export default connect(mapState, mapDispatch)(Marking);