import React from 'react'
import Navbar from './components/Navbar'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <div className='bg-slate-900 '>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
