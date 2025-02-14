import { Route, Routes } from "react-router"
import { ShoppingGrid } from "../components/ShoppingGrid"
import { Cart } from "../components/Cart"


 const Router=()=>{
    return(
        <Routes>
            <Route path="/" element={<ShoppingGrid/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}

export default Router