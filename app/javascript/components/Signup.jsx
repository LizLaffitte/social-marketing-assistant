import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {signup} from '../actions/userActions'

function Signup() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
const dispatch = useDispatch()
const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log("Test")
    dispatch({type: 'signup', credentials: {username, password, email}})
}
return(
    <form onSubmit={handleOnSubmit}>
        <h1>Sign Up</h1>
        <label>Username: </label><br />
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} name="username" /><br /><br />
        <label>Email Address: </label><br />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" /><br /><br />
        <label>Password: </label> <br />
        <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} />
        <br /><br />
        <input type="submit" value="Sign up"  />
    </form>
)
}

export default Signup