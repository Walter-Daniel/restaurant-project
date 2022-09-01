import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';
import { useAuth } from "./AuthContext";
import { Modal, notification } from 'antd';
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

const CartContext = createContext();

const URL = 'http://rolling-food.herokuapp.com/api/order';

const openNotification = (message, description, type) => {
    notification[type]({
      message: message,
      description: description,
      placement: 'bottom'
    });
  };

export const CartProvider= ({ children }) => {

    const auth = useAuth();

    const [cartItems, setCartItems] = useState(() => {
        try {
            const productInLocalStorage = localStorage.getItem('cartProducts');
            return productInLocalStorage ? JSON.parse(productInLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
      localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart = (product) => {
        const inCart = cartItems.find( productInCart => productInCart._id === product._id )

        if(inCart){
            setCartItems(cartItems.map((productInCart) => {
                if(productInCart._id === product._id){
                    return { ...inCart, amount: inCart.amount + 1 };
                }else return productInCart;
            }))
        }else {
            setCartItems([ ...cartItems, { ...product, amount: 1 } ])
        }
    };
    
    const deleteItemToCart = (product) => {
        const inCart = cartItems.find( productInCart => productInCart._id === product._id );

        if( inCart.amount === 1 ) {
            setCartItems(cartItems.filter( productInCart => productInCart._id !== product._id ));
        }else {
            setCartItems( 
                cartItems.map( productInCart => {
                if( productInCart._id === product._id ) {
                    return { ...inCart, amount: inCart.amount - 1 };
                }else return productInCart;
                })
            )
        }
    };

    const purchaseOrder = (totalItems) => {
        const amount= totalItems;
        let products = [];
            cartItems.forEach( product => products.push({
            productId: product._id,
            quantity: product.amount
        }))
        const order = {
            products,
            user: auth.user._id,
            amount
        }; 
        try {            
            confirm({
                title: 'Confirmación de compra',
                icon: <ExclamationCircleOutlined />,
                content: 'Está seguro de que quiere realizar la compra?',
            
                async onOk() {
                        const createOrder = await axios.post(`${URL}`, order, {
                            headers:  {
                            'Authorization': 'Bearer ' + auth.token
                                    }
                        });
                        openNotification('Compra realizada', 'La compra se ha realizado de manera exitosa', 'success')
                        setCartItems([]);
                        },
                    onCancel() {
                        openNotification('Cancelado', 'Se ha cancelado su pedido', 'error');
                      }
                
              });
        } catch (error) {
            console.log(error)
        }
    }

   const cart = { cartItems, addItemToCart, deleteItemToCart, purchaseOrder }

    return (
        <CartContext.Provider value={ cart }> { children } </CartContext.Provider>
    )

}

export function useCart() {
    return useContext( CartContext )
}