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
      <div>
        {
          Cart.length > 0 ?
          (
            <div> 
              <div>
                {
                  Cart.map((item,index)=>{
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>
              <div>
                <div>
                  <div>Your Cart</div>
                  <div>Summary</div>
                  <p>
                    <span>Total Items:{Cart.length}</span>
                  </p>
                </div>
                <div>
                 <p>Total Amount: ${totalAmount}</p>
                 <button>
                  Checkout Now
                 </button>
                </div>
              </div>
            </div>
            
          ):
          (
            <div>
              <h1>cart Empty</h1>
              <Link to={"/"}>
                <button>
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
