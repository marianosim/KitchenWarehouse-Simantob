import React from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

function ItemCount({ qty, setQty, stock, onAddToCart }) {
    //const [count, setCount] = useState(initial);

    const handleAdd = () => {
        qty < stock ? setQty(qty + 1) : alert('La cantidad solicitada supera el stock disponible')
    };
    const handleSubstract = () => {
        qty > 1 ? setQty(qty - 1) : setQty(1)
    }
    return (
        <div className='item-qty-container'>
            <Button variant="outline-primary" onClick={handleSubstract}>-</Button>
            <span className='item-qty'>{qty}</span>
            <Button variant="outline-primary" className='add-btn' onClick={handleAdd}>+</Button>
            <Button variant="primary m-4" className='add-to-cart-btn' onClick={() => onAddToCart(qty)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;