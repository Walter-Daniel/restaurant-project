

import { Space, Table, Tag, Button, Tooltip, List, Avatar, Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ModalForm } from '../components/ModalForm';
const { Column, ColumnGroup } = Table;
const { Text } = Typography;

export const UsersList = ({ users, deleteUser, editUser, user, closeModal, isModalVisible, setUsers }) => {

  return (
    <>

      <ModalForm user={user}  closeModal={closeModal} isModalVisible={isModalVisible} setUsers={setUsers} users={users}/>
    
        <div className="layout-home">
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
              pageSize: 10,
            }}
            dataSource={users}
            renderItem={item => (
              <List.Item
                key={item.title}
                extra={
                  <Space >
                    <Tooltip title='Borrar Usuario'>
                      <Button type='primary' danger shape='circle' icon={<DeleteOutlined />} onClick={() => deleteUser(item._id)}/>
                    </Tooltip>
                    <Tooltip title='Editar Usuario'>
                            <Button shape='circle' icon={<EditOutlined />} onClick={() => editUser(item._id)} />
                    </Tooltip>
                </Space>
                }
                price={item.price}
                
              >
                <List.Item.Meta
                  avatar={<Avatar src='../../../assets/images/sider/user (2).png' />}
                  title={item._id}
                  description={item.fullName}
                />
                <div className="list-product">
                  <Text>Email: {item.email}</Text>
                    <div>
                      <Text strong>Estado</Text> : {item.active === true ? <Text type='success' strong>Activo</Text>: <Text strong type='danger'>Inactivo</Text>}
                    </div>
                </div>
              </List.Item>
            )}
          />
      </div>
    </>
  )
}
