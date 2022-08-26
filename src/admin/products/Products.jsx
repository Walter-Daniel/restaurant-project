import { useEffect } from "react";
import { useState } from "react";
import { notification } from 'antd';
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { ProductsTable } from "./ProductsTable";


const URL = 'http://rolling-food.herokuapp.com/api/product';

const openNotification = (message, description, type) => {
  notification[type]({
    message: message,
    description: description,
    placement: 'bottom'
  });
};

export const Products = () => {

    const auth= useAuth();
    const [products, setProducts] = useState([]);
    const [userToEdit, setUserToEdit] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
      setIsModalVisible(true);
    }
    const closeModal = () => {
      setIsModalVisible(false);
    }

    useEffect(() => {
      getProducts();
    }, [])
    

    async function getProducts() {
        const productsDB = await axios(URL, {
                headers: {
                    'Authorization': 'Bearer ' + auth.token
                }
        })
        const productList= productsDB.data.products;
        setProducts(productList)
        console.log(productList)

    };

    async function deleteUser(id) {
      try {
        await axios.delete(`${URL}/${id}`)
        const newUsers = users.filter( user => user._id !== id);
        setUsers(newUsers);
        openNotification('Usuario Borrado', 'El usuario ha sido eliminado de la base de datos', 'error')
        
      } catch (error) {
        openNotification('Error', 'Error al intentar borrar un usuario', 'error')
      }
    }

    async function editUser(id) {
      try {
        console.log('edit user', id);
        await axios.put(`${URL}/${id}`)
        const newUsers = users.filter( user => user._id !== id);
        setUsers(newUsers);
        openNotification('Usuario Borrado', 'El usuario ha sido eliminado de la base de datos', 'error')
        
      } catch (error) {
        openNotification('Error', 'Error al intentar borrar un usuario', 'error')
      }
    }
  return (
    <>
        <h1>Profuctos</h1>
        <h1>Profuctos</h1>
      
        <h1>Profuctos</h1>
        
        /* <ProductsTable products={products} /> */
    </>
  )
}
