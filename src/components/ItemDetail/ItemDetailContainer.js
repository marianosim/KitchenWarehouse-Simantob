import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { getSingleItem } from '../../services/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import LoadSpinner from '../Spinner/Spinner';

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true)
    getSingleItem(id)
      .then(data => {
        setItem(data)
      })
      .finally(setIsLoading(false))
  }, []);

  return (
    <Container fluid >
      {isLoading ? <LoadSpinner /> :
        <ItemDetail item={item} />}
    </Container>
  )
}

export default ItemDetailContainer