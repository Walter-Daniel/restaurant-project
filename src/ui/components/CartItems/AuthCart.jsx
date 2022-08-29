import { Typography } from 'antd';
import { useAuth } from '../../../context/AuthContext';
import { Time } from '../Time';
import { ItemCart } from './ItemCart';

const { Text } = Typography;

export const AuthCart = () => {
    const auth = useAuth();
          
  return (
    <>
        <Text strong><Time /> {auth.user.fullName} !</Text>
        { auth.user.role === 'USER_ROLE' ? <ItemCart /> : '' } 
    
    </>
  )
}
