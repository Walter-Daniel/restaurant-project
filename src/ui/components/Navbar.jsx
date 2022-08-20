import { Anchor, Drawer, Button, Typography, List, Avatar} from 'antd';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from "react-router-dom";
import { LoginOutlined, LogoutOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Link } = Anchor;

export function Navbar({set}) {
  
  const auth = useAuth();

  return (
    <>
      
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <a href="/">Bon Appétit</a>
          </div>
          <div className='item-login-logout'>
          { auth.user ?
                    <>
                      <Text strong>Buenas tardes {auth.user.fullName} !</Text>
                      <div className="cart">
                        <a href='/shop'><ShoppingCartOutlined /></a>
                        <span>0</span>
                      </div>
                    </>
                          : ''
        }
          </div>                
        </div>
      </div>

    </>
  );
}