import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'

function LoginPage(props) {
  //模拟compoentDidMont
  // useEffect(() => {
  //   props.login({ user_name: 'chenmanjie', user_pwd: 'Chenmanjie123!' });

  // }, [])
  //判断是否登录成功
  useEffect(()=>{
    console.log(props)
    if (props.isLogin === 1){
      console.log(11)
      message.success('登陆成功');
      let path = '/';
      if (props.location.search){
      
        path = decodeURIComponent(props.location.search.split('=')[1]);
        // console.log(path)
      }
      props.history.push(path);
    }else if(props.isLogin === 0){
      message.success('用户名或密码错误');
    }
  }, [props.isLogin])
  //点击事件
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password });
        // console.log('Received values of form: ', values);
      }
    })
  }

  //冲Form高阶组件中拿到校验
  const { getFieldDecorator } = props.form
  return (
    <div className="box" >
      <Form className="login-form" onSubmit={handleSubmit}>
        {/* 验证input框 */}
        <Form.Item>
          {getFieldDecorator('username', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: 'Please input your username!' },
              { min: 6, max: 15, message: 'Please input your correct username!' }
            ],
          })(

            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        {/* 验证密码框 */}
        <Form.Item>
          {getFieldDecorator('password', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: 'Please input your Password!' },
              { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: 'Please input your Password!' }
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}


        </Form.Item>
        <Form.Item>
          <Checkbox>记住密码</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>

    </div >
  );
}

LoginPage.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.login
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: payload => {
      dispatch({
        type: "login/login",
        payload
      })
    }

  }
}
//用Form.create把loginPage包裹
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginPage));
