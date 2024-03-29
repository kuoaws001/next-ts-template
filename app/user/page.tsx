import React from 'react'

interface User {
    id: number;
    name: string;
}

const page = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
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