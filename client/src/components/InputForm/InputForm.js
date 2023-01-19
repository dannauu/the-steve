import { useState } from 'react'
import axios from 'axios'

const InputForm = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [cell, setCell] = useState(0)
    const [zipCode, setZipCode] = useState(0)
    const [comm, setComm] = useState(0)
    const [picky, setPicky] = useState(0)
    const [payOnTime, setPayOnTime] = useState(0)
    const createUser = () => {
        axios.post('http://localhost:3001/create-customer', {
            name: name,
            city: city,
            cell: cell,
            zipCode: zipCode,
            communicationRating: comm,
            picky: picky,
            payOnTime: payOnTime
        }).then((response) => {
            alert("Customer Created")
        })
    }
    return (
        <div>
            <form className='text-center mt-2'>
                <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='City' onChange={(e) => setCity(e.target.value)}/>
                <input type='text' placeholder='Cell' onChange={(e) => setCell(e.target.value)}/>
                <input type='text' placeholder='Zip Code' onChange={(e) => setZipCode(e.target.value)}/>
                <input type='text' placeholder='Communication Rating' onChange={(e) => setComm(e.target.value)}/>
                <input type='text' placeholder='Picky' onChange={(e) => setPicky(e.target.value)}/>
                <input type='text' placeholder='Pay on Time' onChange={(e) => setPayOnTime(e.target.value)}/>
                <button onClick={createUser}>Create Customer</button>
            </form>
        </div>
    )
}

export default InputForm