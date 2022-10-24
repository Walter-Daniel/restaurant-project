
import { useAuth } from "../../context/AuthContext";
import { Form, Modal, notification } from "antd"
import axios from "axios";
import { ModalComponent } from "./ModalComponent";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

const URL = import.meta.env.VITE_API_URL

const openNotification = (message, description, type) => {
  notification[type]({
      message: message,
      description: description,
      placement: 'bottom'
  });
  };

export const ModalProduct = ({ closeModal, product, isModalVisible }) => {


    const auth = useAuth();
    const [form] = Form.useForm();
    
    const onFinish = (values) => {
      confirm({
        title: 'Quiéres finalizar la edición?',
        icon: <ExclamationCircleOutlined />,
        content: 'Al darle OK se guardaran los cambios realizados',
        
        async onOk() {
          const editProduct = await axios.put(`${URL}/products/${product._id}` , values, {
            headers:  {
              'Authorization': auth.token
                      }
            })
            form.resetFields();
            closeModal();
            openNotification('Editado', 'El producto ha sido editado con éxito', 'success')
        }    
      });
    }
    const title = "Editar un producto";
  return (
    <ModalComponent isModalVisible={isModalVisible} closeModal={closeModal} onFinish={onFinish} product={product} title={title}/>
  )
}
