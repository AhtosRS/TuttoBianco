import react from "react";
import ItemCount from "./ItemCount.js";

function Item({id, title, price, pictureUrl}) {
   
    console.log(id);

    return( 
        
    <div class="card" Style="width: 12rem;">
        <img src={pictureUrl} className="card-img-top imagenes" alt="..."></img>
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text precios">${price}.-</p>
        <ItemCount stock="5" initial="1"/>
        </div>
    </div>

    )
}

export default Item;