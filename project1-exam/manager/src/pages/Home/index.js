import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Layout, Menu, Breadcrumb, Icon, Select, Input } from 'antd';
import { NavLink, Switch, Route, Redirect } from 'dva/router'
import Text from './questionmanagement/text/index'
import AddText from './questionmanagement/addText/index'
import Classification from './questionmanagement/classification/index'
import SeeText from './questionmanagement/seeText/index'
import EditPage from './questionmanagement/editPage/index'
import Adduser from './usermanagement/adduser'
import Userdisplay from './usermanagement/userdisplay'
import AddExam from './examinationmanagement/addexam'
import CreatePage from './examinationmanagement/createPage'
import ExaminationPapers from './examinationmanagement/examinationPapers'
import Class from './classmanagement/Class'
import Classroom from './classmanagement/classroom'
import Student from './classmanagement/student'
import Pendingclass from './markingmanagement/pendingclass';

import Examdetail from './examinationmanagement/examdetail'
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

//    let handleChange=value=>{
//     {props.intl.locale == 'en' ? '英文' : '中文'}
//     }
    const userName = props.login.userInfo.user_name
    return (
        <div className={styles.wrap}>
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <div className={styles.login}>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
                    </div>
                    {/* <button onClick={() => props.changeLocale(props.intl.locale == 'en' ? 'zh' : 'en')}>{props.intl.locale == 'en' ? '英文' : '中文'}</button> */}
                    <InputGroup style={{position: 'absolute', top: '18px', left: '1200px'}}>
                        <Select defaultValue="中文" onChange={()=>props.changeLocale(props.intl.locale == 'en' ? 'zh' : 'en')}>
                            <Option value="中文">中文</Option>
                            <Option value="英文">英文</Option>
                        </Select>
                    </InputGroup>
                    <div className={styles.userInfo}>
                        <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" className={styles.userImg} />
                        <span style={{ cursor: 'pointer' }}>{userName}</span>
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
                                <Route path="/home/addText" component={AddText}></Route>
                                <Route path="/home/classification" component={Classification}></Route>
                                <Route path="/home/seeText" component={SeeText}></Route>
                                <Route path="/home/pending" component={Text}></Route>
                                <Route path="/home/editPage" component={EditPage}></Route>
                                <Route path="/home/adduser" component={Adduser}></Route>
                                <Route path="/home/userdisplay" component={Userdisplay}></Route>

                                <Route path="/home/addExamination" component={AddExam}></Route>
                                <Route path="/home/createPage" component={CreatePage}></Route>
                                <Route path="/home/testpaper" component={ExaminationPapers}></Route>
                                <Route path="/home/examdetail" component={Examdetail}></Route>

                                <Route path="/home/class" component={Class}></Route>
                                <Route path="/home/classroom" component={Classroom}></Route>
                                <Route path="/home/student" component={Student}></Route>
                                <Route path="/home/pendingClass" component={Pendingclass}></Route>



                                <Redirect from='/home' to="/home/addText"></Redirect>
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
        ...state
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
