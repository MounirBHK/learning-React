import React, { useContext } from 'react'
import { AppContext } from '../App'
import ChangeProfile from '../components/ChangeProfile'

export default function Profile() {
  const { username } = useContext(AppContext)

  return (
    <div>
      <h1>Profile</h1>
      <h2>username : {username} </h2>
      <ChangeProfile />
    </div>
  )
}
