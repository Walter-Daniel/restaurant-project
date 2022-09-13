import { useAuth } from "../../context/AuthContext";
import { Form, Modal, Button, Radio, notification } from "antd"
import axios from "axios";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useEffect } from "react";
const { confirm } = Modal;

const URL = 'http://rolling-food.herokuapp.com/api/order';

const layout = {
    labelCol:{
        span: 8
    },
    wrapperCol: {
        span: 24
    }
};

const openNotification = (message, description, type) => {
notification[type]({
    message: message,
    description: description,
    placement: 'bottom'
});
};

export const ModalOrder = ({ order, closeModal, isModalVisible }) => {

    const auth = useAuth();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        confirm({
          title: 'Quiéres finalizar la edición?',
          icon: <ExclamationCircleOutlined />,
          content: 'Al darle OK se guardaran los cambios realizados',
          
          async onOk() {
            const editOrder = await axios.put(`${URL}/${order._id}` , values, {
              headers:  {
                'Authorization': 'Bearer ' + auth.token
                        }
              })
              closeModal();
              openNotification('Editado', 'La orden ha sido editada con éxito', 'success')
          }
        });
      }
      useEffect(() => {
        isModalVisible ? form.setFieldsValue( order ) : [];
      }, [order])
  return (
    <Modal visible={ isModalVisible }
           title='Estado de la Orden'
           destroyOnClose={ true }
           onCancel={ closeModal }
           footer={[
         
              <Form.Item key='button-modal-order'>
                <Button type="default" htmlType="button" onClick={closeModal }>
                    Cerrar
                </Button>                
                <Button type="primary" form="myFormProduct" key="submit" htmlType="submit">
                    Enviar
                </Button>                
              </Form.Item>
           ]}
    >
      <Form {...layout}
            form={form}
            onFinish={onFinish}
            layout="vertical"
            id="myFormProduct"
      >
       
      <Form.Item
        name="status"
        label="Estado"
        rules={[{ required: true, message: 'Por favor, selecciona un estado!' }]}
      >
        <Radio.Group>
          <Radio.Button value="PLACED">Atendido</Radio.Button>
          <Radio.Button value="PENDING">Pendiente</Radio.Button>
        </Radio.Group>
      </Form.Item>  
      </Form>
    </Modal>
  )
}
