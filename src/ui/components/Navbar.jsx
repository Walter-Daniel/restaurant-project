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
      {/* <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <i className="fas fa-bolt"></i>
            <a href="http://google.com">Bon Appétit</a>
          </div>
          <div className="mobileHidden">
            <NavbarSecondary />
            <Anchor targetOffset="65">
              <Link href="/" title="Inicio" />
              <Link href="/minutas" title="Minutas" />
              <Link href="/search" title="Buscar" />
            </Anchor>
              
          </div>
          <div className="mobileVisible">
            <Button type="primary ant-btn-primary-pag" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              title= "Menú"
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              <Anchor targetOffset="65">
                  <Link href="/" title="Inicio" />
                  <Link href="/minutas" title="Minutas" />

                  <Link href="/search" title="Buscar" />
              </Anchor>
                  <NavbarSecondary />
            </Drawer>
          </div>
        </div>
      </div> */}
    </>
  );
}