import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function Home() {
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
                                <Menu.Item key="1">添加试题</Menu.Item>
                                <Menu.Item key="2">试题分类</Menu.Item>
                                <Menu.Item key="3">查看试题</Menu.Item>
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
                                <Menu.Item key="4">添加用户</Menu.Item>
                                <Menu.Item key="5">用户展示</Menu.Item>
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
                                <Menu.Item key="6">添加考试</Menu.Item>
                                <Menu.Item key="7">试卷列表</Menu.Item>
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
                                <Menu.Item key="8">班级管理</Menu.Item>
                                <Menu.Item key="9">教室展示</Menu.Item>
                                <Menu.Item key="10">学生展示</Menu.Item>
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
                                <Menu.Item key="11">待批班级</Menu.Item>>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '35px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className={styles.content}>
                            Content
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
