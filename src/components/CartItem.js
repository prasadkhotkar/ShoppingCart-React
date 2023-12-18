import React from 'react'
import { MdOutlineAutoDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import {toast} from 'react-hot-toast';


const CartItem = ({item}) => {
    const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
   
    <div className='flex  gap-4 p-4 mt-5 ml-5  max-w-2xl border-b-4 border-gray-500'>
     <div className='h-[180px]'> 
      <img src={item.image} className='h-full w-full' />
     </div>
      <div className='flex flex-col mt-3 gap-2'>
        <h1 className='text-gray-700 font-semibold text-xl text-left truncate w-40 mt-1'>{item.title}</h1>
        <h1>{item.description.split(" ").slice(0,14).join(" ")+"..."}</h1>
        <div className='flex justify-between items-center '>
          <p className='text-green-600 font-semibold'>${item.price}</p>
          <div onClick={removeFromCart} className='bg-red-400 rounded-full w-8 h-8 flex justify-center items-center'>
          <MdOutlineAutoDelete className='text-xl cursor-pointer'/>
          </div>
         
        </div>
      </div>
     
      </div>
      
   
  )
}


export default CartItem
