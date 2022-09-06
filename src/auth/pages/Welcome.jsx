import { Layout } from 'antd';
import { Login } from './Login';


const { Content } = Layout;

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
