import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navigation from "./components/NavBar.js";

function App() {
    return( 
      <div className="App">
        <Navigation/>
        <ItemListContainer greeting="Tutto-Bianco"/>
      </div>
    );
}

export default App;
