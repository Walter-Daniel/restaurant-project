import { ProductsList } from "../components/ProductsList"

export const EmpanadasPage = () => {
  return (
    <div className='layout-home'>
      <div className="title-layout">
        <img src="/assets/images/decoracion/icon-left.png" alt="nube izquiera" />
          <h1>Empanadas</h1>
         <img src="/assets/images/decoracion/icon-right.png" alt="nube izquiera" />
      </div>
      <hr />
      <ProductsList category='Empanadas' />
    </div>
  )
}
