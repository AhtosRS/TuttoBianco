import react, {useEffect, useState} from "react";
import ItemList from "./ItemList.js";
import { useParams } from "react-router-dom";
import {db} from './clientfactory.js';
import {collection, getDocs} from 'firebase/firestore';


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    let {category} = useParams();

    const categoria = products.filter( y => y.category == category);

    useEffect(() => {
        const getDato = async() => {
            const query = collection(db, "items");
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc => {return {id: doc.id, ...doc.data()}});
            setProducts(products => products = dataItems);
            console.log(products);
        }
        getDato();
    }, []);

    return( 
        <div style={{width: "100%", height: "auto"}}>
        <ItemList products={categoria}/>
            
        </div>
    )
}

export default ItemListContainer;