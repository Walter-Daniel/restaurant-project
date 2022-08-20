import { useEffect } from "react";
import { useState } from "react";
import { notification } from 'antd';
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { UsersList } from "./UsersList";

const URL = 'http://rolling-food.herokuapp.com/api/user';

const openNotification = (message, description, type) => {
  notification[type]({
    message: message,
    description: description,
    placement: 'bottom'
  });
};


export const Users = () => {
    const auth= useAuth();
    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect(() => {
    
      getUsers();
    }, [])
    

    async function getUsers() {
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

        const deletedUser = await axios.delete(`${URL}/${id}` , {
                headers:  {
                  'Authorization': 'Bearer ' + auth.token
              }
        }) 
        const newUsers = users.filter( user => user._id !== id);
        setUsers(newUsers);
        openNotification('Usuario Eliminado', 'El usuario ha sido eliminado de manera exitosa', 'succes')
        
      } catch (error) {
        console.log('error para borrar usuario', error)
        openNotification('Error', 'Error al intentar borrar un usuario', 'error')
      }
    }
     
  return (
    <>
        <h1>Users Components</h1>
        <h2>Cantidad de usuarios: {total}</h2>
        <h2>Cantidad total de usuarios: {users.length}</h2>
        <UsersList users={users} deleteUser={deleteUser}/>
    </>
  )
}