import { Button, Card } from 'antd';
import { useAuth } from '../../context/AuthContext';

const { Meta } = Card;



export const ProductCard = ({
    _id,
    name,
    description,
    price,
    product,
    handleClick
 }) => {

  const auth = useAuth();

  return (
      <>
        <Card
          key={_id}
          hoverable
          style={{ width: 240 }}
        >
          <Meta title={name} description={description} />
          <p>Precio: ${price}</p>
          <Button onClick={() => handleClick(product)} type="primary">Añadir al Carrito</Button>
        </Card>

    </>
  )
}
