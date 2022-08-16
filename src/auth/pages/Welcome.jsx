import { Layout } from 'antd';
import { Login } from './Login';
import { Hero } from './Hero';

const { Header, Content, Footer } = Layout;


export const Welcome = () => {
  return (
    <>
    <Layout className='mainLayout'>
      <Content>
        {/* <Hero /> */}
        <Login />
      </Content>
    </Layout>
    </>
  )
}
