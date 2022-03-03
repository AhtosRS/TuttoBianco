import react from "react";
import widget from '../imgs/carrito.png'

function CartWidget() {
    return( 
        
  <div className="alternador">

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <img src={widget} className="carritoLogo" alt="..."></img>
    </button>
    <div className="offcanvas offcanvas-end" id="errorboostrap" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Tutto-Bianco</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {/* agregar aca el cart.js------------------------*/}
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">productos x</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">productos y</a>
          </li>
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>

    )
}

export default CartWidget;