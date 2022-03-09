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

    function addToCart(product, quantity){
        setCartItem([...cartItems, {...product, quantity}]);
        // cartItems.push(product);
        console.log(`agregado`)
        console.log(cartItems)
        console.log(quantity)
    }

    function removeFromCart(product, cartItems){
        console.log("entra");
        setCartItem(cartItems => cartItems.filter(elemento => elemento.id !== product.id));
    }

    function clearCart(){
        console.log("cart Borrado");
        setCartItem(cartItems => cartItems.splice(0, cartItems.length));
    }

    

    return <CartContext.Provider value={{cartItems, checkCurrentCart, addToCart, cartSize, removeFromCart, clearCart}}>
        {children}
    </CartContext.Provider>
}

export  {CartProvider};
export default CartContext;

