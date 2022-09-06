import { Space, Tag, Button, Tooltip, List, Avatar, Typography } from 'antd';
import {  EditOutlined } from '@ant-design/icons';
const { Text } = Typography;


export const OrderList = ({orders, deleteOrder, editOrder}) => {
  return (
    <>
        <div className="layout-home">
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    pageSize: 10,
                }}
                dataSource={orders}
                renderItem={item => (
                    <List.Item
                    key={item._id}
                    extra={
                        <Space >
                        <Tooltip title='Editar estado del pedido'>
                                <Button shape='circle' icon={<EditOutlined />} onClick={() => editOrder(item._id)} />
                        </Tooltip>
                    </Space>
                    }
                    price={item.price}                   
                    >
                    <List.Item.Meta
                        avatar={<Avatar src='../../../assets/images/sider/user (2).png' />}
                        title={item._id}
                    />
                        <div className="order-element">
                            <div className='list-product'>
                            <h4>Pedido:</h4>
                                {item.products.map( product => (  
                                    <ul key={product.productId._id}>
                                        <li ><Text>{product.productId.name}</Text><Space /> <Tag color='orange'>cantidad: {product.quantity}</Tag></li>
                                    </ul>                        
                                 )  )}
                            </div>
                            <div>
                                <h4>Usuario:</h4>
                                <ul>
                                    <li><Text>{item.user.fullName}</Text></li>
                                </ul>
                                <h4>Total:</h4>
                                <ul>
                                    <li><Tag color="blue">${item.total}</Tag></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Estado:</h4>
                                {item.status === 'PENDING' ? <Tag color="red">Pendiente</Tag> : <Tag color="green">Atendida</Tag>  }

                            </div>
                        </div>   
                    </List.Item>
                )}
            />

        </div>   
    </>
  )
}
