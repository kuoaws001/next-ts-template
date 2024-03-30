// if this component is used in this page, put the component in page folder

import React from 'react'

interface User {
    id: number;
    name: string;
}

const UserList = async () => {

    const response = await fetch('http://localhost:3000/api/users')
    const users: User[] = await response.json()
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList
