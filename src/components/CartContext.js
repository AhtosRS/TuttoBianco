import React, { useState, useContext } from "react";


const CartContext = React.createContext();



const CartProvider =({children}) => {

    const [cartItems, setCartItem] = useState([]);

    function checkCurrentCart(product) {  
        if (cartItems === undefined) {
            console.log(`carrito vacio`)
            return true;
        }
        else if (cartItems.find(elemento => elemento.id === product.id)) {

            console.log(` ya esta en el carro o no`);
            return false;
        }
        else {
            console.log(`no esta en la bolsa`)
            return true;
        }
    } 

    function addToCart(product){
        // cartItems.push(product);
        setCartItem(cartItems.push(product));
        console.log(`agregado`)
        console.log(cartItems)
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

