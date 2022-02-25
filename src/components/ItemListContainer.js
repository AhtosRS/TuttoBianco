import react, {useEffect, useState} from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";
import { giveProducts } from './products.js';
import ItemList from "./ItemList.js";
import { useParams } from "react-router-dom";


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    let {category} = useParams();

    const categoria = products.filter( y => y.category == category);

    

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
        <div style={{width: "100%", height: "auto"}}>
        <ItemList products={categoria}/>
            
        </div>
    )
}

export default ItemListContainer;