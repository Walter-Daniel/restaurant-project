import { Row } from 'antd';
import { getProductByCategory } from '../helpers/getProductByCategory'
import { ProductCard } from './ProductCard';

export const ProductsList = ({ category, img }) => {

    const products = getProductByCategory( category ); 
 
  return (
    <div>
        <Row className='card-product'>
                {
                    products.map( product => (
                        <ProductCard key={product._id}
                                     product={product}
                                     img={img}
                                     {...product}
                                     /> ))
                }

        </Row>
    </div>
  )
}
