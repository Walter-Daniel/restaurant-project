import { Button } from 'antd';
import React from 'react'
import { Title } from '../../../admin/components';
import { useCart } from '../../../context/CartContext';
import { CartContent } from './CartContent';

export const CartPage = () => {
    const cart = useCart();
    const total = cart.cartItems.reduce( (previous, current ) => previous + current.amount * current.price, 0 );
    const totalItems = cart.cartItems.reduce( (previous, current ) => previous + current.amount, 0 );

    const title = 'Carrito'

  return (
    <>
        <div className="layout-home">
          <div className="container-fluid">
            <Title title={title} />
            <hr />
                    
            {cart.cartItems.length === 0 
                                        ? <h3>Tu Carrito está vacío</h3> 
                                        : <CartContent /> }
            <h3>Total: ${total}</h3>
            <h3>Cantidad total: {totalItems}</h3>
            <Button className='btn-second' onClick={() => cart.purchaseOrder(totalItems)}>Comprar</Button>
          </div>
        </div>
    </>
  )
}
