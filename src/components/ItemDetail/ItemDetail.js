import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Rating from '../Rating/Rating';


function ItemDetail({ item }) {
  return (
    <Container fluid>
      <div className='product-detail'>
        <Image src={item.image} className='product-detail-image' />
        <div>
          <h2>{item.title}</h2>
          <Rating />
          <h4>{item.price}</h4>
          <ItemCount initial={1} stock={5} />
        </div>
        <div className='fluid product-description'>
          <p>{item.description}</p>
        </div>
      </div>
    </Container>

  )
}

export default ItemDetail