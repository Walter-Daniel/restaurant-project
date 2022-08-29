import React from 'react'
import { useCart } from '../../../context/CartContext';
import { CartContent } from './CartContent';

export const CartPage = () => {
    const cart = useCart();
    const total = cart.cartItems.reduce( (previous, current ) => previous + current.amount * current.price, 0 );

  return (
    <>
        <h2>Carrito de Compras</h2>
        <h2>Carrito de Compras</h2>
        <h2>Carrito de Compras</h2>
        <h2>Carrito de Compras</h2>
        <h2>Carrito de Compras</h2>
        <h2>Carrito de Compras</h2>
        <h2>Carrito de Compras</h2>
        <h2>Carrito de Compras</h2>
        <h2>Carrito de Compras</h2>
        
        {cart.cartItems.length === 0 
                                    ? <h3>Tu Carrito está vacío</h3> 
                                    : <CartContent /> }
        <h3>Total: ${total}</h3>

    </>
  )
}
