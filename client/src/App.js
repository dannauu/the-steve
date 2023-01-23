import './App.css';
import Home from '../src/pages/Home'
import InputForm from './components/InputForm/InputForm'
import { useState } from 'react'
import { MdPersonSearch, MdPersonAdd } from 'react-icons/md'

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [isVisible, setisVisible] = useState(false)
  return (
    <div className='bg-blue-500 min-h-screen'>
      <h1 className="font-bold text-5xl p-1 text-center mb-5 marckFont">The Steve</h1>

      {currentRoute === 'home' && <Home />}
      {currentRoute === 'add-customer' && <InputForm />}
      {/* <nav>
        <div className="flex flex-wrap text-center mx-auto">
          <div className="flex m-auto">
            <ul className="flex flex-row p-4 text-black googleFont text-xl sm:text-sm">
              <li className='bg-green-300 m-1 rounded-md' style={{ display: isVisible ? "block" : "none" }}>
                <a href="/" className="p-1" onClick={() => setCurrentRoute('home')}>Search Customer</a>
              </li>
              <li className='bg-green-300 m-1 rounded-md text-xl font-semibold' style={{ display: isVisible ? "none" : "block" }}>
                <a href="/add-customer" className="p-1" onClick={(e) => { e.preventDefault(); setCurrentRoute('add-customer'); setisVisible(true) }}>Review New Customer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-black bg-gray-400 border-t-2 border-black">
        <div id="tabs" className="flex justify-between">
          <a href="/" className="p-1 w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white" onClick={() => setCurrentRoute('home')}>
            <MdPersonSearch className='flex m-auto text-4xl' />
            <span className="tab block text-xs font-bold">Search Customer</span>
          </a>
          <a href="/add-customer" className="p-1 w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white" onClick={(e) => { e.preventDefault(); setCurrentRoute('add-customer'); setisVisible(true) }}>
            <MdPersonAdd className='flex m-auto text-4xl' />
            <span className="tab block text-xs font-bold">Review Customer</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
