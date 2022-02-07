import react from "react";
import widget from '../imgs/carrito.png'

function CartWidget() {
    return( 
        
  <div className="alternador">

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      {/* <span class="navbar-toggler-icon"></span> */}
      {/* <img className="carritoLogo" src="../imgs/carrito.png"></img> */}
      <img src={widget} className="carritoLogo"></img>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Tutto-Bianco</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">productos x</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">productos y</a>
          </li>
          
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>

    )
}

export default CartWidget;