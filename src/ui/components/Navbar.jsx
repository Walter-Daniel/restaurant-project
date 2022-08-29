import { useAuth } from '../../context/AuthContext';
import { Link, NavLink } from "react-router-dom";
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { ItemCart } from './CartItems/ItemCart';
import { AuthCart } from './CartItems/AuthCart';




export function Navbar() {
  
  const auth = useAuth();



  return (
    <>
      
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <Link to="/">Bon Appétit</Link>
          </div>
          <div className='item-login-logout'>
          { auth.user ? <AuthCart /> : '' }
        
          </div>                
        </div>
      </div>

    </>
  );
}