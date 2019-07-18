import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Form, Slider, Button, Modal } from "antd";
function Marking(props) {
    useEffect(() => {
        props.getStudent()
    }, [])
    console.log(props, "props.......")
    //let a = props.markingmanagement.number
    const [state, setstate] = useState(0)
    const [visible, unvisible] = useState(false)
    let handleOk = () =>{
        props.submitStudent({
            score: state
        })
        unvisible(false)
    }
    let handleCancel = () =>{
        unvisible(false)
    }
    let sliderChange = (value) => {
        setstate(value)
    }
    let submitNumber = () => {
        unvisible(true)
        
    }
    return (
        <div className={styles.wrap}>
            <h2>阅卷</h2>
            <div>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    <Form>
                        <h2>得分: <span className={styles.span}>{state}</span></h2>
                        <Form.Item>
                            <Slider defaultValue={0} className={styles.slider} onChange={(value) => sliderChange(value)} />
                            <Button type="primary" htmlType="submit" className={styles.button} onClick={submitNumber}>确定</Button>
                            <Modal
                                visible={visible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                cancelText= "取消"
                                okText= "确定"
                                okType= "primary"
                                width= "400px"
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
const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispachToProps = dispatch => {
    return {
        getStudent: payload => {
            dispatch({
                type: "markingmanagement/getStudent"
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
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(Marking));