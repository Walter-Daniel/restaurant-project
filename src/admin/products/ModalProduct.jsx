
import { useAuth } from "../../context/AuthContext";
import { Form, Modal, notification } from "antd"
import axios from "axios";
import { ModalComponent } from "./ModalComponent";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

const URL = 'http://rolling-food.herokuapp.com/api/product';

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
          const editProduct = await axios.put(`${URL}/${product._id}` , values, {
            headers:  {
              'Authorization': 'Bearer ' + auth.token
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
