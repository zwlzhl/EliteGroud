import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {NavLink,Switch,Route} from 'dva/router'
import Text from './text/index'
import AddText from './addText/index'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function Home(props) {
    console.log(props)
    return (
        <div className={styles.wrap}>
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <div className={styles.login}>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
                    </div>
                    <div className={styles.userInfo}>
                        <span className={styles.userImg}></span>
                        <span>chenmanjie</span>
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
                                <Menu.Item key="2"><NavLink to="/home/classification ">试题分类</NavLink></Menu.Item>
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
                                <Menu.Item key="7"><NavLink to="/home/testpaper ">试卷列表</NavLink></Menu.Item>
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
                                <Menu.Item key="10"><NavLink to="/home/student ">学生展示</NavLink></Menu.Item>
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
                                <Menu.Item key="11"><NavLink to="/home/pending">待批班级</NavLink></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '35px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className={styles.content}>
                        <Switch>
                            {/* <Route path="/home/addText"  component={Text}></Route> */}
                            <Route path="/home/pending"  component={Text}></Route>
                            <Route path="/home/addtext"  component={AddText}></Route>

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

export default connect()(Home);
