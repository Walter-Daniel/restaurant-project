import { Row } from 'antd';
import { getProductByCategory } from '../helpers/getProductByCategory'
import { ProductCard } from './ProductCard';

export const ProductsList = ({ category }) => {

    const products = getProductByCategory( category ); 
 
  return (
    <div>
        <Row className='card-product'>
                {
                    products.map( product => (
                        <ProductCard key={product._id}
                                     product={product}
                                     {...product}
                                     /> ))
                }

        </Row>
    </div>
  )
}
