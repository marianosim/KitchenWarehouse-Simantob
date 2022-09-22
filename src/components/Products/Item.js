import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

function Item({item}) {
  return (
    <>
         <Card style={{ width: '22rem', margin: '2%'}}>
            <Card.Img variant="top" src={item.image} className='product-image' />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}
                    {item.price}
                    </Card.Text>
                </Card.Body>
            </Card>
    </>
  )
}

export default Item