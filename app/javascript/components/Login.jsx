import React, { Component, useState } from "react";

function Login() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
return(
    <form>
        <h1>Login</h1>
        <label>Username: </label><br />
        <input type="text" value={username} onChange={this.handleOnChange} name="username" /><br /><br />
        <label>Password: </label> <br />
        <input type="password" value={password} name="password" onChange={this.handleOnChange} />
        <br /><br />
        <input type="submit" value="Log In"  />
    </form>
)
}

export default Login