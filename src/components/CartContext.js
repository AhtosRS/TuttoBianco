import React, { useState, useContext } from "react";


const CartContext = React.createContext();
const cartItems = [];


const CartProvider =({children}) => {

    const [cartItems, setCartItem] = useState([]);
    const cartSize = cartItems.length;
    

    function checkCurrentCart(product) {  
        if (cartItems === undefined) {
            console.log(`carrito vacio`)
            return true;
        }
        else if (cartItems.find(elemento => elemento.id === product.id)) {

            console.log(` ya esta en el carro`);
            return false;
        }
        else {
            console.log(`no esta en la bolsa`)
            return true;
        }
    } 

    function addToCart(product){
        setCartItem([...cartItems, product]);
        // cartItems.push(product);
        console.log(`agregado`)
        console.log(cartItems)
        console.log(cartItems.length)
    }

    // function removeFromCart(product){
    //     setCartItem(cartItems = cartItems.filter(function (item) {
    //         return item !== product
    //     }))
    // }

    

    

    return <CartContext.Provider value={{cartItems, checkCurrentCart, addToCart, cartSize}}>
        {children}
    </CartContext.Provider>
}

export  {CartProvider};
export default CartContext;

