import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'
import Signup from '../components/Signup'
import {signup, login} from '../actions/userActions'
import {connect} from 'react-redux'
import { withCookies, Cookies } from 'react-cookie';



class Routes extends Component {
  loggedIn = () =>{
    return this.props.currentUser
}

  render(){
    const {login, signup} = this.props
    return (
      <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route exact path='/login' >
            {this.loggedIn() ? <Redirect to="/" /> : <Login login={login}  />}
          </Route>
          <Route exact path='/signup' >
            {this.loggedIn() ? <Redirect to="/" /> : <Signup signup={signup}  />}
          </Route>
         
        </Switch>
      </Router>
      </>
    )
  }
}
const mapStateToProps = ({currentUser, ownProps}) => ({currentUser, ownProps})
export default withCookies(connect(mapStateToProps, {signup, login})(Routes))