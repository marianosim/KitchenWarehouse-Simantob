import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
  return (
    <div>
        <Container fluid className='product-list'>
        <h4 className='greeting'>{greeting}</h4>
        </Container>
    </div>
  )
};
