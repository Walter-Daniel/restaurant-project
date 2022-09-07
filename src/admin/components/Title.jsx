import iconLeft from "../../../assets/images/decoracion/icon-left.png";
import iconRight from "../../../assets/images/decoracion/icon-right.png";

export const Title = ({ title }) => {
  return (
    <div className="title-layout">
        <img src={iconLeft} alt="nube izquiera" />
          <h1>{title}</h1>
         <img src={iconRight} alt="nube izquiera" />
    </div>
  )
}
