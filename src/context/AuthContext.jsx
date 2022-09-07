import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {notification } from 'antd';

const AuthContext = createContext();

const URL = 'http://rolling-food.herokuapp.com/api/auth/login';
const URLPRODUCT = 'http://rolling-food.herokuapp.com/api/product';
const URLREGISTER = 'http://rolling-food.herokuapp.com/api/auth/register';

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
            const response = await axios.post( URL , formData);
            const newUser = response.data.user;
            const newToken = response.data.token;
            const role = response.data.user.role;
            setRole(role)
            setUser( newUser )
            setToken ( newToken )
            localStorage.setItem('user', JSON.stringify(newUser));
            localStorage.setItem('token', newToken);


            const newProduct = await axios( URLPRODUCT,  {
                headers: {
                         Authorization: 'Bearer ' + newToken 
                        }
            })
            setProduct( newProduct )
            openNotification('Login correcto', 'Inicio de sesión exitoso', 'success')

           role === 'USER_ROLE' ? navigation('/') : navigation('/users')
            
        } catch (error) {  
            openNotification('Login incorrecto', 'Asegurese de colocar de manera correcta sus datos', 'error')
        }
    }

    const register = async(formData) => {
        try {
            const response = await axios.post( URLREGISTER , formData);
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
        navigation('/login')
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