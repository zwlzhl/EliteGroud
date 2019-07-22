import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Layout, Menu, Breadcrumb, Dropdown, Icon, Select, Input } from 'antd';
import { NavLink, Switch, Route, Redirect } from 'dva/router'
import { injectIntl } from 'react-intl'
const { SubMenu } = Menu;
const { Option } = Select
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
function Home(props) {
    useEffect(() => {
        //获取用户信息
        props.getUserInfo()
    }, [])
    if (!props.myView.length) {
        return null;
    }
    console.log(props)
    let Upload = () => {
        props.history.push('/home/userUpload')
    }
    let menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => { Upload() }}>个人中心</Menu.Item>
            <Menu.Item key="2">我的班级</Menu.Item>
            <Menu.Item key="3">设置</Menu.Item>
            <Menu.Item key="4">退出登录</Menu.Item>
        </Menu>
    );

    const userName = props.login.userInfo.user_name
    return (
        <div className={styles.wrap}>
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <div className={styles.login}>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
                    </div>
                    {/* <button onClick={() => props.changeLocale(props.intl.locale == 'en' ? 'zh' : 'en')}>{props.intl.locale == 'en' ? '英文' : '中文'}</button> */}
                    <InputGroup style={{ position: 'absolute', top: '18px', left: '1200px' }}>
                        <Select defaultValue="中文" onChange={() => props.changeLocale(props.intl.locale === 'en' ? 'zh' : 'en')}>
                            <Option value="中文">中文</Option>
                            <Option value="英文">英文</Option>
                        </Select>
                    </InputGroup>
                    <div className={styles.userInfo} >
                        {
                            <Dropdown overlay={menu}>
                                <a className={["ant-dropdown-link", styles.headerBottomList]}>
                                    <img src={props.upload.img ? props.upload.img : 'https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png'} className={styles.userImg} />
                                    <span>{userName}</span>
                                </a>
                            </Dropdown>
                        }
                        {/* <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" />
                        <span style={{ cursor: 'pointer' }}>{userName}</span> */}
                    </div>
                </Header>
                <Layout>
                    <Sider width={200}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>{props.intl.formatMessage({ id: 'router.questions' })}</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><NavLink to="/home/addText">{props.intl.formatMessage({ id: 'router.questions.add' })}</NavLink></Menu.Item>
                                <Menu.Item key="2"><NavLink to="/home/classification">{props.intl.formatMessage({ id: 'router.questions.view' })}</NavLink></Menu.Item>
                                <Menu.Item key="3"><NavLink to="/home/seeText">{props.intl.formatMessage({ id: 'router.questions.type' })}</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>{props.intl.formatMessage({ id: 'usermanagement' })} </span>
                                    </span>
                                }
                            >
                                <Menu.Item key="4"><NavLink to="/home/adduser"> {props.intl.formatMessage({ id: 'usermanagement.adduser' })}</NavLink></Menu.Item>
                                <Menu.Item key="5"><NavLink to="/home/userdisplay">{props.intl.formatMessage({ id: 'usermanagement.showuser' })}</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>{props.intl.formatMessage({ id: 'exammangement' })}</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6"><NavLink to="/home/addExamination">{props.intl.formatMessage({ id: 'exammangement.addexam' })}</NavLink></Menu.Item>
                                <Menu.Item key="7"><NavLink to="/home/testpaper">{props.intl.formatMessage({ id: 'exammangement.examlist' })}</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>{props.intl.formatMessage({ id: 'classmangement' })}</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="8"><NavLink to="/home/class">{props.intl.formatMessage({ id: 'classmangement.class' })}</NavLink></Menu.Item>
                                <Menu.Item key="9"><NavLink to="/home/classroom">{props.intl.formatMessage({ id: 'classmangement.classroom' })}</NavLink></Menu.Item>
                                <Menu.Item key="10"><NavLink to="/home/student">{props.intl.formatMessage({ id: 'classmangement.student' })}</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub5"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>{props.intl.formatMessage({ id: 'markmangement' })}</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="11"><NavLink to="/home/pendingClass">{props.intl.formatMessage({ id: 'markmangement.pendding' })}</NavLink></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '35px 0' }}>
                            <Breadcrumb.Item>

                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className={styles.content}>
                            <Switch>
                                <Redirect from='/' exact to="/home/addText"></Redirect> 
                                {/* 配置用户拥有的路由 */}
                                {
                                    props.myView.map(item => {
                                        return item.children.map(value => {
                                            return <Route key={value.name} path={value.path} component={value.component}></Route>
                                        })
                                    })
                                }

                                {/* 配置用户禁止访问的路由 */}
                                {
                                    props.forbiddenView.map(item => {
                                        return <Redirect key={item.path} from={item.path} to="/403"></Redirect>
                                    })
                                }
                                {/* 配置不存在的路由 */}
                                <Redirect to="/404" ></Redirect>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}
Home.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state,
        myView: state.login.myView,
        forbiddenView: state.login.forbiddenView
    }
}
const mapDispachToProps = dispatch => {
    return {
        getUserInfo: payload => {
            dispatch({
                type: "login/getUserInfo",
                payload
            })
        },
        changeLocale(payload) {
            dispatch({
                type: 'global/updateLocale',
                payload
            })
        }
    }
}
export default injectIntl(connect(mapStateToProps, mapDispachToProps)(Home));
