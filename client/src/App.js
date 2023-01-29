import './App.css';
import Home from '../src/pages/Home'
import InputForm from './components/InputForm/InputForm'
import { MdPersonSearch, MdPersonAdd } from 'react-icons/md'
import { Route, Routes, Link } from "react-router-dom"
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

function App() {
  const handleClick = () => {
    if (localStorage.getItem("Token")) {
        // localStorage.clear()
        console.log('user is signed in')
    } else {
        console.log("User is not signed in.")
        window.location.href  = '/login'
    }
}
  return (
    <div className='bg-white min-h-screen'>
      <nav className="shadow-lg text-black bg-blue-600 border-b-2 border-black">
        <div id="tabs" className="flex justify-between">
          <Link to="/" className="p-1 w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white">
            <MdPersonSearch className='flex m-auto text-4xl' />
            <span className="tab block text-xs font-bold">Search Customer</span>
          </Link>
          <Link to="/review-customer" className="p-1 w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white">
            <MdPersonAdd className='flex m-auto text-4xl' />
            <span className="tab block text-xs font-bold" onClick={handleClick}>Review Customer</span>
          </Link>
        </div>
      </nav>
      <h1 className="text-blue-600 font-bold text-5xl p-1 text-center mt-2 marckFont">The Steve</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review-customer" element={<InputForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
