import { Button, Form } from "antd";
import Item from "antd/lib/list/Item";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";

export const UserModal = () => {
    

    const [modalAddUser, setmodalAddUser] = useState(false);
    const [newUser, setNewUser] = useState({
        fullName: '',
        email: '',
        role: ''
    })

    openCloseModal = () => {
        setmodalAddUser(!modalAddUser)
    }

    

    const handleChange = e => {
        const {name, value} = e.target
        setNewUser({...artista,
        [name]: value});
        console.log(newUser)
    }
  return (
    <Modal
        visible={modalAddUser}
        title="Agregar Usuario"
        destroyOnClose={true}
        onCancel={openCloseModal}
        centered
        footer={[
            <Button onClick={ openCloseModal } >Cancelar</Button>,
            <Button type="primary" >Insertar</Button>
        ]}
    >
        <Form>
            <Item label="Nombre completo">
                <input type="text" name="fullName" onChange={ handleChange }/>
            </Item>
            <Item label="Email">
                <input type="email" name="email" onChange={ handleChange }/>
            </Item>
            <Item label="Rol">
                <input type="text" name="role" onChange={ handleChange }/>
            </Item>
        </Form>
    </Modal>
  )
}
