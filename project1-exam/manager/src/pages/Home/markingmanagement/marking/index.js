import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Form, Slider, Button } from "antd";
function Marking(props) {
    useEffect(() => {
        props.submitStudent()
    }, [])
    console.log(props, "props.......")
    return (
        <div className={styles.wrap}>
            <h2>阅卷</h2>
            <div>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    <Form>
                        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                            <h2>得分: <span>25</span></h2>
                            <Slider defaultValue={0} className={styles.slider}/>
                            <Button type="primary" htmlType="submit">确定</Button>
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
        submitStudent: payload => {
            dispatch({
                type: "markingmanagement/submitStudent",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(Marking));