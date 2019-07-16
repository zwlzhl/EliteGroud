import React, {useEffect} from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { NavLink, Switch, Route,Redirect } from 'dva/router'
import Text from './questionmanagement/text/index'
import AddText from './questionmanagement/addText/index'
import Classification from './questionmanagement/classification/index'
import SeeText from './questionmanagement/seeText/index'
import EditPage from './questionmanagement/editPage/index'
import Adduser from './usermanagement/adduser'
import Userdisplay from './usermanagement/userdisplay'
import AddExam from './examinationmanagement/addexam'
import ExaminationPapers from './examinationmanagement/examinationPapers'
import  Class from './classmanagement/Class'
import  Classroom from './classmanagement/classroom'
import  Student from './classmanagement/student'
import Pendingclass from './markingmanagement/pendingclass';
import Classmate from './markingmanagement/classmate/index';
import Marking from './markingmanagement/marking/index';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function Home(props) {
    useEffect(()=>{
        //获取用户信息
        props.getUserInfo()
    },[])
    const userName = props.login.userInfo.user_name
    return (
        <div className={styles.wrap}>
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <div className={styles.login}>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
                    </div>
                    <div className={styles.userInfo}>
                        <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" className={styles.userImg} />
                        <span style={{cursor: 'pointer'}}>{userName}</span>
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
                                        <span>试题管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><NavLink to="/home/addText">添加试题</NavLink></Menu.Item>
                                <Menu.Item key="2"><NavLink to="/home/classification">试题分类</NavLink></Menu.Item>
                                <Menu.Item key="3"><NavLink to="/home/seeText">查看试题</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>用户管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="4"><NavLink to="/home/adduser">添加用户</NavLink></Menu.Item>
                                <Menu.Item key="5"><NavLink to="/home/userdisplay">用户展示</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>考试管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6"><NavLink to="/home/addExamination">添加考试</NavLink></Menu.Item>
                                <Menu.Item key="7"><NavLink to="/home/testpaper">试卷列表</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>班级管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="8"><NavLink to="/home/class">班级管理</NavLink></Menu.Item>
                                <Menu.Item key="9"><NavLink to="/home/classroom">教室展示</NavLink></Menu.Item>
                                <Menu.Item key="10"><NavLink to="/home/student">学生展示</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub5"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>阅卷管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="11"><NavLink to="/home/pendingClass">待批班级</NavLink></Menu.Item>
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
                                <Route path="/home/testpaper" component={ExaminationPapers}></Route>

                                <Route path="/home/class" component={Class}></Route>
                                <Route path="/home/classroom" component={Classroom}></Route>
                                <Route path="/home/student" component={Student}></Route>
                                <Route path="/home/pendingClass" component={Pendingclass}></Route>
                                <Route path="/home/classmate" component={Classmate}></Route>
                                <Route path="/home/marking" component={Marking}></Route>

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
const mapStateToProps = state =>{
    return {
        ...state
    }
}
const mapDispachToProps = dispatch =>{
    return {
        getUserInfo: payload=>{
            dispatch({
                type: "login/getUserInfo",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Home);
