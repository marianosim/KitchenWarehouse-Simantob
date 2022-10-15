//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import MyProvider from './context/CartContext';

function App() {
  let greeting = '¡Bienvenidos a nuestra tienda!';
  return (
    <div className="App">
      <BrowserRouter>
      <MyProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:cat' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout/:orderId' element={<Checkout />}/>
        </Routes>
        <Footer />
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
