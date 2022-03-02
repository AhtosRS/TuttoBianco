import react, { useState } from "react";

function ItemCount({stock, initial, onAdd, setQuantity}) {
    initial = parseInt(initial);
    
    const [contador, setContador] = useState(initial);
    

    const incrementar = () => {
        if (contador < stock && stock > 0) {
          setContador(contador + 1)  
        }
        
    }
    const decrementar = () => {
        if (contador > 1)
        setContador(contador - 1)
    }

    function onAdd() {
        
        setQuantity(parseInt(contador));
        document.getElementById("agrBolsa").style.display = "none";
        document.getElementById("agrBolsa2").style.display = "none";
        // let botonTerm = document.createElement("button");
        // botonTerm.innerHTML = "Terminar Compra";
        // botonTerm.type="button";
        // botonTerm.className = "btn btn-outline-dark";
        // botonTerm.addEventListener("click", function() {alert("clicked");});
        // document.getElementsByClassName("counterContainer")[0].appendChild(botonTerm);
    }

    return( 
        
        <div className="counterContainer">
            <div className="controlContainer" id="agrBolsa2">
                <button type="button" className="btn btn-light" onClick={decrementar}>-</button>
                <p className="cantidad">{contador}</p>
                <button type="button" className="btn btn-light" onClick={incrementar}>+</button>
            </div>

            <button type="button" className="btn btn-outline-dark" id="agrBolsa" onClick={() => onAdd()}>Agregar a la Bolsa</button>
            
        </div>
        

    )
}

export default ItemCount;