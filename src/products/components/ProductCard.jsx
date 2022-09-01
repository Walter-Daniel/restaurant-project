import { Button, Card } from 'antd';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const { Meta } = Card;



export const ProductCard = ({
    _id,
    name,
    description,
    price,
    product,
    img
 }) => {

  const auth = useAuth();
  const cart = useCart();

  return (
      <>
      <div className="card-container">
        {product.active === false ? '' : 
          <Card
            key={_id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={img} />}
          >
            <Meta title={name} description={description} />
            <p>Precio: ${price}</p>
            <Button onClick={() => cart.addItemToCart( product  )} type="primary" className='btn-second' >Añadir al Carrito</Button>
          </Card>
        }
      </div>
      
    </>
  )
}
