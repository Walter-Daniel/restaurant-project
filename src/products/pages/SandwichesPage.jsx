
import { Title } from '../../admin/components/Title';
import { ProductsList } from '../components/ProductsList';
import imagen from '../../../assets/images/carts/sanguche.jpg';


export const SandwichesPage = () => {
  const title = 'Sandwiches'
  return (
    <div className='layout-home '>
      <div className="container-fluid">
        <Title title={title} />
        <hr />
        <ProductsList category='Sandwiches' img={imagen}/>
      </div>
    </div>
  )
}
