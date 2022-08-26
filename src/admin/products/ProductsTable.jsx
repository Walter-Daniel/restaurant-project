

import { Space, Table, Tag, Button, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ModalForm } from '../components/ModalForm';
const { Column, ColumnGroup } = Table;

export const ProductsTable = ({ products }) => {

  const columns = [
    {
      title: 'Nombre',
      width: 150,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
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
      {/* <ModalForm user={user}  closeModal={closeModal} isModalVisible={isModalVisible}/> */}

        <Table
            columns={columns}
            dataSource={products}
            scroll={{
              x: 1300,
            }}
          />
        
    </>
  )
}
