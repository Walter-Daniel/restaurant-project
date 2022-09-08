import { LoginOutlined, LogoutOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import images from "./images";


export const ListSidebar = () => {
    const auth = useAuth();
    const currentUser = auth.user;

    const data = [
        {
          title: 'Empanadas',
          path: 'empanadas',
          protected: true,
          img: images.empanada
        },
        {
          title: 'Pizzas',
          path: 'pizza',
          protected: true,
          img: images.pizza
        },
        {
          title: 'Sandwiches',
          path: 'sandwiches',
          protected: true,
          img: images.sandwich
        },
      ];
    const linkAdmin = [
        {
          title: 'Usuarios',
          path: 'users',
          protected: true,
          img: images.user
        },
        {
          title: 'Productos',
          path: 'products',
          protected: true,
          img: images.box
        },
        {
          title: 'Ordenes',
          path: 'orders',
          protected: true,
          img: images.shopping
        }
      ];
  return (
    <List
        itemLayout="horizontal"
        dataSource={
          !auth.user ? '' :
                          auth.user.role === 'ADMIN_ROLE' ? linkAdmin : data
        }
        renderItem={item => (
            item.protected && !currentUser ? '' : 

            <NavLink to={item.path ?? '/'}
                    className={({ isActive }) => isActive ? 'navLink-active' : ''}>
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
                          <NavLink to='login' onClick={() => auth.logout()}>
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
                          <NavLink to='login'
                                  className={({ isActive }) => isActive ? 'navLink-active' : ''}>
                            <List.Item>
                                <List.Item.Meta
                                  avatar={<Avatar icon={<LoginOutlined />} />}
                                  title='Login'                    
                                />
                            </List.Item>
                          </NavLink>
                          <NavLink to='register'
                                  className={({ isActive }) => isActive ? 'navLink-active' : ''}>
                            <List.Item>
                                <List.Item.Meta
                                  avatar={<Avatar icon={<PlusCircleOutlined />} />}
                                  title='Registrarse'    
                                />
                            </List.Item>
                          </NavLink>
                        </>
          }
        </List>
  )
}
