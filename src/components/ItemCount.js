import react, { useState } from "react";

function ItemCount({stock, initial, onAdd}) {
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
        alert("agregado al carrito");
    }

    return( 
        
        <div className="counterContainer">
            <div className="controlContainer">
                <button type="button" className="btn btn-light" onClick={decrementar}>-</button>
                <p className="cantidad">{contador}</p>
                <button type="button" className="btn btn-light" onClick={incrementar}>+</button>
            </div>

            <button type="button" className="btn btn-outline-dark" onClick={() => onAdd()}>Agregar a la Bolsa</button>
        </div>
        

    )
}

export default ItemCount;