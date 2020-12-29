import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'
import Signup from '../components/Signup'
import {useSelector} from 'react-redux'



function Routes() {
  const loggedInUser = useSelector(state => state.currentUser)
    return (
      <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route exact path='/login' >
            {loggedInUser ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path='/signup' >
            {loggedInUser ? <Redirect to="/" /> : <Signup  />}
          </Route>
         
        </Switch>
      </Router>
      </>
    )
}


export default Routes