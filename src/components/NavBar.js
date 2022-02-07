import react from "react";
import CartWidget from "./CartWidget";

function Navigation() {
    return( <div className="navContainer">
        <div className="branding">
            <p>Tutto-Bianco</p>
        </div>
        <div className="products">
           <ul className="list">
                <li className="item"><a href="#">Remeras</a></li>
                <li className="item"><a href="#">Pantalones</a></li>
                <li className="item"><a href="#">Zapatillas</a></li>
                <li className="item"><a href="#">Accesorios</a></li>
            </ul> 
        </div>
        <CartWidget />
    </div>

    )
}

export default Navigation;