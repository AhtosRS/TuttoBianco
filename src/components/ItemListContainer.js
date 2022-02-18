import react, {useEffect, useState} from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";
import { giveProducts } from './products.js';
import ItemList from "./ItemList.js";


function ItemListContainer() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        giveProducts
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return( 
        <div style={{width: "100%", height: "600px"}}>
        <ItemList products={products}/>
            
        </div>
    )
}

export default ItemListContainer;