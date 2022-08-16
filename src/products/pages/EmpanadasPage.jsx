import { ProductsList } from "../components/ProductsList"


export const EmpanadasPage = () => {
  return (
    <div className='layout-home'>
      <h1>Empanadas</h1>
      <hr />
      <ProductsList category='Empanadas' />
    </div>
  )
}
