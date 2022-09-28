import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

function ItemCount({ initial, stock }) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        count < stock ? setCount(count + 1) : alert('La cantidad solicitada supera el stock disponible')
    };
    const handleSubstract = () => {
        count > 1 ? setCount(count - 1) : setCount(initial)
    }
    return (
        <div className='item-qty-container'>
            <Button variant="outline-primary" onClick={handleSubstract}>-</Button>
            <span className='item-qty'>{count}</span>
            <Button variant="outline-primary" className='add-btn' onClick={handleAdd}>+</Button>
            <Button variant="primary m-4" className='add-to-cart-btn'>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;