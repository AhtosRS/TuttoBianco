import react, {useState, useContext} from "react";
import ItemCount from "./ItemCount.js";
import {Link} from "react-router-dom"
import CartContext from './CartContext.js'

function ItemDetail({product}) {
    
    const {addToCart} = useContext(CartContext);

    const [selectedQuantity, setQuantity] = useState();

    return(
        
            <div className="itemDetail">
                <div className="imagenesDetailContainer">
                   <img src={product.imgURL} className="imagenes" style={{position: "static"}} alt="..."></img> 
                </div>
                
                <div className="detailContainer">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="precios">${product.price}.-</p>
                    <p className="description">{product.description}</p>
                    <ItemCount stock="5" initial="1" setQuantity={setQuantity}/>
                    {selectedQuantity>0?<button type="button" className="navbar-toggler btn btn-outline-dark " data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => addToCart(product, selectedQuantity)}>Confirmar: {selectedQuantity} un.</button>:<></>}
                </div>
            </div> 
        
    )
}

export default ItemDetail;