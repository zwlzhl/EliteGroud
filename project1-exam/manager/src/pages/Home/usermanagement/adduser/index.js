import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { Form, Input, Select, Button, message } from 'antd';
import styles from './index.scss'
import { injectIntl } from 'react-intl';


const { Option } = Select;

function addUsers(props) {
    //upAdup是修改state的唯一方法
    let [adup, upAdup] = useState(true);

    const { userList, viewList, apiList, userLists } = props;
    let [viewtext, upViewtext] = useState('');
    

    useEffect(() => {
        props.ident();
        props.viewAuthority();
        props.apiAuthority();
        props.getUser();
    }, [])
    console.log(props, "tiainajiyongh....")
    //弹框
    useEffect(() => {
        console.log(props.codeNum)
        if (props.codeNum === 1) {
            message.success('添加成功')
        } else if (props.codeNum === 0) {
            message.error("输入有误");
        }
    }, [props.codeNum])
    //切换tab
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
    //添加用户
    let hankAddUser = () => {
        props.form.validateFields((err, value) => {
            console.log(value)
            props.userAdd({
                user_name: value.username,
                user_pwd: value.password,
                identity_id: value.identity
            })
        })
    }
    //添加身份
    let hankIdent = () => {
        props.form.validateFields((err, value) => {
            props.addIdent({
                identity_text: value.identName
            })
        })
    }
    //更新用户
    let hankUpuser = () => {
        props.form.validateFields((err, value) => {
            console.log(value)
            props.upIdent({
                user_id: value.userId,
                user_name: value.upUsername,
                user_pwd: value.uPpassword,
                identity_id: value.upIdentity
            })
        })
    }
    //添加API权限
    let hankAddApi = () => {
        props.form.validateFields((err, value) => {
            console.log(value)
            props.addAuthorityApi({
                api_authority_text: value.apiText,
                api_authority_url: value.apiUrl,
                api_authority_method: value.apiMehtod
            })
        })
    }

    let hankAddView = () => {
        props.form.validateFields((err, value) => {
            viewList && viewList.forEach(item => {
                if (item.view_authority_id === value.viewAuthority) {
                    upViewtext(viewtext = item.view_authority_text)
                }
            })
            props.addAuthorityView({
                view_authority_text: viewtext,
                view_id: value.viewAuthority
            })
        })
    }

    let HankIdentityApi = () => {
        props.form.validateFields((err, value) => {
            // console.log(value)
            props.setIdentityApi({
                identity_id: value.identity,
                api_authority_id: value.apiId
            })
        })
    }

    let HankIdentityView = () => {
        props.form.validateFields((err, value) => {
            // console.log(value)
            props.setIdentityView({
                identity_id: value.identity,
                view_authority_id: value.IdentityView
            })
        })
    }
    //清除
    let reset = () => {
        props.form.resetFields();
    }

    let { getFieldDecorator } = props.form;

    return (
        <div className="add">
            <h3>添加用户</h3>
            <div className="content">
                <Form className={styles.wrap}>
                    <Form-Item class={styles.wrap_item} className="zxy">
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
                                        <Input placeholder="请输入用户名" type="username" />,
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
                                                userList && userList.map(item => {
                                                    return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                                })
                                            }
                                        </Select>,
                                    )
                                }
                                <div className={styles.btns}>
                                    <Button className={styles.sure} onClick={hankAddUser}>确定</Button>
                                    <Button className={styles.reset} onClick={reset} htmlType="reset">重置</Button>
                                </div>
                            </div> : <div className={styles.item_box}>
                                    {
                                        getFieldDecorator('userId', {
                                            rules: [{ required: true, message: '请选择用户id' }],
                                        })(
                                            <Select className={styles.select} placeholder="请选择身份id">
                                                {
                                                    userLists && userLists.map(item => {
                                                        return <Option key={item.user_id} value={item.user_id}>{item.user_name}</Option>
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
                                                    userList && userList.map(item => {
                                                        return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                                    })
                                                }
                                            </Select>,
                                        )
                                    }
                                    <div className={styles.btns}>
                                        <Button className={styles.sure} onClick={hankUpuser}>确定</Button>
                                        <Button className={styles.reset} onClick={reset}>重置</Button>
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
                                <Button className={styles.sure} onClick={hankIdent}>确定</Button>
                                <Button className={styles.reset} onClick={reset}>重置</Button>
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
                                <Button className={styles.sure} onClick={hankAddApi}>确定</Button>
                                <Button className={styles.reset} onClick={reset}>重置</Button>
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
                                    <Select className={styles.select} placeholder="试题详情">
                                        {
                                            viewList && viewList.map(item => {
                                                return <Option key={item.view_authority_id} value={item.view_authority_id}>{item.view_authority_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            <div className={styles.btns}>
                                <Button className={styles.sure} onClick={hankAddView}>确定</Button>
                                <Button className={styles.reset} onClick={reset}>重置</Button>
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
                                            userList && userList.map(item => {
                                                return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            {
                                getFieldDecorator('apiId', {
                                    rules: [{ required: true, message: '请选择api接口权限数据' }],
                                })(
                                    <Select className={styles.select} placeholder="请选择身份id">
                                        {
                                            apiList && apiList.map(item => {
                                                return <Option key={item.api_authority_id} value={item.api_authority_id}>{item.api_authority_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            <div className={styles.btns}>
                                <Button className={styles.sure} onClick={HankIdentityApi}>确定</Button>
                                <Button className={styles.reset} onClick={reset}>重置</Button>
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
                                            userList && userList.map(item => {
                                                return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            {
                                getFieldDecorator('IdentityView', {
                                    rules: [{ required: true, message: '请选择视图id' }],
                                })(
                                    <Select className={styles.select} placeholder="请选择已有视图">
                                        {
                                            viewList && viewList.map(item => {
                                                return <Option key={item.view_authority_id} value={item.view_authority_id}>{item.view_authority_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )
                            }
                            <div className={styles.btns}>
                                <Button className={styles.sure} onClick={HankIdentityView}>确定</Button>
                                <Button className={styles.reset} onClick={reset}>重置</Button>
                            </div>
                        </div>
                    </Form-Item>
                </Form>
            </div>
        </div>
    )
}
addUsers.propTypes = {};

const mapState = state => {
    return { ...state.addusers }
}

const mapDispatch = dispatch => {
    return {
        ident: () => {
            dispatch({
                type: "addusers/ident"
            });
        },
        viewAuthority: () => {
            dispatch({
                type: "addusers/viewAuthority"
            })
        },
        apiAuthority() {
            dispatch({
                type: "addusers/apiAuthority"
            })
        },
        getUser() {
            dispatch({
                type: "addusers/getUser"
            })
        },
        userAdd(payload) {
            dispatch({
                type: "addusers/userAdd",
                payload
            })
        },
        addIdent(payload) {
            dispatch({
                type: "addusers/addIdent",
                payload
            })
        },
        upIdent(payload) {
            dispatch({
                type: "addusers/upIdent",
                payload
            })
        },
        addAuthorityApi(payload) {
            dispatch({
                type: "addusers/addAuthorityApi",
                payload
            })
        },
        addAuthorityView(payload) {
            dispatch({
                type: "addusers/addAuthorityView",
                payload
            })
        },
        setIdentityApi(payload) {
            dispatch({
                type: "addusers/setIdentityApi",
                payload
            })
        },
        setIdentityView(payload) {
            dispatch({
                type: "addusers/setIdentityView",
                payload
            })
        },
    };
}

export default injectIntl(connect(mapState, mapDispatch)(Form.create()(addUsers)));