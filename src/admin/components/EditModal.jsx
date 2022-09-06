import { Button, Form, Input, Modal } from "antd"
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const layout = {
  labelCol:{
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

export const EditModal = ({ user }) => {

    const auth = useAuth();
    const [form] = Form.useForm();
    useEffect(() => {
      form.setFieldValue(user)
    }, [third])
    
  
    const onFinish = (values) => {
        auth.register(values)
        form.resetFields();
    }
  

  return (
    <Modal visible={ createUser }
           title= "Crear un nuevo usuario"
           destroyOnClose={ true }
           onCancel={ openCloseModal }
           centered
           footer={[
            <Button onClick={openCloseModal}> Cerrar modal</Button>,
           ]}
    >
      <Form {...layout}
            form={form}
            onFinish={onFinish}
            layout="vertical"
      >
       
       <Form.Item
        name="fullName"
        label="Nombre(s)"
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
        <Input placeholder='María Ramos' />
      </Form.Item>
      <Form.Item
        name="email"
        label="Correo electrónico"
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
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Contraseña"
        rules={[
          {
            required: true,
            min: 6,
            max: 12,
            message: 'Tu contraseña debe terner entre ${min} y ${max} caracteres!',
          },
        ]}
        hasFeedback
      >
                      
        </Form.Item>
      </Form>
    </Modal>
  )
}
