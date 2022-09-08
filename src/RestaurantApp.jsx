import { Layout } from 'antd';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductsRoutes } from './products';
import { FooterComponent, Navbar, Sidebar } from "./ui";


const { Header, Content, Footer, Sider } = Layout;


export const RestaurantApp = () => {

  return (
    <AuthProvider>
      <CartProvider>
        <Layout className='mainLayout'> 
          <Header>
            <Navbar />  
          </Header>
          <Layout>
          <div className="mobileHidden">
            <Sider >
              <Sidebar />
            </Sider>
          </div> 
           <Content> 
            <ProductsRoutes />
           </Content>   
          </Layout>
          <Footer>
            <FooterComponent />
          </Footer> 
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}
