import React, { useState } from "react";


function Signup(props) {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
const signup = props.signup
const handleOnSubmit = (e) => {
    e.preventDefault()
    signup({username, email, password}, token)
    props.history.push('/')
}
const token = document.querySelector('meta[name="csrf-token"]').content;
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