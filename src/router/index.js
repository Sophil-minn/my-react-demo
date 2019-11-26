//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件 
import TodoList from '../todolist/TodoList';
import Box from '../flex/Box';
import Home from '../Home';
//引入一些模块
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

function router() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todolist" component={TodoList} />
        <Route path="/box" component={Box} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router >
  );
}

export default router;