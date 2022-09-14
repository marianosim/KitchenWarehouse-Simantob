import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer({ greeting }) {
  return (
    <div>
        <Container fluid className='product-list'>
        <h4 className='greeting'>{greeting}</h4>
        <ItemCount initial={1} stock={5}/>
        </Container>
    </div>
  )
};
