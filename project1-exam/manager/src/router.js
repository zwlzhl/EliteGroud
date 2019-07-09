import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './pages/login/IndexPage';
import Home from './pages/Home/index'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
