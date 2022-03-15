import react, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import {db} from './clientfactory.js';
import {collection, getDocs} from 'firebase/firestore';


function ItemDetailContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    let {id} = useParams();
    
    const [filtered, setFiltered] = useState([]);
    
    useEffect(() => {
        const getDato = async() => {
            const query = collection(db, "items");
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc => {return {id: doc.id, ...doc.data()}});
            setFiltered(filtered => filtered = dataItems.find( x => x.id == id));
        }
        getDato()
            .then((dataItems) => {
                setProducts(products => products = dataItems);
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