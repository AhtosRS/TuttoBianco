import "./App.css";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navigation from "./components/NavBar.js";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { CartProvider } from "./components/CartContext.js";

function App() {
    return( 
      <BrowserRouter className="App">
        <CartProvider>
        <Navigation/>
        
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/categories/:category" element={<ItemListContainer/>} />
          {/* <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} /> */}

        </Routes>

        </CartProvider>
      </BrowserRouter>
    );
}

export default App;
