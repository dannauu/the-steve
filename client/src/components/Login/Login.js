import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {
    const [showLogin, setShowLogin] = useState(true)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { loginEmail, loginPassword })
            .then(res => {
                console.log(res.data);
                localStorage.setItem("token", "token123")
                window.location.reload()
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
        </div>
    )
}

export default Login