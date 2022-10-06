import React, { useState, useContext } from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


function ItemDetail({ item }) {
  const [itemsOnCart, setItemsOnCart] = useState(false);
  const [qty, setQty] = useState(1);

  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(item, qty);
    // alert(`Agregaste ${qty} producto/s a tu carrito`)
    setItemsOnCart(true);
  }
  return (
    <Container fluid className='item-detail-container'>
      <div className='product-detail'>
        <Image src={item.image} className='product-detail-image' />
        <div>
          <h2>{item.title}</h2>
          <Rating />
          <h4>${item.price}</h4>
          {!itemsOnCart ?
            <ItemCount qty={qty} setQty={setQty} stock={5} onAddToCart={handleAddToCart} /> : <Button as={Link} to={'/cart'}>Finalizar compra</Button>}
        </div>
        <div className='fluid product-description'>
          <p>{item.description}</p>
        </div>
      </div>
    </Container>

  )
}

export default ItemDetail