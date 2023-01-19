import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/customer').then((response) => {
            setUser(response.data)
        })
    }, [])

    console.log(user)


    return (
        <div className='pt-16'>
            <form className='flex flex-col w-1/3 sm:w-1/2 text-center m-auto'>
                <label>Search your customer:</label>
                <input type='text' value={name} className='border-2 border-black rounded-lg text-center' onChange={(e) => setName(e.target.value)} placeholder="'John Smith'" />
            </form>
            <div>
                
            </div>
        </div>
    )
}

export default SearchBar