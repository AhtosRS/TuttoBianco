import react from "react";
import ItemCount from "./ItemCount.js";
import { Link } from "react-router-dom";

function Item({id, title, price, imgURL}) {
   
    

    return( 
        
    
        <div class="card" Style="width: 13rem;">

            <Link to={`/item/${id}`}>
                <div className="imgCenterContainer">
                  <img src={imgURL} className="card-img-top imagenes" alt="..."></img>  
                </div>
                
            </Link>

            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text precios">${price}.-</p>
                {/* <ItemCount stock="5" initial="1"/> */}
                <Link to={`/item/${id}`}>
                <button type="button" className="btn btn-outline-dark borderCounter" id="agrBolsa"> + detalles</button>
                </Link>
            </div>
        </div>
    

    )
}

export default Item;