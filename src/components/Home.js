import react, {useEffect, useState} from "react";
import ItemList from "./ItemList.js";
import {db} from './clientfactory.js';
import {collection, getDocs} from 'firebase/firestore';


function Home() {

    const [products, setProducts] = useState([]);

    

    useEffect(() => {
        const getDato = async() => {
            const query = collection(db, "items");
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc => {return {id: doc.id, ...doc.data()}});
            setProducts(products => products = dataItems);
        }
        getDato();
    }, []);


    return( 
        <div style={{width: "100%", height: "auto"}}>
        <ItemList products={products}/>
            
        </div>
    )
}

export default Home;