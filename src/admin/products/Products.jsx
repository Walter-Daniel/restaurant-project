import { useEffect } from "react";
import { useState } from "react";
import { notification } from 'antd';
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { UsersList } from "./UsersList";



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
    const [total, setTotal] = useState(0)

    useEffect(() => {
    
      getProducts();
    }, [])
    

    async function getProducts() {
        const response = await axios(URL, {
                headers: {
                    'Authorization': 'Bearer ' + auth.token
                }
        })
        setTotal(response.data.total)
        const usersDB = response.data.users;
        setUsers(usersDB)
    };

    async function deleteUser(id) {
      try {
        console.log('delete user', id);
        await axios.delete(`${URL}/${id}`)
        const newUsers = users.filter( user => user._id !== id);
        setUsers(newUsers);
        openNotification('Usuario Borrado', 'El usuario ha sido eliminado de la base de datos', 'error')
        
      } catch (error) {
        console.log('error para borrar usuario', error)
        openNotification('Error', 'Error al intentar borrar un usuario', 'error')
      }
    }
  return (
    <>
        <h1>Users Components</h1>
        <h2>Cantidad de usuarios: {total}</h2>
        <h2>Cantidad total de productos: {auth.products.length}</h2>
        <UsersList users={users} deleteUser={deleteUser}/>
    </>
  )
}
