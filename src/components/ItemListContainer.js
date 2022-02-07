import react from "react";

function ItemListContainer(props) {
    return( 
        <div style={{width: "100%", height: "600px"}}>
            <h1 style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                Bienvenido a {props.greeting}</h1> 
        </div>
    )
}

export default ItemListContainer;