import { createContext, useState } from 'react';

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    //Looks up if an item is in cart
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };
    //Adds an item to cart
    const addItem = (item, qty) => {
        const newItem = {
            ...item,
            qty
        }
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxCart = [...cart];
            auxCart[productIndex].qty += qty
            setCart(auxCart);
        } else {
            setCart([...cart, newItem]);
        }
        // isInCart(newItem.id)?  : setCart([...cart, newItem])
    };
    //Removes all items from cart
    const emptyCart = () => {
        return setCart([]);
    };
    //Removes one item from cart
    const deleteItem = (id) => {
        return setCart(cart.filter(item => item.id !== id));
    };
    //Gets total items in cart
    const getItemQty = () => {
        return cart.reduce((acc, item) => acc += item.qty, 0);
    };
    //Gets total price of cart
    const getItemPrice = () => {
        return cart.reduce((acc, item) => acc += Number(item.price) * item.qty, 0)
    };
    return <Provider value={{ cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice }}>{children}</Provider>
};

export default MyProvider;

