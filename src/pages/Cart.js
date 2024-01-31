import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"

const Cart = () => {

    const {Cart}=useSelector((state)=>state);
  
    const[totalAmount,setTotalAmount]=useState(0);
  
    useEffect(()=>{
      setTotalAmount(Cart.reduce( (acc,curr) => acc+curr.price,0) );
    },[Cart])
    return(
      <div className='flex justify-between items-center max-w-6xl p-2 mx-auto '>
        {
          Cart.length > 0 ?
          (
            <div className='flex  '> 
              <div >
                {
                  Cart.map((item,index)=>{
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>
        ||
              <div className='flex flex-col justify-between mt-20  mx-3'>
                <div className=''>
                  <div className='text-green-700 font-semibold text-lg'>Your Cart</div>
                  <div className='text-green-700 font-bold text-4xl' >SUMMARY</div>
                  <p className='mt-3'>
                    <span className='font-semibold '>Total Items:{Cart.length}</span>
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                 <p className='  font-semibold'>Total Amount: ${totalAmount}</p>
                 <button className=' font-semibold text-white border-2 border-gray-700 bg-green-600 rounded-md  text-[15px] p-1 px-20 '>
                  Checkout Now
                 </button>
                </div>
              </div>
            </div>
            
          ):
          (
            <div className='flex flex-col  items-center justify-center max-w-6xl  p-2 mx-auto space-x-5 space-y-2 min-h-[80vh]'>
              <h1 className='text-lg font-semibold'>Cart Empty</h1>
              <Link to={"/"}>
                <button className=' font-semibold text-white border-2 border-gray-700 bg-green-600 rounded-md  text-[15px] p-1 px-10 '>
                  Shop Now
                </button>
              </Link>
            </div>
          )
        }
      </div>
    )
  }
  

export default Cart
