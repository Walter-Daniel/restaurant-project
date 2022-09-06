import { ProductsList } from "../components/ProductsList"

export const PizzasPage = () => {
  const img = '../../../assets/images/carts/pizza.webp'
  return (
    <div className='layout-home'>
      <div className="container-fluid">
        <div className="title-layout">
          <img src="/assets/images/decoracion/icon-left.png" alt="nube izquiera" />
            <h1>Pizzas</h1>
          <img src="/assets/images/decoracion/icon-right.png" alt="nube izquiera" />
        </div>
        
        <hr />
        <ProductsList category='Pizzas' img={img} />
      </div>
    </div>
  )
}
