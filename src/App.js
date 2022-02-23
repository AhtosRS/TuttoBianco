import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navigation from "./components/NavBar.js";

function App() {
    return( 
      <div className="App">
        <Navigation/>
        {/* <ItemListContainer greeting="Tutto-Bianco"/> lo paso a comentario para la el desafio 6*/}
        <ItemDetailContainer/>
      </div>
    );
}

export default App;
