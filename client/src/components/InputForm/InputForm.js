import { useState } from 'react'
import axios from 'axios'
import { Rating } from 'react-simple-star-rating'


const InputForm = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [cell, setCell] = useState(0)
    const [zipCode, setZipCode] = useState(0)
    const [comm, setComm] = useState(0)
    const [picky, setPicky] = useState(0)
    const [payOnTime, setPayOnTime] = useState(0)
    // Catch Rating value
    const handleCommRating = (commRate) => {
        setComm(commRate)
        console.log(commRate)

        // other logic
    }
    const handlePickyRating = (pickyRate) => {
        setPicky(pickyRate)
        console.log(pickyRate)

        // other logic
    }
    const handlePayRating = (payRate) => {
        setPayOnTime(payRate)
        console.log(payRate)
        // other logic
    }
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
            console.log(response)
            // window.location.reload()
        })
    }
    return (
        <div className='text-center scale-in-bottom'>
            <p className='text-xl font-bold'>Add your customer below, be sure this information is valid as the steve is only as accurate as it's users. </p>
            <p className='text-xs font-bold px-2 italic text-red-600'>Be sure to rate your customer from 0-5 on their communication, how picky they are, and also how they handle payment.  </p>
            <form className='mt-2'>
                <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} className='border-2 border-black m-1 rounded-md' />
                <input type='text' placeholder='City' onChange={(e) => setCity(e.target.value)} className='border-2 border-black m-1 rounded-md' />
                <input type='text' placeholder='Cell' onChange={(e) => setCell(e.target.value)} className='border-2 border-black m-1 rounded-md' />
                <input type='text' placeholder='Zip Code' onChange={(e) => setZipCode(e.target.value)} className='border-2 border-black m-1 rounded-md' />
                <div className='flex flex-col'>
                    <div className='flex justify-around'>
                        <label>Communication:</label>
                        <div>
                            <Rating
                                onClick={handleCommRating}
                                className='flex flex-row'
                            />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <label>Pickiness:</label>
                        <div>
                            <Rating
                                onClick={handlePickyRating}
                                className='flex flex-row'
                            />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <label>Payment Etiquette:</label>
                        <div>
                            <Rating
                                onClick={handlePayRating}
                                className='flex flex-row'
                            />
                        </div>
                    </div>
                </div>
                <button onClick={createUser} className='border-2 border-black bg-green-300 rounded-md p-1'>Create Customer</button>
            </form>
        </div>
    )
}

export default InputForm