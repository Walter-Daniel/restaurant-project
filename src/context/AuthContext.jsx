import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {notification, Row } from 'antd';

const AuthContext = createContext();
// const URL = 'http://localhost:3400/api/auth/login';
// const URLPRODUCT = 'http://localhost:3400/api/product';

const URL = 'http://rolling-food.herokuapp.com/api/auth/login';
const URLPRODUCT = 'http://rolling-food.herokuapp.com/api/product';
const URLREGISTER = 'http://rolling-food.herokuapp.com/api/auth/register';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('product')));
    const [orden, setOrden] = useState(JSON.parse(localStorage.getItem('productInCart')));
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
            const role = response.data.user.role
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
            console.log(newProduct.data);
            localStorage.setItem('product', JSON.stringify(newProduct));
            setProduct( newProduct )
            openNotification('Login correcto', 'Inicio de sesión exitoso', 'success')

            navigation('/')
            
        } catch (error) {
            openNotification('Login incorrecto', 'Asegurese de colocar de manera correcta sus datos', 'error')
        }
    }

    const register = async(formData) => {
        try {
            const response = await axios.post( URLREGISTER , formData);
            openNotification('Registro Correcto', 'Su información ha sido guardada en nuestra base datos', 'success')
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        console.log('Funcion de logout en contexto')
        setUser(null)
        setToken(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    
    const auth = {
        user,
        token,
        product,
        login,
        logout,
        orden,
        setOrden,
        role,
        register
    }

    return <AuthContext.Provider value={ auth }> { children } </AuthContext.Provider>
}

export function useAuth() {
    return useContext( AuthContext )
}