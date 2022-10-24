import { useEffect} from "react";
import { createRef } from 'react';
import { Button, Form, Input, InputNumber, Modal, Radio } from "antd";

const { TextArea } = Input;

const layout = {
  labelCol:{
    span: 8
  },
  wrapperCol: {
    span: 24
  }
};

export const ModalComponent = ({ isModalVisible, closeModal, onFinish, product, title, closeModalCreate, isModalCreateVisible }) => {

  const [form] = Form.useForm();
  const formReference = createRef();

  

  useEffect(() => {
    isModalVisible ? form.setFieldsValue( product ) : form.resetFields();
  }, [product])

  return (
    <Modal visible={ isModalVisible || isModalCreateVisible }
           title={title}
           destroyOnClose={ true }
           onCancel={ closeModal || closeModalCreate }
           footer={[
         
              <Form.Item >
                <Button type="default" htmlType="button" onClick={closeModal || closeModalCreate }>
                    Cerrar
                </Button>                
                <Button type="primary" form="myFormProduct" key="submit" onClick={ form.resetFields() } htmlType="submit">
                    Enviar
                </Button>                
              </Form.Item>
           ]}
    >
      <Form {...layout}
            form={form}
            onFinish={onFinish}
            ref={formReference}
            layout="vertical"
            id="myFormProduct"
      >
       <Form.Item
        name="name"
        label="Nombre:"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese el nombre del producto!',
            whitespace: true,
          },
          {
            min: 2,
            max: 50, 
            message: 'Debe ingresar entre ${min} y ${max} carácteres',
          }
        ]}
      >
        <Input type='text'/>
      </Form.Item>
      <Form.Item
        name="detail"
        label="Descripción:"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese la descripción del producto!',
            whitespace: true,
          },
          {
            min: 30, 
            message: 'Debe ingresar un mínimo de ${min} caracteres',
          }
        ]}
        
      >
        <TextArea
          showCount
          maxLength={200}
          style={{
            height: 120,
          }}
        />
      </Form.Item>
      <Form.Item
        name="category"
        label="Categoría"
        rules={[{ required: true, message: 'Por favor, selecciona un estado!' }]}
      >
        <Radio.Group >
            <Radio value='635170dcc5a32a62d410b13e'>Empanadas</Radio>
            <Radio value='63516f6fc5a32a62d410b13c'>Pizzas</Radio>
            <Radio value='63517341c3c4679da104dd3f'>Sandwiches</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="price"
        label="Precio:"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese un valor entre 1 y 9999!',
          },
        ]}
      >
        <InputNumber min={1} max={9999}/>
      </Form.Item>
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
      </Form>
    </Modal>
  )
}
