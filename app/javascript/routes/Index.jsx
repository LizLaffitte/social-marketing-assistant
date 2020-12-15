import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'

export default (
  <Router>
    <Switch>
        <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={Login} />
    </Switch>
  </Router>
)