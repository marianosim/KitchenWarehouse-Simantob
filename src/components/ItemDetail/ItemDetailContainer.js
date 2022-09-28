import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { getSingleItem } from '../../services/MockApi';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import LoadSpinner from '../Spinner/Spinner';

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});

  const { id } = useParams();
  useEffect(() => {
    getSingleItem(id)
      .then(data => {
        setItem(data)
      })
  }, []);
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  return (
    <Container fluid >
      {isLoading && <LoadSpinner />}
      {isLoading ||
        <ItemDetail item={item} />}
    </Container>
  )
}

export default ItemDetailContainer