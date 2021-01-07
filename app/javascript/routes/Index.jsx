import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'
import Signup from '../components/Signup'
import PostForm from '../components/PostForm'
import {useSelector, useDispatch} from 'react-redux'
import { useCookies } from 'react-cookie';
import {getCurrentUser } from "../actions/userActions";


function Routes() {
  const loggedInUser = useSelector(state => state.currentUser)
  const [cookies, setCookie] = useCookies(['user']);
  const dispatch = useDispatch()
  const token = document.querySelector('meta[name="csrf-token"]').content;
  useEffect(() => {
    if(loggedInUser && cookies["user"] == "undefined") {
      console.log(loggedInUser.id.to_s)
      setCookie('user', loggedInUser.id, {path: '/'})
    } else if (!loggedInUser && cookies["user"] != "undefined"){
      dispatch(getCurrentUser(cookies["user"]))

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
          <Route exact path='/posts/new'><PostForm /></Route>
         
        </Switch>
      </Router>
      </>
    )
}


export default Routes