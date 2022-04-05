import react, {useState, useContext} from "react";
import CartContext from './CartContext.js'
import trashBin from '../imgs/bin.png';
import {db} from './clientfactory.js';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useEffect } from "react/cjs/react.production.min";
import Form from "./Form.js";

function CartPayout({product}) {
    
    const {cartItems, cartTotal, removeFromCart, clearCart, orderID, condition} = useContext(CartContext);

    

    
    //const orders = collection(db, 'orders');



    return(
        
        <div style={{width: "100%", height: "600px"}} className="cartContainer">

            <div className="cartContainerCenter">
            <>
            {cartItems.length === 0 ? (<p style={{color: "black"}}>Carrito vacio</p>) :
            (cartItems.map((products) => {
                return(
                  <>
                  <div key={products.id} className="cartProductContainer itemDivider">
                      <div style={{ width: 100, height: 100}}>
                        <img src={products.imgURL}  className="imagenes" style={{position: "static"}}/>
                      </div>
                
                       <div>
                         {products.title} = ${products.price} x {products.quantity} = ${products.price * products.quantity}
                       </div>
                
                    <div >
                        <button className="binButton" onClick={() => removeFromCart(products, cartItems)}><img src={trashBin} style={{ width: 20, height: 20, marginRight: 40}} /></button>
                    </div>

                  </div>
                  
                </>)}))}


            {cartItems.length >= 1 ? 

                <div className="totalContainerCart">
                    <div style={{marginRight: 40}}>
                        Total de la bolsa: ${cartTotal}.-
                        <button type="button" className="btn btn-outline-danger emptyButton" onClick={() => clearCart()} style={{width: 70, height: "auto", marginLeft: 40}} id="vaciarCart">Vaciar</button>
                    </div>   
                    
                    <div>

                        <button type="button" className="btn btn-outline-success emptyButton" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width: 100, height: "auto"}} >pagar</button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Finalizacion de Compra</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <Form/>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                    </div>

                </div>

                

            :<></>}

             
            </>
        </div>
        
    </div>
    

    
    )
    
}

export default CartPayout;
