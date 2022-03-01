import react, {useState} from "react";
import ItemCount from "./ItemCount.js";

function ItemDetail({product}) {
   
    // console.log(id, title, price, imgURL, description);

    // const testProduct =  product[0];

    const [selectedQuantity, setQuantity] = useState([]);

    return(

       <div className="itemDetail">
            <img src={product.imgURL} className="imagenesDetail" alt="..."></img>

            <div className="detailContainer">

                <h5 className="card-title">{product.title}</h5>
                <p className="precios">${product.price}.-</p>
                <p className="description">{product.description}</p>

                <ItemCount stock="5" initial="1" setQuantity={setQuantity}/>
                
            </div>

        </div> 
        
    )
}

export default ItemDetail;