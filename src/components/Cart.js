import {useContext} from "react";
import ItemCount from "./ItemCount.js";
import CartContext from './CartContext.js'

function Cart() {

    const {cartItems} = useContext(CartContext);

    return(   
        <>
        {cartItems.length === 0 ? (<p style={{color: "black"}}>Carrito vacio</p>) : (cartItems.map((product) => {
          return (
            <>
                <div>
                    <img src={product.imgURL} style={{ width: 50, height: 50}} />

                    <div>
                        {product.title} x {product.amount} = ${product.amount * product.price}
                    </div>
                </div>
            </>
          );
        })
      )}
    </>
  )
}

export default Cart;