import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';


function ItemDetail({ item }) {
  const [itemsOnCart, setItemsOnCart] = useState(false);

  const handleAddToCart = (count) => {
    alert(`Agregaste ${count} producto/s a tu carrito`)
    setItemsOnCart(true);
  }
  return (
    <Container fluid className='item-detail-container'>
      <div className='product-detail'>
        <Image src={item.image} className='product-detail-image' />
        <div>
          <h2>{item.title}</h2>
          <Rating />
          <h4>{item.price}</h4>
          {!itemsOnCart ?
            <ItemCount initial={1} stock={5} onAddToCart={handleAddToCart} /> : <Button as={Link} to={'/cart'}>Finalizar compra</Button>}
        </div>
        <div className='fluid product-description'>
          <p>{item.description}</p>
        </div>
      </div>
    </Container>

  )
}

export default ItemDetail