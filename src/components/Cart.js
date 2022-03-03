import react from "react";
import ItemCount from "./ItemCount.js";
import { useCartContext } from '../CartContext'

function Cart() {

    const {cartItems} = useCartContext();

    return( 
        <>
        {cartItems.length === 0 ? (<p>Carrito vacio</p>) : (cartItems.map((producto) => {
          return (
            <>
                <div>
                    <img src={producto.thumbnail} style={{ width: 50 }} />

                    <div>
                        {producto.title} x {producto.amount} = ${producto.amount * producto.price}
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