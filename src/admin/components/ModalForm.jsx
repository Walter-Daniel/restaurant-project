import { Button, Form, Input, Modal } from "antd"
import Item from "antd/lib/list/Item"
import { useState } from "react";

const layout = {
  labelCol:{
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

export const ModalForm = ({ openCloseModal, createUser }) => {


  const [newUser, setNewUser] = useState({
    id: '',
    fullName: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { fullName, value } = e.target;
    setNewUser({...newUser,
    [fullName]: value});
    console.log(newUser)
  }

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
      <Form {...layout}>
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
          <Input placeholder='María Ramos' onChange={ handleChange }/>
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
          <Input placeholder="maria@email.com" onChange={ handleChange }/>
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
          <Input.Password onChange={ handleChange }/>
        </Form.Item>
      </Form>
    </Modal>
  )
}
