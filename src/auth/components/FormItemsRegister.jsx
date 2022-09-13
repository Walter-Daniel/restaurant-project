
import { Form,Input} from 'antd';

export const FormItemsRegister = () => {
  return (
    <>  
      <Form.Item
        name="fullName"
        label="Nombre completo:"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su nombre completo!',
            whitespace: true,
          },
          {
            min: 9,
            max: 30, 
            message: 'Debe ingresar entre 6 y 30 carácteres',
          }
        ]}
      >
        <Input placeholder='María Ramos' type='text'/>
      </Form.Item>
      <Form.Item
        name="email"
        label="Correo electrónico:"
        rules={[
          {
            type: 'email',
            message: 'El correo no es valido!',
          },
          {
            required: true,
            message: 'Por favor introduce tu correo',
          },
          {
            min:8,
            max:30,
            message: 'El email debe tener entre ${min} y ${max} caracteres'
          }
        ]}
      >
        <Input placeholder='maria@email.com' />
      </Form.Item>
      <Form.Item
        name="password"
        label="Contraseña:"
        rules={[
          {
            required: true,
            min: 6,
            max: 12,
            message: 'Tu contraseña debe terner entre ${min} y ${max} caracteres!',
          },
        ]}
        hasFeedback
      >
        <Input.Password minLength={6} />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirmar contraseña:"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor confirma tu contraseña',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Las contraseñas no coinciden'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    </>
  )
}
