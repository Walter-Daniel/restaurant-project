

import { Space, Table, Tag, Button, Tooltip, List, Avatar } from 'antd';
import { DeleteOutlined, EditOutlined, StarOutlined } from '@ant-design/icons';
import { ModalForm } from '../components/ModalForm';
const { Column, ColumnGroup } = Table;

export const ProductsTable = ({ products, product,  editProduct, closeModal, isModalVisible, deleteProduct}) => {

  return (
    <>
      <ModalForm product={product}  closeModal={closeModal} isModalVisible={isModalVisible}/>
      <button className='primary'> Agregar Producto</button>

      <div className="container-fluid">
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
              pageSize: 10,
            }}
            dataSource={products}
            renderItem={item => (
              <List.Item
                key={item.title}
                extra={
                  <Space >
                    <Tooltip title='Borrar Usuario'>
                      <Button type='primary' danger shape='circle' icon={<DeleteOutlined />} onClick={() => deleteProduct(item._id)}/>
                    </Tooltip>
                    <Tooltip title='Editar Usuario'>
                            <Button shape='circle' icon={<EditOutlined />} onClick={() => editProduct(item._id)} />
                    </Tooltip>
                </Space>
                }
                price={item.price}
                
              >
                <List.Item.Meta
                  avatar={<Avatar src='../../../assets/images/sider/admin-product.png' />}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category.name}
                  extra={item.category.name}
                />
                <p>Precio: ${item.price}</p>
                <p>Categoría: {item.category.name}</p>
              </List.Item>
            )}
          />
      </div>
        
    </>
  )
}
