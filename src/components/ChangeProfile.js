import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

export default function ChangeProfile() {
    const { setUsername } = useContext(AppContext)

    const [newUsername, setNewUsername] = useState('')

    return (
        <div>
            <input
                type="text"
                placeholder='UserName...'
                onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={() => setUsername(newUsername)}>Change Username</button>
        </div>
    )
}
