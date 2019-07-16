import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { Form, Input, Select, Button } from 'antd';
import styles from './index.scss'

const { Option } = Select
function addUsers(props) {
    useEffect(() => {
        props.userIdentity()
    }, [])
    
    //用户数据、用户标识
    let { identityData, userUserData, viewAuthorityData, apiAuthorityData } = props.usermanagement
    //console.log(apiAuthorityData, "apiAuthorityData.......")
    // console.log(props, "props......")
    
    let [adup, upAdup] = useState(true);
    let { getFieldDecorator } = props.form;
    let changeActive = e => {
        if (e.target.innerHTML === '更新用户') {
            upAdup(adup = false)
            e.target.className = styles.active;
            e.target.previousSibling.className = '';
        } else {
            upAdup(adup = true)
            e.target.className = styles.active;
            e.target.nextSibling.className = '';
        }
    }
    //点击添加用户
    let addUser = () => {
        props.form.validateFields((err, value) => {
            props.addUserUser({
                user_name: value.username,
                user_pwd: value.password,
                identity_id: value.identity
            })
        })
    }
    //点击更新用户
    let updateUser = () => {
        props.form.validateFields((err, value) => {
            // console.log(value, "undata....")
        })
    }
    return (
        <div className="add">
            <h3>添加用户</h3>
            <div className="content">
                <Form className={styles.wrap}>
                    <Form-Item class={styles.wrap_item}>
                        <div className={styles.tits} onClick={changeActive}>
                            <p className={adup ? styles.active : null}>添加用户</p>
                            <p className={adup ? null : styles.active}>更新用户</p>
                        </div>
                        {
                            adup ? <div className={styles.item_box}>
                                {
                                    getFieldDecorator('username', {
                                        rules: [{ pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '请输入用户名' }],
                                    })(
                                        <Input placeholder="请输入用户名" />,
                                    )
                                }
                                {
                                    getFieldDecorator('password', {
                                        rules: [{ pattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/, message: '请输入密码' }],
                                    })(
                                        <Input type="password" placeholder="请输入密码" />,
                                    )
                                }
                                {
                                    getFieldDecorator('identity', {
                                        rules: [{ required: true, message: '请选择身份id' }],
                                    })(
                                        <Select className={styles.select} placeholder="请选择身份id">
                                            {
                                                identityData.map(item => {
                                                    return (
                                                        <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                                    )
                                                })
                                            }
                                        </Select>,
                                    )
                                }
                                <div className={styles.btns}>
                                    <Button className={styles.sure} onClick={addUser}>确定</Button>
                                    <Button className={styles.reset}>重置</Button>
                                </div>
                            </div> : <div className={styles.item_box}>
                                    {
                                        getFieldDecorator('userId', {
                                            rules: [{ required: true, message: '请选择用户id' }],
                                        })(
                                            <Select className={styles.select} placeholder="请选择用户id">
                                                {
                                                    userUserData.map(item => {
                                                        return (
                                                            <Option value={item.user_id} key={item.user_id}>{item.user_name}</Option>
                                                        )
                                                    })
                                                }
                                            </Select>,
                                        )
                                    }
                                    {
                                        getFieldDecorator('upUsername', {
                                            rules: [{ pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '请输入用户名' }],
                                        })(
                                            <Input placeholder="请输入用户名" />,
                                        )
                                    }
                                    {
                                        getFieldDecorator('uPpassword', {
                                            rules: [{ pattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/, message: '请输入密码' }],
                                        })(
                                            <Input type="password" placeholder="请输入密码" />,
                                        )
                                    }
                                    {
                                        getFieldDecorator('upIdentity', {
                                            rules: [{ required: true, message: '请选择身份id' }],
                                        })(
                                            <Select className={styles.select} placeholder="请选择身份id">
                                                {
                                                    identityData.map(item => {
                                                        return (
                                                            <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                                        )
                                                    })
                                                }
                                            </Select>,
                                        )
                                    }
                                    <div className={styles.btns}>
                                        <Button className={styles.sure} onClick={updateUser}>确定</Button>
                                        <Button className={styles.reset}>重置</Button>
                                    </div>
                                </div>
                        }
                    </Form-Item>
                    <Form-Item class={styles.wrap_item}>
                        <div className={styles.tits}>
                            <p className={styles.active}>添加身份</p>
                        </div>
                        <div className={styles.item_box}>
                            {
                                getFieldDecorator('identName', {
                                    rules: [{ required: true, message: '请输入身份名称' }],
                                })(
                                    <Input placeholder="请输入身份名称" />,
                                )
                            }
                            <div className={styles.btns}>
                                <Button className={styles.sure}>确定</Button>
                                <Button className={styles.reset}>重置</Button>
                            </div>
                        </div>
                    </Form-Item>
                    <Form-Item class={styles.wrap_item}>
                        <div className={styles.tits}>
                            <p className={styles.active}>添加api接口权限</p>
                        </div>
                        <div className={styles.item_box}>
                            {
                                getFieldDecorator('apiText', {
                                    rules: [{ required: true, message: '请输入api接口权限名称' }],
                                })(
                                    <Input placeholder="请输入api接口权限名称" />,
                                )
                            }
                            {
                                getFieldDecorator('apiUrl', {
                                    rules: [{ required: true, message: '请输入api接口权限url' }],
                                })(
                                    <Input placeholder="请输入api接口权限url" />,
                                )
                            }
                            {
                                getFieldDecorator('apiMehtod', {
                                    rules: [{ required: true, message: '请输入api接口权限方法' }],
                                })(
                                    <Input placeholder="请输入api接口权限方法" />,
                                )
                            }
                            <div className={styles.btns}>
                                <Button className={styles.sure}>确定</Button>
                                <Button className={styles.reset}>重置</Button>
                            </div>
                        </div>
                    </Form-Item>
                    <Form-Item class={styles.wrap_item}>
                        <div className={styles.tits}>
                            <p className={styles.active}>添加视图接口权限</p>
                        </div>
                        <div className={styles.item_box}>
                            {
                                getFieldDecorator('viewAuthority', {
                                    rules: [{ required: true, message: '请输入身份名称' }],
                                })(
                                    <Select className={styles.select} placeholder="请选择已有视图">
                                        {
                                            viewAuthorityData.map(item => {
                                                return (
                                                    <Option value={item.view_authority_id} key={item.view_authority_id}>{item.view_authority_text}</Option>
                                                )
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            <div className={styles.btns}>
                                <Button className={styles.sure}>确定</Button>
                                <Button className={styles.reset}>重置</Button>
                            </div>
                        </div>
                    </Form-Item>
                    <Form-Item class={styles.wrap_item}>
                        <div className={styles.tits}>
                            <p className={styles.active}>给身份设置api接口权限</p>
                        </div>
                        <div className={styles.item_box}>
                            {
                                getFieldDecorator('identity', {
                                    rules: [{ required: true, message: '请选择身份id' }],
                                })(
                                    <Select className={styles.select} placeholder="请选择身份id">
                                        {
                                            identityData.map(item => {
                                                return (
                                                    <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                                )
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            {
                                getFieldDecorator('apiId', {
                                    rules: [{ required: true, message: '请选择api接口权限数据' }],
                                })(
                                    <Select className={styles.select} placeholder="请选择api接口权限数据">
                                        {
                                            apiAuthorityData.map(item => {
                                                return (
                                                    <Option value={item.api_authority_id} key={item.api_authority_id}>{item.api_authority_text}</Option>
                                                )
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            <div className={styles.btns}>
                                <Button className={styles.sure}>确定</Button>
                                <Button className={styles.reset}>重置</Button>
                            </div>
                        </div>
                    </Form-Item>
                    <Form-Item class={styles.wrap_item}>
                        <div className={styles.tits}>
                            <p className={styles.active}>给身份设置视图权限</p>
                        </div>
                        <div className={styles.item_box}>
                            {
                                getFieldDecorator('identity', {
                                    rules: [{ required: true, message: '请选择身份id' }],
                                })(
                                    <Select className={styles.select} placeholder="请选择身份id">
                                        {
                                            identityData.map(item => {
                                                return (
                                                    <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                                )
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            {
                                getFieldDecorator('IdentityView', {
                                    rules: [{ required: true, message: '请选择视图id' }],
                                })(
                                    <Select className={styles.select} placeholder="请选择视图id">
                                        {
                                            viewAuthorityData.map(item => {
                                                return (
                                                    <Option value={item.view_authority_id} key={item.view_authority_id}>{item.view_authority_text}</Option>
                                                )
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            <div className={styles.btns}>
                                <Button className={styles.sure}>确定</Button>
                                <Button className={styles.reset}>重置</Button>
                            </div>
                        </div>
                    </Form-Item>
                </Form>
            </div>
        </div>
    )
}
addUsers.propTypes = {};

const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        //获取页面数据
        userIdentity: payload => {
            dispatch({
                type: "usermanagement/getUserIdentity",
                payload
            })
        },
        //添加用户
        addUserUser: payload => {
            dispatch({
                type: "usermanagement/adduser"
            })
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(addUsers));