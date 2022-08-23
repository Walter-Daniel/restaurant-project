import { Button, Form, Input, Modal, Radio } from "antd"
import { FormItemsRegister } from "../../auth";
import { useAuth } from "../../context/AuthContext";

const layout = {
  labelCol:{
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

export const ModalForm = ({ openCloseModal, createUser }) => {

    const auth = useAuth();
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
        auth.register(values)
        form.resetFields();
    }
  

  return (
    <Modal visible={ createUser }
           title= "Crear un nuevo usuario"
           destroyOnClose={ true }
           onCancel={ openCloseModal }
           centered
           footer={[
            <Button onClick={openCloseModal}> Cerrar modal</Button>,
           ]}
    >
      <Form {...layout}
            form={form}
            onFinish={onFinish}
            layout="vertical"
      >
       <FormItemsRegister />
       <Form.Item
        name="active"
        label="Estado"
        rules={[{ required: true, message: 'Por favor, selecciona un estado!' }]}
      >
        <Radio.Group>
          <Radio.Button value="true">Activo</Radio.Button>
          <Radio.Button value="false">Inactivo</Radio.Button>
        </Radio.Group>
      </Form.Item>
       <Form.Item >
          <Button type="default" htmlType="button" onClick={openCloseModal}>
              Cerrar
          </Button>                
          <Button type="primary" htmlType="submit">
              Enviar
          </Button>
                      
        </Form.Item>
      </Form>
    </Modal>
  )
}
