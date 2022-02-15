import react from "react";
import ItemCount from "./ItemCount.js";

function ItemListContainer(props) {
    return( 
        <div style={{width: "100%", height: "600px"}}>
            <ItemCount stock="5" initial="1"/>
        </div>
    )
}

export default ItemListContainer;