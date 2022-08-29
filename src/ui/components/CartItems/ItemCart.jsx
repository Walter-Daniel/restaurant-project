import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

export const ItemCart = () => {
    const cart = useCart();
    const [productsLength, setProductsLength] = useState(0);

    useEffect(() => {
        setProductsLength( cart.cartItems.reduce( (previous, current ) => previous + current.amount, 0 ))
    }, [cart.cartItems])

    

  return (
    <> 
        <Link to='carrito'>
            <div className="cart">
                <ShoppingCartOutlined />
                <span>{productsLength}</span>
            </div>
        </Link>
        
    </>
  )
}