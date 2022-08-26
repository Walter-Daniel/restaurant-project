import { Layout } from 'antd';
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ProductsRoutes } from './products';
import { FooterComponent, Navbar, Sidebar } from "./ui";


const { Header, Content, Footer, Sider } = Layout;


export const RestaurantApp = () => {

  return (
    <AuthProvider>
      <Layout className='mainLayout'>
          <Sider  breakpoint="lg"
                  collapsedWidth="0"
                  style={{
                    position: 'sticky',
                    }}
                  >
            <Sidebar />
          </Sider>
          <Layout>
          <Header>
            <Navbar />  
          </Header>
          <Content> 
            <ProductsRoutes />
          </Content>
          <Footer>
            <FooterComponent />
          </Footer>     
        </Layout>
      </Layout>
    </AuthProvider>
  )
}
