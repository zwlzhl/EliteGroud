import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Tabs, Table } from 'antd';
const { TabPane } = Tabs
function Userdisplay(props) {
    useEffect(() => {
        props.userColumnsList()
        props.identityData()
        props.api_authority()
        props.apiAuthorityApi()
        props.getviewuthority()
        props.identity_view_authority_relation()
    }, [])
    const userColumns = [
        {
            title: "用户名",
            dataIndex: "user_name"
        },
        {
            title: "密码",
            dataIndex: "user_pwd"
        }, {
            title: "身份",
            dataIndex: "identity_text"
        }
    ]
    const identityColumns = [
        {
            title: "身份名称",
            dataIndex: "identity_text"
        }
    ]
    const apiAuthorityColumns = [
        {
            title: "api权限名称",
            dataIndex: "api_authority_text"
        }, {
            title: "api权限url",
            dataIndex: "api_authority_url"
        }, {
            title: "api权限方法",
            dataIndex: "api_authority_method"
        }
    ]
    const apiAuthorityDataColumns = [
        {
            title: "身份",
            dataIndex: "identity_text"
        },
        {
            title: "api权限名称",
            dataIndex: "api_authority_text"
        },
        {
            title: "api权限url",
            dataIndex: "api_authority_url"
        },
        {
            title: "api权限方法",
            dataIndex: "api_authority_method"
        }
    ]
    const getviewuthorityColumns = [
        {
            title: "试图权限名称",
            dataIndex: "view_authority_text",

        }, {
            title: "视图id",
            dataIndex: "view_id"
        }
    ]
    const identityRelationColumns = [
        {
            title: "身份",
            dataIndex: "identity_text"
        },
        {
            title: "视图名称",
            dataIndex: "view_authority_text"
        }, {
            title: "视图id",
            dataIndex: "view_id"
        }
    ]
    return (
        <div>
            <div className={styles.container}>
                <h2>用户展示</h2>
                <div className="card-container">
                    <Tabs type="card" >
                        <TabPane tab="用户数据" key="1">
                            <h1>用户数据</h1>
                            <Table
                                columns={userColumns}
                                dataSource={props.userList && props.userList}
                                rowKey='user_id'
                            />
                        </TabPane>
                        <TabPane tab="身份数据" key="2">
                            <h1>身份数据</h1>
                            <Table
                                columns={identityColumns}
                                dataSource={props.identityList && props.identityList}
                                rowKey='identity_id'
                            />
                        </TabPane>
                        <TabPane tab="api接口权限" key="3">
                            <h1>api接口权限</h1>
                            <Table
                                columns={apiAuthorityColumns}
                                dataSource={props.apiAuthorityList && props.apiAuthorityList}
                                rowKey='api_authority_id'
                            />
                        </TabPane>
                        <TabPane tab="身份和api权限关系" key="4">
                            <h1>身份和api权限关系</h1>
                            <Table
                                columns={apiAuthorityDataColumns}
                                dataSource={props.apiAuthorityDataList && props.apiAuthorityDataList}
                                rowKey='identity_api_authority_relation_id'
                            />
                        </TabPane>
                        <TabPane tab="视图接口权限" key="5">
                            <h1>视图接口权限</h1>
                            <Table
                                columns={getviewuthorityColumns}
                                dataSource={props.getviewuthorityList && props.getviewuthorityList}
                                rowKey='view_id'
                            />
                        </TabPane>
                        <TabPane tab="身份和视图权限关系" key="6">
                            <h1>身份和视图权限关系</h1>
                            <Table
                                columns={identityRelationColumns}
                                dataSource={props.identityRelationList && props.identityRelationList}
                                rowKey='view_id' 
                            />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
Userdisplay.propTypes = {
};
const mapStateToProps = state => {
    return { ...state.usermanagement }
}
const mapDispachToProps = dispatch => {
    return {
        userColumnsList() {
            dispatch({
                type: "usermanagement/userColumnsList"
            })
        },
        identityData() {
            dispatch({
                type: 'usermanagement/identityData'
            })
        },
        api_authority() {
            dispatch({
                type: "usermanagement/api_authority"
            })
        },
        apiAuthorityApi() {
            dispatch({
                type: "usermanagement/apiAuthorityApi"
            })
        },
        getviewuthority() {
            dispatch({
                type: "usermanagement/getviewuthority"
            })
        },

        identity_view_authority_relation() {
            dispatch({
                type: "usermanagement/identity_view_authority_relation"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Userdisplay);
