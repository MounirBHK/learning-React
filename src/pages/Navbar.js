import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/profile'> Profile </Link>
            <Link to='/contact'> Contact </Link>
            <Link to='/show-text'> ShowText </Link>
            <Link to='/cat-fact'> CatFact </Link>
            <Link to='/predict-age'> PredictAge </Link>
            <Link to='/todo-list'> TodoList </Link>
            <Link to='/excuse-gen'> ExcuseGen </Link>
        </div>

    )
}
