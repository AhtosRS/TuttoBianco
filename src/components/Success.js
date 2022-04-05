import { useParams } from "react-router-dom";


function Success() {

    let {orderID} = useParams();

    return(

        <div style={{width: "100%", height: "600px"}} className="cartContainer">
            <div className="cartContainerCenter" style={{border: "none"}}>
                <div class="alert alert-success" role="alert" style={{backgroundColor: "rgb(63, 196, 103)"}}>
                    <h4 class="alert-heading">Felicitaciones!</h4>
                    <p>la compra se a realizado con exito, por favor espera a que te contacten para coordinar el envio.</p>
                    <hr/>
                    <p class="mb-3">Anota el siguiente numero de orden para poder identificar tu compra: <b style={{color: "black"}}>{orderID}</b></p>
                </div>
            </div>
        </div>
    
    )
    
}

export default Success;
