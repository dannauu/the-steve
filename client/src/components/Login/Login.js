import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {
    const [showLogin, setShowLogin] = useState(true)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { loginEmail, loginPassword })
            .then(res => {
                console.log(res)
                localStorage.setItem("Token", res.data.token)
                window.location.href = '/'

            })
    }


    const handleLoginEmailChange = (e) => {
        setLoginEmail(e.target.value)
    }

    const handleLoginPasswordChange = (e) => {
        setLoginPassword(e.target.value)
    }

    return (
        <div className='p-2 rounded tilt-in-fwd-tr' style={{ display: showLogin ? "block" : "none" }}>
            <h1 className='text-center font-bold'>Login</h1>
            <form className='flex flex-col' onSubmit={handleLoginSubmit}>
                <label>Email:</label>
                <input className='border-2 border-black' onChange={handleLoginEmailChange} value={loginEmail}></input>
                <label>Password:</label>
                <input className='border-2 border-black' onChange={handleLoginPasswordChange} value={loginPassword}></input>
                <button className='bg-green-400 w-1/2 m-auto rounded mt-1'>Login</button>
            </form>
            <div className='flex flex-col items-center mt-10'>
                <h1 className='font-bold pb-1'>Not signed up yet?</h1>
                <Link to='/sign-up' className='bg-green-400 p-1 rounded w-1/3 text-center'>Click here</Link>
            </div>
        </div>
    )
}

export default Login