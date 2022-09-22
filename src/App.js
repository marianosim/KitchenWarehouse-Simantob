//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  let greeting = '¡Bienvenidos a nuestra tienda!';
  return (
    <div className="App">
      <NavBar />
      {/*<ItemListContainer greeting={greeting}/>*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
