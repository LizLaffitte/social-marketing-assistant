import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'
import Signup from '../components/Signup'
import {useSelector, useDispatch} from 'react-redux'
import { useCookies } from 'react-cookie';
import { clearCurrentUser, setCurrentUser } from "../actions/userActions";


function Routes() {
  const loggedInUser = useSelector(state => state.currentUser)
  const [cookies] = useCookies(['user']);
  const dispatch = useDispatch()
  useEffect(() => {
    if(loggedInUser) {
      dispatch(setCurrentUser(loggedInUser))
    } else if (cookies["user"] != "undefined"){
      dispatch(setCurrentUser(cookies["user"]))
    }else {
      dispatch(clearCurrentUser())
    }
  })
 
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