import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Title } from "../components";
import { notification } from 'antd';
import axios from "axios";
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
    const [userToEdit, setUserToEdit] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
      setIsModalVisible(true);
    }
    const closeModal = () => {
      setIsModalVisible(false);
    }

    useEffect(() => { 
      getUsers();
    }, [])
    

    async function getUsers() {
        const response = await axios(URL, {
                headers: {
                    'Authorization': 'Bearer ' + auth.token
                }
        })
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
        openNotification('Usuario Eliminado', 'El usuario ha sido eliminado de manera exitosa', 'success')
        
      } catch (error) {
        openNotification('Error', 'Error al intentar borrar un usuario', 'error')
      }
    }

    async function editUser(id) {    
      try {
        const EditUser = users.find( user => user._id === id);
        setUserToEdit(EditUser);
        openModal();
        
      } catch (error) {
      console.log('error al editar usuario', error)
      }     
    }
    const title = 'Usuarios'
  console.log(userToEdit)
  return (
    <>
        <Title title={title} />
        <hr />
        <h2>Cantidad total de usuarios: {users.length}</h2>
        <UsersList users={users} deleteUser={deleteUser} editUser={editUser} user ={userToEdit} closeModal={closeModal} isModalVisible={isModalVisible} setUsers={setUsers} getUsers={getUsers} />
    </>
  )
}
