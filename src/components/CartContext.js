import React, { useState, useContext } from "react";


const CartContext = React.createContext();



const CartProvider =({children}) => {

    const [cartItems, setCartItem] = useState([]);

    function checkCurrentCart(product) {  
        if (cartItems === undefined || cartItems.find(elemento => elemento.id === product.id)) {

            console.log(`${product.title} ya esta en el carro`);
            return false;
        }
        else {
            console.log(`${product.title} no esta en la bolsa`)
            return true;
        }
    } 

    function addToCart(product){
        // cartItems.push(producto);
        setCartItem(cartItems.push(product));
        console.log(`${product.title} agregado`)
    }

    function removeFromCart(product){
        setCartItem(cartItems = cartItems.filter(function (item) {
            return item !== product
        }))
    }

    const cartSize = cartItems.length;

    

    return <CartContext.Provider value={{cartItems, checkCurrentCart, addToCart, removeFromCart, cartSize}}>
        {children}
    </CartContext.Provider>
}

export  {CartProvider};
export default CartContext;

