import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../App.css'

export const Cart = () => {

  const cartItems=useSelector((state)=>(state.Cart))
  console.log(cartItems);

  return (
    <div>
        <div>
          <div className='cards'>
              <img />
              <p className='card-title'>Mens shoes</p>
              <div className='price'>
                  <p>Price  &#8377;233</p>
                  <p>Rating : 4.3⭐</p>
              </div>
              <div className='itemCount'>
                <p>+</p>
                <p>1</p>
                <p>-</p>
              </div>
              
            </div>
        </div>
    </div>
  )
}
