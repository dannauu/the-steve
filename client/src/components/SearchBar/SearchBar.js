import React, { useState } from 'react'
import CustomerProfile from '../CustomerProfile/CustomerProfile'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import axios from 'axios'
import { FaArrowRight } from 'react-icons/fa'
import Modal from 'react-modal';
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        // border: '10px double white',
        boxShadow: '0px 0px 20px 2px white',
        width: '75%'
    },
};


const SearchBar = () => {
    const [name, setName] = useState('')
    const [isVisible, setisVisible] = useState(false)
    const [apiData, setApiData] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [test, setTest] = useState('login')


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

    const handleClick = () => {
        if (localStorage.getItem("jwt")) {
            // localStorage.clear()
        } else {
            console.log("User is not signed in.")
            setIsOpen(true)
        }
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className='pt-2'>
            <div>
                <Modal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Important Message">
                    {(() => {

                        switch (test) {

                            case 'login':
                                return (
                                    <Login />
                                )
                            case 'sign-up':
                                return (
                                    <SignUp />
                                )
                            default:
                                return (
                                    null
                                )

                        }
                    })()}
                    <button className='flex m-auto bg-red-200 p-1 rounded mt-1' onClick={() => { setTest('sign-up') }}>Sign Up</button>
                </Modal>
            </div>
            <form className='flex flex-col w-4/5 text-center m-auto' onSubmit={handleSubmit}>
                <div className='flex '>
                    <input type='text' value={name} className='border-2 border-black rounded-lg text-center bg-gray-200 w-11/12 mr-1' onChange={handleChange} placeholder="'John Smith'" onClick={handleClick} />
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