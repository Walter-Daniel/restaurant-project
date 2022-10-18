import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEnvVariables } from '../helpers/getEnvVariables';
import axios from 'axios';
import {notification } from 'antd';

const AuthContext = createContext();
const { VITE_API_URL } = getEnvVariables();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('product')));
    const [role, setRole] = useState([])
    const navigation = useNavigate();

    const openNotification = (message, description, type) => {
        notification[type]({
          message: message,
          description: description,
          placement: 'top'
        });
      };

    const login = async( formData ) => {
        try {
            const response = await axios.post( `${VITE_API_URL}/auth/login` , formData);
            const newUser = response.data.user;
            const newToken = response.data.token;
            const role = response.data.user.role;
            setRole(role)
            setUser( newUser )
            setToken ( newToken )
            localStorage.setItem('user', JSON.stringify(newUser));
            localStorage.setItem('token', newToken);


            const newProduct = await axios( `${VITE_API_URL}/products`,  {
                headers: {
                         Authorization: 'Bearer ' + newToken 
                        }
            })
            setProduct( newProduct )
            openNotification('Login correcto', 'Inicio de sesión exitoso', 'success')

           role === 'USER_ROLE' ? navigation('/', { replace: true }) : navigation('/users' , { replace: true })
            
        } catch (error) {  
            openNotification('Login incorrecto', 'Asegurese de colocar de manera correcta sus datos', 'error')
        }
    }

    const register = async(formData) => {
        try {
            const response = await axios.post( `${VITE_API_URL}/auth/register` , formData);
            openNotification('Registro Correcto', 'Su información ha sido guardada en nuestra base datos', 'success')
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigation('/login');
    }

    
    const auth = {
        user,
        token,
        product,
        login,
        logout,
        role,
        register
    }

    return <AuthContext.Provider value={ auth }> { children } </AuthContext.Provider>
}

export function useAuth() {
    return useContext( AuthContext )
}