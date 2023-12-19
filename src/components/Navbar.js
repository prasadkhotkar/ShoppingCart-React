import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const {Cart}=useSelector((state)=>state);
  return (
    <div>
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
      <NavLink to="/">
            <div className='ml-5'>
                <img src="../logo.png" className='h-14'/>
            </div>
            </NavLink>
    
      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        <NavLink to="/">
        <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
            <div className='relative'>
        <BsCart4 className='text-2xl' />
        <span className='absolute -top-1 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{Cart.length >0 && Cart.length}</span>
        </div>
        </NavLink>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
