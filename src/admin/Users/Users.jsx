import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { UsersList } from "./UsersList";

const URL = 'http://rolling-food.herokuapp.com/api/user'


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

    function deleteUser(id) {
      console.log('delete user', id)
    }

    
    
  return (
    <>
        <h1>Users Components</h1>
        <h2>Cantidad de usuarios: {total}</h2>
        <h2>Cantidad de usuarios por página: {users.length}</h2>
        <UsersList users={users} deleteUser={deleteUser}/>
    </>
  )
}
