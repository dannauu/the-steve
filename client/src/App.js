import './App.css';
import Home from '../src/pages/Home'
import InputForm from './components/InputForm/InputForm'
import { useState } from 'react'

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  return (
    <div>
      <h1 className="text-black font-bold text-2xl sm:text-lg sm:pt-2 text-center">The Steve</h1>
      <nav className="sm:px-4">
        <div className="flex flex-wrap text-center mx-auto">
          <div className="flex m-auto">
            <ul className="flex flex-row p-4 text-black googleFont text-xl sm:text-sm">
              <li>
                <a href="#" className="pr-5" onClick={() => setCurrentRoute('home')}>Search Customer</a>
              </li>
              <li>
                <a href="#" className="pr-5" onClick={() => setCurrentRoute('add-customer')}>Add Customer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {currentRoute === 'home' && <Home />}
      {currentRoute === 'add-customer' && <InputForm />}
    </div>
  );
}

export default App;
