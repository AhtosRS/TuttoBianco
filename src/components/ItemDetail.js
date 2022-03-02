import react, {useState} from "react";
import ItemCount from "./ItemCount.js";
import {Link} from "react-router-dom"

function ItemDetail({product}) {
   
    // console.log(id, title, price, imgURL, description);

    // const testProduct =  product[0];

    const [selectedQuantity, setQuantity] = useState();

    

    return(

       <div className="itemDetail">
            <img src={product.imgURL} className="imagenesDetail" alt="..."></img>

            <div className="detailContainer">

                <h5 className="card-title">{product.title}</h5>
                <p className="precios">${product.price}.-</p>
                <p className="description">{product.description}</p>
                <p className="precios">obtenido del child--test: {selectedQuantity}</p>
 
                

                <ItemCount stock="5" initial="1" setQuantity={setQuantity}/>
                {selectedQuantity>0?<Link to={"/cart"}><button>test button</button></Link>:<></>}
                
            </div>

        </div> 
        
    )
}

export default ItemDetail;