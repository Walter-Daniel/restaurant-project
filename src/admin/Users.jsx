import { useEffect } from "react";
import { useState } from "react";
import { UserTable } from "./UserTable";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

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
    }

    
    
  return (
    <>
        <h1>Users Components</h1>
        <h2>Cantidad de usuarios: {total}</h2>
        <h2>Cantidad de usuarios por página: {users.length}</h2>
        <UserTable users={users} />
    </>
  )
}
