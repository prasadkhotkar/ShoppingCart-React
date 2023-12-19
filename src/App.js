import React from 'react'
import Navbar from './components/Navbar'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';


const App = () => {
  return (
    <div>
      <div className='bg-slate-900 '>
        <Navbar/>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
      <div>
        <Home/>
      </div>
    </div>
  )
}

export default App
