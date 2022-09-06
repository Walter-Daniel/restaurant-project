import { Title } from "../../admin/components/Title";
import { ProductsList } from '../components/ProductsList';
import imagen from '../../../assets/images/carts/pizza.webp';


export const PizzasPage = () => {
  const title = 'Pizzas'
  return (
    <div className='layout-home'>
      <div className="container-fluid">
        <Title title={title} />
        <hr />
        <ProductsList category='Pizzas' img={imagen} />
      </div>
    </div>
  )
}
