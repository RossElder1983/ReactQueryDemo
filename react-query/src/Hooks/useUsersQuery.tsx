import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query'

export const useUsersQuery = () => {    
    const [error, setError] = useState<any>();

    const fetchUsers = async () => {
        try {
            var { data : users } = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(users);   
            return users;         
        } catch (error : any) {
            setError(error);
        }        

        return [];
    }

    const {isFetching, data: users, isLoading} = useQuery({ queryKey: ['users'], queryFn: fetchUsers })

    const addUser = () => {       
        console.log('adding user')        
    }

    return {users, error, addUser, isFetching, isLoading}
}