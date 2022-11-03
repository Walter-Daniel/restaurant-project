import { Button, Card, Row } from 'antd'
import React from 'react'
import { useAuth } from '../../context/AuthContext';
import imagen from '../../../assets/images/carts/pizza.webp';
import { useCart } from '../../context/CartContext';
import { Title } from "../../admin/components/Title";
const { Meta } = Card;


export const FeaturedProduct = () => {

    const auth = useAuth();
    const cart = useCart();
    let products = auth.product.data.products
    const title = 'Productos destacados'
  return (
    <div className='layout-home'>
      <div className='container-fluid'>
        <Title title={title}/>
        <Row className='card-product'>    
          {
            products.map(product => (
                product.promo === false ? '' :
                                            <Card
                                                key={product._id}
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src={imagen} />}
                                            >
                                            <Meta title={product.name} description={product.detail} />
                                            <p>Precio: ${product.price}</p>
                                            <Button onClick={() => cart.addItemToCart( product  )} type="primary" className='btn-second' >Añadir al Carrito</Button>
                                        </Card>
            ))
        }
        </Row> 
      </div>
    </div>
  )
}
