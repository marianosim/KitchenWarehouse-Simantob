import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

function ItemCount({initial, stock}) {
    const [count, setCount] = useState(initial);
    
    const handleAdd = () => {
        count < stock? setCount(count + 1) : alert('La cantidad solicitada supera el stock disponible')
    };
    const handleSubstract = () => {
        count > 1 ? setCount(count - 1) : setCount(initial)
    }
  return (
    <>

       <div className='item-qty-container'>
            <div className='item-qty-btns'>
                <Button variant="outline-dark" onClick={handleSubstract}>-</Button>
                <span className='item-qty'>{count}</span>
                <Button variant="outline-dark" onClick={handleAdd}>+</Button>
            </div>
            <div>
                <Button variant="outline-dark" className='add-to-cart-btn'>Agregar al carrito</Button>
            </div>
        </div>             
    </>
  )
}

export default ItemCount;