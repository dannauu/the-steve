import './App.css';
import Home from '../src/pages/Home'
import InputForm from './components/InputForm/InputForm'
import { useState } from 'react'
import { MdPersonSearch, MdPersonAdd } from 'react-icons/md'
import { Route, Routes, Link } from "react-router-dom"
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (localStorage.getItem("Token")) {
        // localStorage.clear()
        console.log('user is signed in')
    } else {
        console.log("User is not signed in.")
        setIsOpen(true)
    }
}
  return (
    <div className='bg-blue-500 min-h-screen'>
      <h1 className="font-bold text-5xl p-1 text-center mb-5 marckFont">The Steve</h1>
      <nav className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-black bg-gray-400 border-t-2 border-black">
        <div id="tabs" className="flex justify-between">
          <Link to="/search-customer" className="p-1 w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white">
            <MdPersonSearch className='flex m-auto text-4xl' />
            <span className="tab block text-xs font-bold">Search Customer</span>
          </Link>
          <Link to="/review-customer" className="p-1 w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white">
            <MdPersonAdd className='flex m-auto text-4xl' />
            <span className="tab block text-xs font-bold" onClick={handleClick}>Review Customer</span>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/search-customer" element={<Home />} />
        <Route path="/review-customer" element={<InputForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
