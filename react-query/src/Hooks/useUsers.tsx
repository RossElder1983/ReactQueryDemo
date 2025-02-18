import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUsers = () => {
    const [users, setUsers] = useState<Array<any>>([]);
    const [error, setError] = useState<any>();
    
    useEffect(() => {
        if (users.length == 0)
            fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            var { data : users } = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(users);
            setUsers(users);    
        } catch (error : any) {
            setError(error);
        }        
    }

    const addUser = () => {       
        console.log('adding user')
    }

    return {users, error, addUser, fetchUsers}
}