import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import {getSingleItem} from '../../services/MockApi';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        getSingleItem(1)
        .then(data => {
            setItem(data)
        })
    }, []);

  return (
    <Container fluid>
        <ItemDetail item={item}/>
    </Container>
  )
}

export default ItemDetailContainer