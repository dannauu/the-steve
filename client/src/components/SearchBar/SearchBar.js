import React, { useState } from 'react'
import CustomerProfile from '../CustomerProfile/CustomerProfile'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import axios from 'axios'
import { FaArrowRight } from 'react-icons/fa'

const SearchBar = () => {
    const [name, setName] = useState('')
    const [isVisible, setisVisible] = useState(false)
    const [apiData, setApiData] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3001/customer/${name}`);
            console.log(response.data);
            setApiData(response.data);
            setisVisible(true)
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const words = event.target.value.split(" ");
        const capitalizedWords = words.map((word) => word.split('').map((c, i) => i === 0 ? c.toUpperCase() : c).join(''));
        setName(capitalizedWords.join(" "));
    };

    return (
        <div className='pt-2'>
            <form className='flex flex-col w-4/5 text-center m-auto' onSubmit={handleSubmit}>
                <div className='flex '>
                    <input type='text' value={name} className='border-2 border-black rounded-lg text-center bg-gray-200 w-11/12 mr-1' onChange={handleChange} placeholder="'John Smith'" />
                    <button type='submit' className='italic font-semibold rounded-md w-1-12 text-xs'><FaArrowRight className='text-3xl text-green-400 bg-black rounded-md'/></button>
                </div>
            </form>
            <div style={{ display: isVisible ? "block" : "none" }}>
                {apiData ? <CustomerProfile data={apiData} /> : <LoadingSpinner />}
            </div>
        </div>
    )
}

export default SearchBar