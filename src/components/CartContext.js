import { useState } from "react";


// const CartContext = React.createContext();

export default function useCartContext({defaultValue = [], children}) {

    const [cartItems, setCartItem] = useState([]);
    
    function checkCurrentCart(cartItems, id) {
        if (cartItems.find(producto => producto.id === id)) {

            console.log(`${producto.title} ya esta en el carro`);
        }
        else {
            cartItems.push()
        }
    } 




    const addToCart = (item, amount) => {
        if ()
    }

    

    return <CartContext.Provider value={{cartItems, addToCart, isInCart, cartSize: cart.length}}>
        {children}
    </CartContext.Provider>
}