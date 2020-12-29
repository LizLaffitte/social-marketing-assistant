import React, { useState} from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import {login} from '../actions/userActions'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const [cookies, setCookie] = useCookies(['user'])
    const dispatch = useDispatch()
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setCookie('user', {username}, {path: '/'})
        dispatch(login({username, password}, token))
       history.push('/')
    }
    const token = document.querySelector('meta[name="csrf-token"]').content;
    return(
        <form onSubmit={handleOnSubmit}>
            <h1>Log in</h1>
            <label>Username: </label><br />
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} name="username" /><br /><br />
            <label>Password: </label> <br />
            <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} />
            <br /><br />
            <input type="submit" value="Log in"  />
        </form>
    )
}

export default Login