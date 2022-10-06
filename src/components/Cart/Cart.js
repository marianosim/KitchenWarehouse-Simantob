import React from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import EmptyCartImage from '../../assets/Images/empty-cart.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './cart.css'


function Cart() {
    const { cart, getItemPrice, deleteItem, emptyCart } = useContext(CartContext);
    return (
        <>
            {cart.length > 0 ?
                <>
                    <div className='d-flex justify-content-between cart-container'>
                        <h1>¡Tu carrito de compra!</h1>

                    </div>
                    <Table striped bordered hover responsive style={{ margin: 'auto', verticalAlign: 'middle', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total: ${getItemPrice().toLocaleString('es-AR')}</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {cart.map((item, i) => {
                                return <tr key={i}>
                                    <td><Image src={item.image} width='90vh' alt='Imagen de Producto' /></td>
                                    <td>{item.title}</td>
                                    <td>{item.qty}</td>
                                    <td>${(item.price).toLocaleString('es-AR')}</td>
                                    <td><OverlayTrigger
                                        overlay={
                                            <Tooltip id={'tooltip-top'}>
                                                Eliminar
                                            </Tooltip>
                                        }>
                                        <Button variant='danger' onClick={() => deleteItem(item.id)}>X</Button>
                                    </OverlayTrigger></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                    <Button variant='outline-danger' className='empty-cart-btn' onClick={() => emptyCart()}>Vaciar carrito</Button>
                </> :
                <div className='empty-cart-container'>
                    <h2>Tu carrito está vacío</h2>
                    <Image src={EmptyCartImage} width='20%'/>
                    <h4>¡Te invitamos a mirar nuestro productos!</h4>
                    <Button as={Link} to='/' className='return-home-btn'> Volver al Home</Button>
                </div>
            }

        </>

    )
}

export default Cart