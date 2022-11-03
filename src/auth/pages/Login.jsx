import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import { createRef } from "react";
import { useAuth } from "../../context/AuthContext";
import {notification } from 'antd';

export const Login = () => {
  const auth = useAuth();

  const onFinish = async (formData) => {
    auth.login(formData);
  };
  const openNotification = (message, description, type) => {
    notification[type]({
      message: message,
      description: description,
      placement: 'top'
    });
  };
  const onFinishFailed = (errorInfo) => {
    openNotification('Login incorrecto', 'Asegurese de colocar de manera correcta sus datos', 'error')
  };

  const formReference = createRef();

  const deleteFormText = () => {
    formReference.current.resetFields();
  };

  return (
    <div className="hero">
      <div className="container-fluid">
        <Row justify="center" className="login-container">
          <Col xs={20} md={16} lg={10}>
            <div className="last-container">
              <h2>Iniciar sesión</h2>
              <Form
                className="form-container"
                name="login"
                labelCol={{
                  span: 12,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                layout="vertical"
                ref={formReference}
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
                      type: "email",
                      message: "Por favor ingrese su correo!",
                    },
                    {
                      min: 8,
                      max: 30,
                      message:
                        "El email debe tener entre ${min} y ${max} caracteres",
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
                      message: "Por favor ingrese su contraseña!",
                    },
                    {
                      min: 6,
                      max: 12,
                      message:
                        "La contraseña debe tener entre ${min} y ${max} caracteres",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 0,
                    span: 0,
                  }}
                >
                  <Button
                    type="default"
                    htmlType="button"
                    onClick={deleteFormText}
                  >
                    Borrar
                  </Button>
                  <Button
                    type="primary"
                    className="btn-second"
                    htmlType="submit"
                  >
                    Ingresar
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
