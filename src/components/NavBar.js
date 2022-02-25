import react from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Navigation() {
    return( <div className="navContainer">
        <div className="branding">
            <Link to={"/"}><p>Tutto-Bianco</p></Link>
        </div>
        <div className="products">
           <ul className="list">
                <Link to={"/categories/remeras"}><li className="item"><a href="#">Remeras</a></li></Link>
                <Link to={"/categories/pantalones"}><li className="item"><a href="#">Pantalones</a></li></Link>
                <Link to={"/categories/zapatillas"}><li className="item"><a href="#">Zapatillas</a></li></Link>
                <Link to={"/categories/accesorios"}><li className="item"><a href="#">Accesorios</a></li> </Link>
            </ul> 
        </div>
        <CartWidget />
    </div>

    )
}

export default Navigation;