import {useContext, useEffect} from "react";
import ItemCount from "./ItemCount.js";
import CartContext from './CartContext.js'
import { useState } from "react/cjs/react.production.min";

function Cart() {

  const {cartItems} = useContext(CartContext);

  console.log(cartItems);

  return(
    
    <>
      {cartItems.length === 0 ? (<p style={{color: "black"}}>Carrito vacio</p>) :
      (cartItems.map((products) => {
        return(
          <>
          <div key={products.id}>
               <img src={products.imgURL} style={{ width: 50, height: 50}} />
               <div>
                 {products.title} = ${products.price}
               </div>
          </div>
          </>)}))}
    </>
    )
    
}

export default Cart;
