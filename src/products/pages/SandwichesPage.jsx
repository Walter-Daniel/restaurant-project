
import { ProductsList } from '../components/ProductsList';

export const SandwichesPage = () => {
  const img = '../../../assets/images/carts/sanguche.jpg'
  return (
    <div className='layout-home '>
      <div className="container-fluid">
        <div className="title-layout">
          <img src="/assets/images/decoracion/icon-left.png" alt="nube izquiera" />
            <h1>Sandwiches</h1>
          <img src="/assets/images/decoracion/icon-right.png" alt="nube izquiera" />
        </div>
        <hr />
        <ProductsList category='Sandwiches' img={img}/>
      </div>
    </div>
  )
}
