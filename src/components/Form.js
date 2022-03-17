import {useContext} from "react";
import CartContext from './CartContext.js'
import {db} from './clientfactory.js';
import { addDoc, collection, Timestamp } from "firebase/firestore";

function Form() {

    const {cartItems, cartTotal} = useContext(CartContext);

    const cartItemsIDs = [];

    cartItems.forEach(element => {
       cartItemsIDs.push(element.id);
    });
    

    const sendOrder = async(x) => {
        x.preventDefault();
        const e = [];
        e.push(document.getElementById("nombre").value);
        e.push(document.getElementById("apellido").value);
        e.push(document.getElementById("tel").value);
        e.push(document.getElementById("mail").value);
        e.push(document.getElementById("calle").value);
        e.push(document.getElementById("numero").value);
        e.push(document.getElementById("cp").value);
        e.push(document.getElementById("localidad").value);
        e.push(document.getElementById("provincia").value);

        let order = {
                buyer: {
                    name: e[0],
                    laName: e[1],
                    phone: e[2],
                    mail: e[3],
                    street: e[4],
                    numero: e[5],
                    cp: e[6],
                    localidad: e[7],
                    provincia: e[8],
                },
                items: cartItemsIDs,
                date: Timestamp.fromDate(new Date()),
                total: cartTotal,
            }

        const query = collection(db, 'orders');

        const docRef = await addDoc(query, order);

        alert(docRef.id);
        
    }




    return( 
        
    
        <div>
            <form onSubmit={sendOrder}>
                <div className="formContainer">
                    <div className="userData">
                        <div>
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre"></input>
                        </div>

                        <div>
                            <label for="apellido">apellido:</label>
                            <input type="text" id="apellido" name="apellido"></input>
                        </div>

                        <div>
                            <label for="tel">telefono:</label>
                            <input type="text" id="tel" name="tel"></input>
                        </div>

                        <div>
                            <label for="mail">mail:</label>
                            <input type="text" id="mail" name="mail"></input>
                        </div>
                        
                        
                    </div>

                    <div className="locationData"> 
                        <div>
                            <label for="calle">calle:</label> <br/>
                            <input type="text" id="calle" name="calle"></input>
                        </div>

                        <div>
                            <label for="numero">numero:</label>
                            <input type="text" id="numero" name="numero"></input>
                        </div>

                        <div>
                            <label for="cp">codigo postal:</label>
                            <input type="text" id="cp" name="cp"></input>
                        </div>

                        <div>
                            <label for="localidad">localidad:</label>
                            <input type="text" id="localidad" name="localidad"></input>
                        </div>
                        <div>
                            <label for="provincia">provincia:</label>
                            <input type="text" id="provincia" name="provincia"></input>
                        </div>
                    </div>
                </div>

                <button type="submit button" value="Submit" className="btn btn-outline-dark" >Enviar Compra</button>
            </form>
      </div>
    

    )
}

export default Form;