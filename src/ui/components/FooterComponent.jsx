import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons"
import Title from "antd/lib/skeleton/Title"


export const FooterComponent = () => {
  return (
    <div className="container-fluid">
        <div className="footer">
            <div className="logo">
                <img src="/assets/images/decoracion/logo.png" alt="logo de la marca, un sombrero y bigotes" />
                <a href="/">Bon appétit</a>
            </div>
            <ul>
                <li>
                    <a href="#">
                        <FacebookOutlined />
                    </a>
                </li>
                <li>
                    <a href="#">
                      <TwitterOutlined />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <InstagramOutlined />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <LinkedinOutlined />
                    </a>
                </li>
            </ul>
            <p>Copyrights © todos los derechos reservados 2022</p>
        </div>
    </div>
  )
}
