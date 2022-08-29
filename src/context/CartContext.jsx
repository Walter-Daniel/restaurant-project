import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const CartContext = createContext();

export const CartProvider= ({ children }) => {

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
      console.log(cartItems)
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

   const cart = { cartItems, addItemToCart, deleteItemToCart }

    return (
        <CartContext.Provider value={ cart }> { children } </CartContext.Provider>
    )
}

export function useCart() {
    return useContext( CartContext )
}