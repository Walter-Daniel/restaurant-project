import { Col, Row } from 'antd';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getProductByCategory } from '../helpers/getProductByCategory'
import { ProductCard } from './ProductCard';

export const ProductsList = ({ category }) => {

    const products = getProductByCategory( category );
    const auth = useAuth();
    const setOrden = auth.setOrden
    const [cart, setCart] = useState([])
    const handleClick = (item) => {
      setCart([...cart, item])
      localStorage.setItem('productInCart', JSON.stringify(cart));
      setOrden(cart)
      console.log(cart)
    }
    
  return (
    <div>
        <Row className='card-product'>
                {
                    products.map( product => (
                        <ProductCard key={product._id}
                                     product={product}
                                     {...product}
                                     handleClick={handleClick} /> ))
                }

        </Row>
    </div>
  )
}
