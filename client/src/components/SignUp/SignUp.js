import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
    const [signUpEmail, setUpSignUpEmail] = useState('')
    const [signUpPassword, setUpSignUpPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [companyName, setCompanyName] = useState('')

    const handleEmailChange = (e) => {
        setUpSignUpEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setUpSignUpPassword(e.target.value)
    }



    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        if (signUpPassword === confirmPassword) {
            console.log('they match')
            try {
                const response = await axios.post('http://localhost:3001/create-user', {
                    email: signUpEmail,
                    password: signUpPassword,
                    firstName: firstName,
                    lastName: lastName,
                    companyName: companyName
                }).then(res => {
                    console.log(res)
                    window.location.href = '/'
                })
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('they dont match')
        }

    }


    return (
        <div className='border-2 border-blue-500 p-2 rounded tilt-in-fwd-tr'>
            <h1 className='text-center font-bold'>Sign Up</h1>
            <form className='flex flex-col' onSubmit={handleSignUpSubmit}>
                <label>First Name:</label>
                <input className='border-2 border-black' onChange={(e) => {setFirstName(e.target.value)}} value={firstName}></input>
                <label>Last Name:</label>
                <input className='border-2 border-black' onChange={(e) => {setLastName(e.target.value)}} value={lastName}></input>
                <label>Company Name:</label>
                <input className='border-2 border-black' onChange={(e) => {setCompanyName(e.target.value)}} value={companyName}></input>
                <label>Email:</label>
                <input className='border-2 border-black' onChange={handleEmailChange} value={signUpEmail} type='email' placeholder='johnsmith123@gmail.com'></input>
                <label>Password:</label>
                <input className='border-2 border-black' onChange={(e) => { setUpSignUpPassword(e.target.value); console.log(signUpPassword) }} value={signUpPassword}></input>
                <label>Confirm Password:</label>
                <input className='border-2 border-black' onChange={(e) => { setConfirmPassword(e.target.value); console.log(confirmPassword) }} value={confirmPassword}></input>
                <button className='bg-green-400 w-1/2 m-auto rounded mt-1'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp