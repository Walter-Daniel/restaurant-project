import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
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
          img: '../../../assets/images/sider/sandwich.png'
        }
      ];
      
  return (
    <>
      <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
          item.protected && !currentUser ? '' : 

          <NavLink to={item.path ?? '/'}
                  className={({ isActive }) => isActive ? 'navLink-active' : undefined}>
              <List.Item>
                  <List.Item.Meta
                  avatar={<img src={item.img} alt="" />}
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
                          <NavLink to='/Login'>
                              <List.Item>
                                  <List.Item.Meta
                                  avatar={<Avatar icon={<LoginOutlined />} />}
                                  title='Login'
                                  
                                  />
                              </List.Item>

                            </NavLink>
                          <NavLink to='/register'>
                              <List.Item>
                                  <List.Item.Meta
                                  avatar={<Avatar icon={<LoginOutlined />} />}
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

