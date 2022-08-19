import { List } from 'antd'
import { UserItem } from './UserItem'

import { Space, Table, Tag, Button, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;

export const UsersList = ({ users, deleteUser }) => {
  return (
    <>
    {/* <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={usr=> <UserItem user={usr} deleteUser={deleteUser} />}
  /> */}

<Table dataSource={users}>
  
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
                  <Button shape='circle' icon={<EditOutlined />} />
          </Tooltip>
        </Space>
      )}
    />
  </Table>
    </>
  )
}
