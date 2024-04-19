import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://deployement-demo.onrender.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">User Details</h1>
            <table className="table">
                <thead className="thead-dark text-center ">
                    <tr>
                        <th className='bg-primary'>ID</th>
                        <th className='bg-primary'>Username</th>
                        <th className='bg-primary'>Email</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
