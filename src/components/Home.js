import react, {useEffect, useState} from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";
import { giveProducts } from './products.js';
import ItemList from "./ItemList.js";


function Home() {

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
        <div style={{width: "100%", height: "auto"}}>
        <ItemList products={products}/>
            
        </div>
    )
}

export default Home;