import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkoutForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../context/CartContext'
import { createBuyOrder } from '../../services/firestore';



const CheckoutForm = () => {
    const { cart, getItemPrice } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        const newFormData = { ...formData };
        newFormData[inputName] = inputValue;
        setFormData(newFormData);
    }


    const handleCheckout = (e) => {
        e.preventDefault();
        const orderData = {
            buyer: formData,
            items: cart,
            date: new Date(),
            total: getItemPrice()
        };
        createBuyOrder(orderData)
            .then(orderId => {
                navigate(`/checkout/${orderId}`)
            })
    };

    return (
        <div className='checkout-form'>
            <h3>Ingrese sus datos:</h3>
            <Form onSubmit={handleCheckout}>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label style={{ fontSize: '0.8em' }}>Nombre y Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre completo"
                        name='name'
                        onChange={handleInputChange}
                        value={formData.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label style={{ fontSize: '0.8em' }}>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Cód. de área + número"
                        name='phone'
                        onChange={handleInputChange}
                        value={formData.phone} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={{ fontSize: '0.8em' }}>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="ej: info@kitchenwarehouse.com"
                        name='email'
                        onChange={handleInputChange}
                        value={formData.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Acepto recibir novedades y promociones" style={{ fontSize: '0.8em' }} />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit">
                    Finalizar compra
                </Button>
            </Form>
        </div>
    )
}

export default CheckoutForm