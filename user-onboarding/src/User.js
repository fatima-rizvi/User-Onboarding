import React from 'react'

export default function User ({details}) {
    if (!details) {
        return (
            <h3>Working on fetching the user</h3>
        )
    }

    return (
        <div className = 'user-box'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>
    )
}
