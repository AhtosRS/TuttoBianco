import {useContext, useEffect} from "react";
import ItemCount from "./ItemCount.js";
import CartContext from './CartContext.js'
import { useState } from "react/cjs/react.production.min";
import trashBin from '../imgs/bin.png';

function Cart() {

  const {cartItems, removeFromCart} = useContext(CartContext);

  console.log(cartItems);

  function deleteItem(item, cartItems){
    console.log("se borrara este item")
    removeFromCart(item, cartItems);
    
    
}

  return(
    
    <>
      {cartItems.length === 0 ? (<p style={{color: "black"}}>Carrito vacio</p>) :
      (cartItems.map((products) => {
        return(
          <>
          <div key={products.id} className="cartProductContainer">
               <img src={products.imgURL} style={{ width: 50, height: 50}} />
               <div>
                 {products.title} = ${products.price} x {products.quantity}
               </div>
               <div >
               <button className="binButton" onClick={() => deleteItem(products, cartItems)}><img src={trashBin} style={{ width: 20, height: 20}} /></button>
               </div>
          </div>
          </>)}))}
    </>
    )
    
}

export default Cart;
