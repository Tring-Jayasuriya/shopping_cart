import React, { createContext, useEffect, useState } from 'react'
import '../App.css'
import { useDispatch, useSelector,} from 'react-redux'
import { addToCart } from '../redux/cartSlice'


export const ShoppingGrid = () => {

    const [data,setData]=useState([])

    const dispatch=useDispatch()

    const cartItems=useSelector((state)=>state.cart)
    console.log(cartItems);
    
    
    useEffect(()=>{

        const fetchData=async()=>{
            const response=await fetch('https://fakestoreapi.com/products').then(res=>res.json())
            setData(response)
        }
        fetchData()
    },[])

    const handleCart=(prod)=>{
        dispatch(addToCart(prod))
    }



  return (
    <div className='main-container'>
        <h1 style={{textAlign:"center", fontSize:"50px"}}>Products</h1>
        <div className='grid-container'>
            {
                data.map((prod,index)=>(
                <div className='cards' key={prod.id}>
                    <img  src={prod.image}/>
                    <p className='card-title'>{prod.title}</p>
                    <div className='price'>
                        <p> Price  &#8377;{prod.price}</p>
                        <p>Rating : {prod.rating.rate}⭐</p>
                        <button onClick={()=>handleCart(prod)}>Add to cart</button>
                    </div>
                </div>
                ))
            }
          

        </div>



        

    </div>
  )

}
