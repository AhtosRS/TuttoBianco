import {useContext, useEffect} from "react";
import CartContext from './CartContext.js'
import trashBin from '../imgs/bin.png';
import {Link} from "react-router-dom"

function Cart() {

  const {cartItems, removeFromCart, clearCart, cartTotal} = useContext(CartContext);

  //console.log(cartItems);

  return(
    
    <>
      {cartItems.length === 0 ? (<p style={{color: "black"}}>Carrito vacio</p>) :
      (cartItems.map((products) => {
        return(
          <>
          <div key={products.id} className="cartProductContainer">
              <div style={{ width: 50, height: 50}}>
                <img src={products.imgURL}  className="imagenes" style={{position: "static"}}/>
              </div>

               <div>
                 {products.title} = ${products.price} x {products.quantity} = ${products.price * products.quantity}
               </div>

               <div >
               <button className="binButton" onClick={() => removeFromCart(products, cartItems)}><img src={trashBin} style={{ width: 20, height: 20}} /></button>
               </div>
               
          </div>
                            
        </>)}))}

        

        {cartItems.length >= 2 ? 

              <div className="totalContainer">   
                  Total de la bolsa: ${cartTotal}.-                           
                  <button type="button" className="btn btn-outline-danger emptyButton" onClick={() => clearCart()} style={{width: 70, height: "auto"}} id="vaciarCart">Vaciar</button>
              </div>

          :<></>}

          {cartItems.length >= 1 ? 
              <Link to={`/cart`}>
              <button type="button" className="btn btn-outline-dark emptyButton"  style={{width: 100, height: "auto", margin: "auto"}}>Ir a pagar</button>
              </Link>
          :<></>}
    </>
    )
    
}

export default Cart;
