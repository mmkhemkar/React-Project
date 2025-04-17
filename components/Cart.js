
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    // const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const clearCard = () =>{
        dispatch(clearCart())
    }

    return(
        <div>
            <h1>cart</h1>
            <button onClick={clearCard}>clear Cart</button>
            {/* <RestaurantMenu /> */}
        </div>
    )
}


export default Cart;