import { ProductsList } from "../components/ProductsList"
import imagen from '../../../assets/images/carts/empanadas.jpg';
import { Title } from "../../admin/components/Title";

export const EmpanadasPage = () => {
  const title = 'Empanadas'

  return (
    <div className='layout-home'>
      <div className="container-fluid">
        <Title title={title} />
        <hr />
      <ProductsList category='Empanadas' img={imagen} />
      </div>
    </div>
  )
}
