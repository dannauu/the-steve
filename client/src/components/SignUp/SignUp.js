import React, {useState} from 'react'
import axios from 'axios'

const SignUp = () => {
    const [signUpEmail, setUpSignUpEmail] = useState('')
    const [signUpPassword, setUpSignUpPassword] = useState('')

    const handleEmailChange = (e) => {
        setUpSignUpEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setUpSignUpPassword(e.target.value)
    }


    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/create-user', {
                email: signUpEmail,
                password: signUpPassword
            }).then(res => {
                console.log(res)
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='border-2 border-blue-500 p-2 rounded'>
            <h1 className='text-center font-bold'>Sign Up</h1>
            <form className='flex flex-col' onSubmit={handleSignUpSubmit}>
                <label>Email:</label>
                <input className='border-2 border-black' onChange={handleEmailChange} value={signUpEmail} type='email' placeholder='johnsmith123@gmail.com'></input>
                <label>Password:</label>
                <input className='border-2 border-black' onChange={handlePasswordChange} value={signUpPassword} type='password'></input>
                <label>Confirm Password:</label>
                <input className='border-2 border-black'></input>
                <button className='bg-green-400 w-1/2 m-auto rounded mt-1'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp