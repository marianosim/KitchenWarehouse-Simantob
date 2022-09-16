import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';
import getItems from '../../services/MockApi';
import ItemList from '../Products/ItemList';

export default function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
    .then(data => {
      setItems(data)
    })
  }, []);
  return (
    <div>
        <Container fluid className='product-list'>
        <h4 className='greeting'>{greeting}</h4>
        <ItemList items={items}/>
        </Container>
    </div>
  )
};
