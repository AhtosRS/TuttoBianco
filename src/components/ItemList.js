import react from "react";
import { CartProvider } from "./CartContext";
import Item from './Item';

function ItemList({products}) {


    return( 
        
        <div className="itemsContainer">
            {products.map((products) => (
                <Item {...products} key={products.id}/>
            ))}
        </div>
        

    )
}

export default ItemList;