import { Space, Button, Tooltip, List, Avatar, Typography } from 'antd';
import { DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { ModalProduct } from './ModalProduct';
import { CreateProduct } from './CRUD/CreateProduct';
import img from '../../../assets/images/sider/admin-product.png'
const { Text } = Typography;

export const ProductsTable = ({ products, product,  editProduct, closeModal, isModalVisible, deleteProduct, createProduct, isModalCreateVisible, closeModalCreate}) => {

  return (
    <>
      <ModalProduct product={product}  closeModal={closeModal} isModalVisible={isModalVisible}/>
      <CreateProduct product={product}  closeModalCreate={closeModalCreate} isModalCreateVisible={isModalCreateVisible}/>
      <div className="div-boton">
        <Button  className='btn-second' onClick={() => createProduct() }> Agregar Producto</Button>
      </div>

      <div className="layout-home">
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
                  avatar={<Avatar src={img} />}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                />
                <div className="order-element">
                  <Text>Categoría: {item.category.name}</Text>
                  <Text strong>Precio: ${item.price}</Text> 
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
