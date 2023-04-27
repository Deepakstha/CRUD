import React, { useState } from 'react'
import APIService from '../APIService'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginBtn = () => {
        APIService.LoginUser({ username, password }).then(resp => console.log(resp.token)).catch(error => console.log(error))
    }
    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="usernaem" placeholder='Enter Username' value={username} onChange={e => setUsername(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />

                </div>
                <button className='login ' onClick={loginBtn}>Login</button>


            </form>
        </>

    )
}

export default Login