import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import img from '../../../assets/images/decoracion/logo.png'


export const FooterComponent = () => {
  return (
    <div className="container-fluid">
        <div className="footer">
            <div className="logo">
                <img src={img} alt="logo de la marca, un sombrero y bigotes" />
                <a href="/">Bon appétit</a>
            </div>
            <ul>
                <li>
                    <a href="https://www.facebook.com" target="_blank">
                        <FacebookOutlined />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank">
                      <TwitterOutlined />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank">
                        <InstagramOutlined />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com" target="_blank">
                        <LinkedinOutlined />
                    </a>
                </li>
            </ul>
            <p>Copyrights © todos los derechos reservados 2022</p>
        </div>
    </div>
  )
}
