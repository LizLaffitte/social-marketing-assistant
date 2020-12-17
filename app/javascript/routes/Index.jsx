import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'
import Signup from '../components/Signup'

export default (
  <Router>
    <Switch>
        <Route path="/" exact component={Home}/>
      <Route path="/signup" exact component={Signup} />
      <Route path='/login' exact component={Login} />
    </Switch>
  </Router>
)