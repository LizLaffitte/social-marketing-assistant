import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logOut} from '../actions/userActions'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

function Home(){
    const loggedInUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    const history = useHistory()
    const [cookies, removeCookie] = useCookies(['user'])
    // const token = document.querySelector('meta[name="csrf-token"]').content;
    const logout = (e) => {
        e.preventDefault()
        removeCookie('user')
        // dispatch(logOut(token))
        dispatch(logOut())
    }
    return(
        <div className="main">
            <h1>Home</h1>
            <ul>
            {!loggedInUser ? <><li><Link to="/login">Login</Link> or </li> <Link to="/signup">Signup</Link> </> :  <><li><form id="logout-form" onSubmit={logout}><input type="submit" value="Log Out"  /></form></li></>}
                
               
                
            </ul>
        </div>
    )
}

export default Home