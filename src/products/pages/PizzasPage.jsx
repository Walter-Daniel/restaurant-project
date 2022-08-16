import { ProductsList } from "../components/ProductsList"


export const PizzasPage = () => {
  return (
    <div className='layout-home'>
      <h1>Pizzas</h1>
      <hr />
      <ProductsList category='Pizzas' />
    </div>
  )
}
