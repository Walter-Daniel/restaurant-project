
import { Button, Checkbox, Form, Input, Col, notification, Row } from 'antd';
import { useAuth } from '../../context/AuthContext';


export const Login = () => {
    const auth = useAuth();


    const onFinish = async (formData) => {

        auth.login( formData )
        
      };
      
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      
      
  return (
    <div className="hero">
        <div className='login'>
            <Row justify='center' className='login-container'>
                <Col xs={24} lg={12}>
                    <Form
                        className='login-form'
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                    <Form.Item
                        label="Correo"
                        name="email"
                        rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Por favor ingrese su correo!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su contraseña!',
                        },
                        {
                            min: 6,
                            max: 12, 
                            message: 'Las contraseña tienen entre ${min} y ${max} caracteres',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" >
                            Ingresar
                        </Button>
                    </Form.Item>
                    </Form>

                </Col>
            </Row>
        </div>
    </div>
  )
}
