
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd"
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { ModalComponent } from "../ModalComponent";


const { confirm } = Modal;
const URL = import.meta.env.VITE_API_URL


export const CreateProduct = ({ closeModalCreate, product, isModalCreateVisible }) => {
    const auth = useAuth();
    const onFinish =(values) => {
      confirm({
        title: 'Confirmar la operación',
        icon: <ExclamationCircleOutlined />,
        content: 'Al darle OK se guardaran los cambios realizados',
        
        async onOk() {
          const createProduct = await axios.post(`${URL}/products`, values, {
            headers:  {
              'x-token': auth.token
                      }
            })
            closeModalCreate();
        }
      });
    }

    const title= 'Crear un nuevo producto'
    
  return (
    <ModalComponent isModalCreateVisible={isModalCreateVisible} closeModalCreate={closeModalCreate} onFinish={onFinish} product={product} title={title} />
  )
}
