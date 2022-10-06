import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';
import getItems, { getItemsByCategory } from '../../services/MockApi';
import ItemList from '../Products/ItemList';
import LoadSpinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {

  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    setIsLoading(true)
    if (cat === undefined) {
      getItems()
        .then(data => {
          setItems(data)
        })
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(true)
      getItemsByCategory(cat)
        .then(data => setItems(data))
        .finally(() => setIsLoading(false))
    } 
  }, [cat]);
  // setTimeout(() => {
  //   setIsLoading(false)
  // }, 2000)
  return (
    <>
      {isLoading ? <LoadSpinner /> :
      <Container fluid className='product-list'>
          <div>
            <h4 className='greeting'>{greeting}</h4>
            <ItemList items={items} />
          </div>
      </Container>}
    </>
  )
};
