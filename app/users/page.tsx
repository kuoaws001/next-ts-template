import React from 'react'

interface User {
    id: number;
    name: string;
}

const page = async () => {

    const response = await fetch('http://localhost:3000/api/users')
    const users: User[] = await response.json()

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default page