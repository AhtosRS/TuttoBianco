import React, { useState, useContext } from "react";


const CartContext = React.createContext();



const CartProvider =({children}) => {

    const [cartItems, setCartItem] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const cartSize = cartItems.length;
    

    function addToCart(product, quantity){
        if (cartItems.find(elemento => elemento.id === product.id)) {
            console.log(` ya esta en el carro`);
            
        }
        else {
            console.log(`no esta en la bolsa`)
            setCartItem([...cartItems, {...product, quantity}]);
            
            setCartTotal(cartTotal => cartTotal + (product.price * quantity));
            console.log(cartTotal);
        }
    }

    function removeFromCart(product, cartItems){
        setCartItem(cartItems => cartItems.filter(elemento => elemento.id !== product.id));
        setCartTotal(cartTotal => cartTotal - parseInt(product.price));
    }

    function clearCart(){
        console.log("cart Borrado");
        setCartItem([]);
        setCartTotal(0);
    }

    
    // function precioTotal(){
    //     setCartTotal(cartItems.forEach(() => cartTotal += product.price));
    //     console.log(cartTotal)
    // }

    

    return <CartContext.Provider value={{cartItems, removeFromCart, addToCart, cartSize, clearCart, cartTotal}}>
        {children}
    </CartContext.Provider>
}

export  {CartProvider};
export default CartContext;

