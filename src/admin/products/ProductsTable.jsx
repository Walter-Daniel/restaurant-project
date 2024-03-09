import { Space, Button, Tooltip, Typography, Tag, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ModalProduct } from './ModalProduct';
import { CreateProduct } from './CRUD/CreateProduct';
const { Text } = Typography;

export const ProductsTable = ({ products, product,  editProduct, closeModal, isModalVisible, deleteProduct, createProduct, isModalCreateVisible, closeModalCreate}) => {

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Descripcion',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Categoría',
      dataIndex: 'category',
      key: 'category',
      render: (category) => <Text>{ category.name }</Text>
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <Text>$ {price}</Text>
    },
    {
      title: 'Promoción',
      dataIndex: 'promo',
      key: 'promo',
      render: (promo) => <div>
        { promo === true 
          ? <Tag color="purple">Promocionado</Tag>  
          : '' }</div>
    },
    {
      title: 'Estado',
      dataIndex: 'active',
      key: 'active',
      render: (active) => <div>
          {active === true 
            ? <Text type='success' strong>Activo</Text>
            : <Text strong type='danger'>Inactivo</Text>
          }</div>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, item) => (
        
        <Space size="middle">
          <Tooltip title='Borrar Producto'>
            <Button type='primary' danger shape='circle' icon={<DeleteOutlined />} onClick={() => deleteProduct(item._id)}/>
          </Tooltip>
          <Tooltip title='Editar Producto'>
                  <Button shape='circle' icon={<EditOutlined />} onClick={() => editProduct(item._id)} />
          </Tooltip>
      </Space>
      ),
    },
  ];

  return (
    <>
      <ModalProduct product={product}  closeModal={closeModal} isModalVisible={isModalVisible} key='modal'/>
      <CreateProduct product={product}  closeModalCreate={closeModalCreate} isModalCreateVisible={isModalCreateVisible}/>
      <div className="div-boton">
        <Button  className='btn-second' onClick={() => createProduct() }> Agregar Producto</Button>
      </div>
      <Table columns={columns} dataSource={products} />
    </>
  )
}
