import {
    Checkbox,
    Col,
    Form, 
    Row,
    Button
  } from 'antd';
  import { createRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FormItemsRegister } from '../components';
  
  export const Register = () => {
    const auth = useAuth();
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
        auth.register(values)
        form.resetFields();
    }
 
    const formReference = createRef();
    const deleteFormText = () => {
      formReference.current.resetFields()
    }
  
    return (
      
    <div className="hero-register">
      <div className="container-fluid">
        <Row justify='center' className='login-container'>
              <Col xs={20} md={16} lg={10}>
                <div className="last-container">
                  <h2>Regístrate</h2>
                  <Form
                    form={form}
                    name="register"
                    layout="vertical"
                    labelCol={{
                      span: 16,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    onFinish={onFinish}
                    ref={formReference}
                    scrollToFirstError
                  >
                    <FormItemsRegister />
    
    
                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                      rules={[
                        {
                          validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Tienes que aceptar las bases y condiciones')),
                        },
                      ]}
                    >
                      <Checkbox>
                        Acepto las <a href="">bases y concidiones</a>
                      </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="default" htmlType="button" onClick={deleteFormText}>
                            Borrar
                        </Button>                
                        <Button type="primary" className='btn-second' htmlType="submit">
                            Enviar
                        </Button>
                        
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            
          </Row>

      </div>
        
    </div>
     
    );
  };
  