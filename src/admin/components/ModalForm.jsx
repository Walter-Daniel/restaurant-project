import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Button, Form, Input, Modal, Radio, notification } from "antd"
import axios from "axios";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

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

const URL = import.meta.env.VITE_API_URL;

export const ModalForm = ({ closeModal, user, isModalVisible}) => {

    const auth = useAuth();
    const [form] = Form.useForm();
    
    useEffect(() => {
      form.setFieldsValue( user )
    }, [user]);

    const onFinish = (values) => {
       try {
        confirm({
          title: 'Quiéres finalizar la edición?',
          icon: <ExclamationCircleOutlined />,
          content: 'Al darle OK se guardaran los cambios realizados',
          
          async onOk() {
            const editUser = await axios.put(`${URL}/users/${user._id}` , values, {
              headers:  {
                'Authorization': auth.token
                        }
              })
            form.resetFields();
            closeModal();
            openNotification('Editado', 'El usuario ha sido editado con éxito', 'success')
          }
        });
       
       } catch (error) {
        console.log(error)
       }
    }

  return (
    <Modal visible={ isModalVisible }
           title= "Editar un usuario"
           destroyOnClose={ true }
           onCancel={ closeModal }
  
           footer={[
         
              <Form.Item key='footer-modal-edit-user'>
                <Button type="default" htmlType="button" onClick={closeModal}>
                    Cerrar
                </Button>                
                <Button type="primary" form="myForm" key="submit" htmlType="submit">
                    Enviar
                </Button>                
              </Form.Item>
           ]}
    >
      <Form {...layout}
            form={form}
            onFinish={onFinish}
            layout="vertical"
            id="myForm"

      >
       <Form.Item
        name="fullName"
        label="Nombre completo:"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su nombre completo!',
            whitespace: true,
          },
          {
            min: 9,
            max: 30, 
            message: 'Debe ingresar entre 6 y 30 carácteres',
          }
        ]}
      >
        <Input type='text'/>
      </Form.Item>
      <Form.Item
        name="email"
        label="Correo electrónico:"
        rules={[
          {
            type: 'email',
            message: 'El correo no es valido!',
          },
          {
            required: true,
            message: 'Por favor introduce tu correo',
          },
        ]}
      >
        <Input type='email'/>
      </Form.Item>
      <Form.Item
        name="active"
        label="Estado"
        rules={[{ required: true, message: 'Por favor, selecciona un estado!' }]}
      >
        <Radio.Group>
          <Radio.Button value="true">Activo</Radio.Button>
          <Radio.Button value="false">Inactivo</Radio.Button>
        </Radio.Group>
      </Form.Item>
       
      </Form>
    </Modal>
  )
}
