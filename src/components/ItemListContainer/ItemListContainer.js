import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';
import getItems, { getItemsByCategory } from '../../services/MockApi';
import ItemList from '../Products/ItemList';
import LoadSpinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getItems()
        .then(data => {
          setItems(data)
        })
    } else {
      getItemsByCategory(cat)
        .then(data => setItems(data))
    }
  }, [cat]);
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)
  return (
    <>
      <Container fluid className='product-list'>
        {isLoading && <LoadSpinner />}
        {isLoading ||
          <div>
            <h4 className='greeting'>{greeting}</h4>
            <ItemList items={items} />
          </div>}
      </Container>
    </>
  )
};
