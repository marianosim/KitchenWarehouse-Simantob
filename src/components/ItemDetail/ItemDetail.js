import React from 'react';
import Image from 'react-bootstrap/Image';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Rating from '../Rating/Rating';


function ItemDetail({item}) {
  return (
    <div className='product-detail'>
        <Image src={item.image} className='product-detail-image'/>
        <div>
        <h2>{item.title}</h2>
        <Rating />
        <h4>{item.price}</h4>
        <div className='product-description'>
          <p>{item.description}</p>
        </div>
        <ItemCount initial={1} stock={5}/>
        </div>
    </div>
  )
}

export default ItemDetail