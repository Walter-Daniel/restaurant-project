
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Form, Modal } from "antd"
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { ModalComponent } from "../ModalComponent";
const { confirm } = Modal;
import { getEnvVariables } from '../../../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const URL = `${VITE_API_URL}/products`;

export const CreateProduct = ({ closeModalCreate, product, isModalCreateVisible }) => {
    const auth = useAuth();
    const [form] = Form.useForm();
    const onFinish =(values) => {
      confirm({
        title: 'Confirmar la operación',
        icon: <ExclamationCircleOutlined />,
        content: 'Al darle OK se guardaran los cambios realizados',
        
        async onOk() {
          const createProduct = await axios.post(`${URL}`, values, {
            headers:  {
              'Authorization': auth.token
                      }
            })
            form.resetFields();
            closeModalCreate();
        }
      });
    }

    const title= 'Crear un nuevo producto'
    
  return (
    <ModalComponent isModalCreateVisible={isModalCreateVisible} closeModalCreate={closeModalCreate} onFinish={onFinish} product={product} title={title} />
  )
}
