import { Button, Input, Table } from "antd";
import { Form } from "antd";
import Item from "antd/lib/list/Item";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import axios from "axios";

const layout = {
    labelCol:{
        span: 8
    },
    wrapperCol:{
        span: 16
    }
};

const URLREGISTER = 'localhost:3400/api/auth/register'


export const UserTable = ({users}) => {

    

    const [modalAddUser, setmodalAddUser] = useState(false);
    const [modalEdit, setmodalEdit] = useState(false);
    const [newUser, setNewUser] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const openCloseModal = () => {
        setmodalAddUser(!modalAddUser)
    }

    const openCloseModalEdit = () => {
        setmodalEdit(!modalEdit)
    }

    const handleChange = e => {
        const {name, value} = e.target
        setNewUser({...newUser,
        [name]: value});
        console.log(newUser)
    }
    
    const selectUser = ( newUser, caso ) => {
        setNewUser( newUser );
        (caso === 'Editar') && openCloseModalEdit();
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id'
        },
        {
            title: 'Usuario',
            dataIndex: 'fullName',
            key: 'fullName'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Rol',
            dataIndex: 'role',
            key: 'role'
        },
        {
            title: 'Acciones',
            key: 'acciones',
            render: (fila) => (
                <>
                    <Button type="primary">Editar</Button> {"  "}
                    <Button type="primary" danger>Eliminar</Button>
                    
                </>
            )
        },

        
    ]

    async function postUsers() {
        const response = await axios.post(URLREGISTER, newUser )
        setNewUser( users.concat(response.data) )
        console.log(response)
    }

    async function putUsers() {
        const response = await axios.post(URLREGISTER , newUser )
        setNewUser( users.concat(response.data) )
        console.log(response)
    }
    return (
        <div className="App">
            <br />
            <br />
            <Button type="primary" className="btn-second" onClick={ openCloseModal }>Agregar nuevo usuario</Button>
            <br />
            <br />
            <Table columns={columns} dataSource={users} />
            <Modal
                    visible={modalAddUser}
                    title="Agregar Usuario"
                    destroyOnClose={true}
                    onCancel={openCloseModal}
                    centered
                    footer={[
                <Button onClick={ openCloseModal } >Cancelar</Button>,
                <Button type="primary" onClick={ postUsers }>Agregar</Button>
            ]}
        >
            <Form {...layout}>
                <Form.Item label="Nombre completo">
                    <Input type="text" name="fullName" onChange={ handleChange }/>
                </Form.Item>
                <Form.Item label="Email">
                    <Input type="email" name="email" onChange={ handleChange }/>
                </Form.Item>
                <Form.Item label="Password">
                    <Input type="password" name="password" onChange={ handleChange }/>
                </Form.Item>
            </Form>
        </Modal>
            <Modal
                    visible={modalEdit}
                    title="Agregar Usuario"
                    destroyOnClose={true}
                    onCancel={openCloseModalEdit}
                    centered
                    footer={[
                <Button onClick={ openCloseModalEdit } >Cancelar</Button>,
                <Button type="primary" onClick={ () => selectUser(fila, "Editar")}>Editar</Button>
            ]}
        >
            <Form {...layout}>
                <Form.Item label="Nombre completo">
                    <Input type="text" name="fullName" onChange={ handleChange } value={newUser && newUser.fullName}/>
                </Form.Item>
                <Form.Item label="Email">
                    <Input type="email" name="email" onChange={ handleChange } value={newUser && newUser.email}/>
                </Form.Item>
                <Form.Item label="Rol">
                    <Input type="text" name="role" onChange={ handleChange } value={newUser && newUser.role}/>
                </Form.Item>
            </Form>
        </Modal>
        </div>
    )

    
}