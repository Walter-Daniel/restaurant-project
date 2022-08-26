import { LoginOutlined, LogoutOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Avatar, List } from 'antd';
import { NavLink } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

export const Sidebar = () => {

    const auth = useAuth();
    const currentUser = auth.user;

    const data = [
        {
          title: 'Empanadas',
          path: 'empanadas',
          protected: true,
          img: '../../../assets/images/sider/empanada.png'
        },
        {
          title: 'Pizzas',
          path: '/pizza',
          protected: true,
          img: '../../../assets/images/sider/pizza.png'
        },
        {
          title: 'Sandwiches',
          path: '/sandwiches',
          protected: true,
          img: '../../../assets/images/sider/sandwich (1).png'
        },
      ];
    const linkAdmin = [
        {
          title: 'Usuarios',
          path: 'users',
          protected: true,
          img: '../../../assets/images/sider/user.png'
        },
        {
          title: 'Productos',
          path: '/products',
          protected: true,
          img: '../../../assets/images/sider/product.png'
        },
        {
          title: 'Ordenes',
          path: '/cart',
          protected: true,
          img: '../../../assets/images/sider/food-tray.png'
        }
      ];
     
      
  return (
    <>
      <List
      itemLayout="horizontal"
      dataSource={
        // auth.user.role === 'ADMIN_ROLE' ? linkAdmin : data ||  !auth.user ? '' : ''
        !auth.user ? '' :
                        auth.user.role === 'ADMIN_ROLE' ? linkAdmin : data
      }
      renderItem={item => (
          item.protected && !currentUser ? '' : 

          <NavLink to={item.path ?? '/'}
                  className={({ isActive }) => isActive ? 'navLink-active' : undefined}>
              <List.Item>
                  <List.Item.Meta
                  avatar={<img src={item.img} alt={item.title} />}
                  title={item.title}
                  />
              </List.Item>
        </NavLink>
      )}>

        { auth.user ?
                    <>
                      <NavLink to='/login' onClick={() => auth.logout()}>
                          <List.Item>
                              <List.Item.Meta
                              avatar={<Avatar icon={<LogoutOutlined />} />}
                              title='Logout'
                              
                              />
                          </List.Item>
                      </NavLink>
                    </>
                          : 
                          <>
                          <NavLink to='/Login'
                                    className={({ isActive }) => isActive ? 'navLink-active' : undefined}>
                              <List.Item>
                                  <List.Item.Meta
                                  avatar={<Avatar icon={<LoginOutlined />} />}
                                  title='Login'
                                  
                                  />
                              </List.Item>

                            </NavLink>
                          <NavLink to='/register'
                                    className={({ isActive }) => isActive ? 'navLink-active' : undefined}>
                              <List.Item>
                                  <List.Item.Meta
                                  avatar={<Avatar icon={<PlusCircleOutlined />} />}
                                  title='Register'
                                  
                                  />
                              </List.Item>

                            </NavLink>
                          </>
        }
        
        

      </List>
   </>
  )
}

