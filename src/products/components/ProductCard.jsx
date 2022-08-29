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
 }) => {

  const auth = useAuth();
  const cart = useCart();

  return (
      <>
      {product.active === false ? '' : 
        <Card
          key={_id}
          hoverable
          style={{ width: 240 }}
        >
          <Meta title={name} description={description} />
          <p>Precio: ${price}</p>
          <Button onClick={() => cart.addItemToCart( product  )} type="primary" >Añadir al Carrito</Button>
        </Card>
      }
    </>
  )
}
