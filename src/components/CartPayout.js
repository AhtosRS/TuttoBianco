import react, {useState, useContext} from "react";
import CartContext from './CartContext.js'
import trashBin from '../imgs/bin.png';

function CartPayout({product}) {
    
    const {cartItems, cartTotal, removeFromCart, clearCart} = useContext(CartContext);

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

            {cartItems.length >= 2 ? 

                <div className="totalContainerCart">
                    <div style={{marginRight: 40}}>
                        Total de la bolsa: ${cartTotal}.-
                        <button type="button" className="btn btn-outline-danger emptyButton" onClick={() => clearCart()} style={{width: 70, height: "auto", marginLeft: 40}} id="vaciarCart">Vaciar</button>
                    </div>   
                    
                    <div>
                    <button type="button" className="btn btn-outline-success emptyButton"  style={{width: 100, height: "auto"}} onClick={() => alert("simulacion de Api a mercadopago")} >pagar</button>
                    </div>                           
                </div>

                

            :<></>}

            </>
        </div>
    </div>
    )
    
}

export default CartPayout;
