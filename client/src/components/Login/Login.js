import React, {useState} from 'react'
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
                window.location.href = '/search-customer'

            }) 
    }

    
    const handleLoginEmailChange = (e) => {
        setLoginEmail(e.target.value)
    }

    const handleLoginPasswordChange = (e) => {
        setLoginPassword(e.target.value)
    }

    return (
        <div className='border-2 border-red-500 p-2 rounded' style={{ display: showLogin ? "block" : "none" }}>
            <h1 className='text-center font-bold'>Login</h1>
            <form className='flex flex-col' onSubmit={handleLoginSubmit}>
                <label>Email:</label>
                <input className='border-2 border-black' onChange={handleLoginEmailChange} value={loginEmail}></input>
                <label>Password:</label>
                <input className='border-2 border-black' onChange={handleLoginPasswordChange} value={loginPassword}></input>
                <button className='bg-green-400 w-1/2 m-auto rounded mt-1'>Login</button>
            </form>

            <h1>Not signed up yet?</h1>
            <Link to='/sign-up'>here</Link>
        </div>
    )
}

export default Login