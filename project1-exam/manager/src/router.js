import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './pages/login/IndexPage';
import Home from './pages/Home/index'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
