import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'
import Signup from '../components/Signup'
import {signup} from '../actions/userActions'
import {connect} from 'react-redux'

class Routes extends Component {
  render(){
    return (
      <>
      <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
          <Route path="/signup" exact render={props => <Signup {...props} signup={this.props.signup} />} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
      </>
    )
  }
}

export default connect(null, {signup})(Routes)