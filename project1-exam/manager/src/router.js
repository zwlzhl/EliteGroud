import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Login from './pages/login/IndexPage';
 import Home from './pages/Home/index'
import {connect} from 'dva';

// 引入国际化
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from './lang/zh-CN.js';
import enUS from './lang/en-US.js';

// 配置国际化字典
const localMap = {
  en: enUS,
  zh: zhCN
}
addLocaleData([...en, ...zh]);


const mapStateToProps = state=>{
  return {
    locale: state.global.locale
  }
}
let RouterView = connect(mapStateToProps)((props)=>{
    return (
      <IntlProvider locale={props.locale} messages={localMap[props.locale]}>
        <Router history={props.history}>
          <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </IntlProvider>
    );
})

function RouterConfig({ history }) {
  return <RouterView history={history} />
}

export default RouterConfig;
