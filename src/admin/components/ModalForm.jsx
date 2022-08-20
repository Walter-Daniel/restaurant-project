import { Button, Form } from "antd"
import Item from "antd/lib/list/Item"


export const ModalForm = ({ createUser }) => {
  return (
    <Modal visible={ createUser }
           title= "Crear un nuevo usuario"
           destroyOnClose={ true }
           onCancel={ openCloseModal }
           centered
           footer={[
            <Button onClick={openCloseModal}> Cancelar </Button>,
            <Button type="primary" htmlType="submit"> Crear </Button>
           ]}
    >
      <Form>
        <Form.Item
          name="fullName"
          label="Nombre Completo"
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
          <Input placeholder='María Ramos'/>
        </Form.Item>
        <Form.Item
          label="Correo"
          name="email"
          rules={[
          {
              required: true,
              type: 'email',
              message: 'Por favor ingrese su correo!',
          },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
          {
              required: true,
              message: 'Por favor ingrese su contraseña!',
          },
          {
              min: 6,
              max: 12, 
              message: 'Las contraseña tienen entre ${min} y ${max} caracteres',
          },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}
