import { createSlice } from "@reduxjs/toolkit"

const initialState=[]

export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{

        addToCart:(state,action)=>{
            action.payload["count"]=1
            state.push(action.payload)
            
        },

        removeFromCart:(state,action)=>{
            
        }

    }
})

export const {addToCart,removeFromCart}=CartSlice.actions

export default CartSlice.reducer