

import { Space, Table, Tag, Button, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ModalForm } from '../components/ModalForm';
const { Column, ColumnGroup } = Table;

export const UsersList = ({ users, deleteUser, editUser, user, closeModal, isModalVisible, setUsers }) => {

  const columns = [
    {
      title: 'Usuario',
      width: 150,
      dataIndex: 'fullName',
      key: 'fullName',
      fixed: 'left',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Acciones',
      key: 'action',
      fixed: 'right',
      width: 110,
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title='Borrar Usuario'>
            <Button type='primary' danger shape='circle' icon={<DeleteOutlined />} onClick={() => deleteUser(record._id)}/>
          </Tooltip>
          <Tooltip title='Editar Usuario'>
                  <Button shape='circle' icon={<EditOutlined />} onClick={() => editUser(record._id)} />
          </Tooltip>
        </Space>
      )
    },
  ];

  return (
    <>
      {/* <Button type='primary'>Agregar un nuevo usuario</Button> */}
      <ModalForm user={user}  closeModal={closeModal} isModalVisible={isModalVisible} setUsers={setUsers} users={users}/>
      {/* <Table dataSource={users}>       
          <Column title="ID" dataIndex="_id" key="_id" />
          <Column title="Usuario" dataIndex="fullName" key="fullName" />
          <Column title="Correo" dataIndex="email" key="email" />
          <Column
            title="Acciones"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <Tooltip title='Borrar Usuario'>
                  <Button type='primary' danger shape='circle' icon={<DeleteOutlined />} onClick={() => deleteUser(record._id)}/>
                </Tooltip>
                <Tooltip title='Editar Usuario'>
                        <Button shape='circle' icon={<EditOutlined />} onClick={() => editUser(record._id)} />
                </Tooltip>
              </Space>
            )}
          />
        </Table> */}

        <Table
            columns={columns}
            dataSource={users}
            scroll={{
              x: 1300,
            }}
          />
        
    </>
  )
}
