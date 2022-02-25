import react, {useEffect, useState} from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";
import { giveProducts } from './products.js';
import ItemList from "./ItemList.js";
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    let {id} = useParams();
    
    
    const filtered = products.find( x => x.id == id);
    console.log(filtered);

    useEffect(() => {
        giveProducts
            .then((res) => {
                setProducts(res);
            })
            .then( () => setLoading(false))
            .catch((error) => {
                console.log(error);
            })
    }, []);

    

    return( 
        <div style={{width: "100%", height: "600px"}}>
        { !loading && <ItemDetail product={filtered}/>}
        
        </div>
    )
}

export default ItemDetailContainer;