import React, { useState } from "react";

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const login = props.login
    const handleOnSubmit = (e) => {
        e.preventDefault()
        login({username, password}, token)
        props.history.push('/')
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