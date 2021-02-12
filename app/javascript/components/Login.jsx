import React, { useState} from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {login, twtLogin} from '../actions/userActions'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.currentUser)
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(login({username, password}, token))       
    }
    const token = document.querySelector('meta[name="csrf-token"]').content;
    return(
        <>
        <form onSubmit={handleOnSubmit}>
            <h1>Log in</h1>
            <label>Username: </label><br />
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} name="username" /><br /><br />
            <label>Password: </label> <br />
            <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} />
            <br /><br />
            <input type="submit" value="Log in"  />
        </form>
        <a href="/auth/twitter">Login with Twitter</a>
        </>
    )
}

export default Login