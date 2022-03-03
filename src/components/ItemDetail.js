import react, {useState} from "react";
import ItemCount from "./ItemCount.js";
import {Link} from "react-router-dom"

function ItemDetail({product}) {
   
    // console.log(id, title, price, imgURL, description);

    // const testProduct =  product[0];
    
    const [selectedQuantity, setQuantity] = useState();

    const Cart = [];
    
    function sendToCart() {
        console.log ("anda");
    }

    return(

       <div className="itemDetail">
            <img src={product.imgURL} className="imagenesDetail" alt="..."></img>

            <div className="detailContainer">

                <h5 className="card-title">{product.title}</h5>
                <p className="precios">${product.price}.-</p>
                <p className="description">{product.description}</p>
                {/* <p className="precios">obtenido del child--test: {selectedQuantity}</p> */}
 
                

                <ItemCount stock="5" initial="1" setQuantity={setQuantity}/>
                {selectedQuantity>0?<button type="button" className="navbar-toggler btn btn-outline-dark " data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => sendToCart()}>Confirmar: {selectedQuantity} un.</button>:<></>}
                
            </div>

        </div> 
        
    )
}

export default ItemDetail;