import React, { useState } from 'react'
import CustomerProfile from '../CustomerProfile/CustomerProfile'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import axios from 'axios'
import { FaArrowRight } from 'react-icons/fa'
import { ImArrowDown } from 'react-icons/im'


const SearchBar = () => {
    const [name, setName] = useState('')
    const [isVisible, setisVisible] = useState(false)
    const [apiData, setApiData] = useState([])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (localStorage.getItem("Token")) {
            try {
                const response = await axios.get(`http://localhost:3001/customer/${name}`);
                console.log(response.data);
                setApiData(response.data);
                setisVisible(true)
            } catch (error) {
                console.log(error);
            }
            console.log('user is signed in')
        } else {
            console.log("User is not signed in.")
            window.location.href = '/login'
        }

    };

    const handleChange = (event) => {
        const words = event.target.value.split(" ");
        const capitalizedWords = words.map((word) => word.split('').map((c, i) => i === 0 ? c.toUpperCase() : c).join(''));
        setName(capitalizedWords.join(" "));
    };

    return (
        <div className='pt-2'>
            <h1 className='text-xl italic font-bold text-center'>Type your customer's name here:</h1>
            <ImArrowDown className='flex m-auto text-3xl mt-1 text-black mb-1' />
            <form className='flex flex-col w-4/5 text-center m-auto' onSubmit={handleSubmit}>
                <div className='flex '>
                    <input type='text' value={name} className='border-2 border-black rounded-lg text-center w-11/12 mr-1' onChange={handleChange} placeholder="'John Smith'" />
                    <button type='submit' className='italic font-semibold rounded-md w-1-12 text-xs'><FaArrowRight className='text-3xl text-green-400 bg-black rounded-md' /></button>
                </div>
            </form>
            <div style={{ display: isVisible ? "block" : "none" }}>
                {apiData ? <CustomerProfile data={apiData} /> : <LoadingSpinner />}
            </div>
        </div>
    )
}

export default SearchBar