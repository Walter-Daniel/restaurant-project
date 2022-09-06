import {
    Checkbox,
    Col,
    Form, 
    Row,
    Select,
    Button
  } from 'antd';
  import { createRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FormItemsRegister } from '../components';
  
  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 18,
      },
      sm: {
        span: 8,
      },
      md: {
        span: 8,
      },
      lg: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 18,
      },
      sm: {
        span: 16,
      },
      md: {
        span: 16,
      },
      lg: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 4
        ,
        offset: 4,
      },
      sm: {
        span: 16,
        offset: 6,
      },
      md: {
        span: 16,
        offset: 6,
      },
      lg: {
        span: 16,
        offset: 6,
      },
    },
  };
  
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
        <Row justify='center'>
              <Col xs={24} lg={12}>
                <div className="container-form">
                  <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    layout="vertical"
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
                      {...tailFormItemLayout}
                    >
                      <Checkbox>
                        Acepto las <a href="">bases y concidiones</a>
                      </Checkbox>
                    </Form.Item>
                      <p>(*) Campos obligatorios</p>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="default" htmlType="button" onClick={deleteFormText}>
                            Borrar
                        </Button>                
                        <Button type="primary" htmlType="submit">
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
  