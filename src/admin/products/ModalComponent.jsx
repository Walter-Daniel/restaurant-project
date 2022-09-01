import { useEffect, useState } from "react";
import { FormItemsRegister } from "../../auth";
import { useAuth } from "../../context/AuthContext";
import { Button, Form, Input, InputNumber, Modal, Radio } from "antd"
import axios from "axios";
const { confirm } = Modal;
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
                <Button type="primary" form="myFormProduct" key="submit" htmlType="submit">
                    Enviar
                </Button>                
              </Form.Item>
           ]}
    >
      <Form {...layout}
            form={form}
            onFinish={onFinish}
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
        name="description"
        label="Descripción:"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese la descripción del producto!',
            whitespace: true,
          },
          {
            min: 50, 
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
            <Radio value='62df10f595dda728ebec74f5'>Empanadas</Radio>
            <Radio value='62df10e095dda728ebec74f3'>Pizzas</Radio>
            <Radio value='62df10d495dda728ebec74ef'>Sandwich</Radio>
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
          // {
          //   min: 1,
          //   max: 9999, 
          //   message: 'El valor no debe ser menor que ${min} y superior a ${max}',
          // },
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
