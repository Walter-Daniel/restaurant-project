import { useCart } from "../../../context/CartContext";
import { Space, Button, Tooltip, List, Avatar, Typography } from 'antd';
import {  MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons';
import img from '../../../../assets/images/sider/admin-product.png'
const { Text } = Typography;

export const CartContent = () => {

    const cart = useCart();

  return (

    <>
      <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 10,
          }}
          dataSource={cart.cartItems}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <Space >
                  <Tooltip title='Agregar'>
                          <Button shape='circle' icon={<PlusCircleOutlined />} onClick={() => cart.addItemToCart(item)} />
                  </Tooltip>
                  <Tooltip title='Sacar'>
                    <Button type='primary' danger shape='circle' icon={<MinusCircleOutlined />} onClick={() => cart.deleteItemToCart(item)}/>
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
              <div className="list-product">
                <Text>Cantidad: {item.amount}</Text>
                <Text strong>Total: ${item.amount * item.price}</Text> 
                <div>
                </div>
              </div>
            </List.Item>
          )}
        />
    </>
  )
}
