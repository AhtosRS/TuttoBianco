import react, {useEffect, useState} from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";
import { giveProducts } from './products.js';
import ItemList from "./ItemList.js";
import ItemDetail from "./ItemDetail.js";


function ItemDetailContainer() {

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
        <ItemDetail product={products[0]}/>
        
        </div>
    )
}

export default ItemDetailContainer;