import React from 'react'
import { NavLink }from 'react-router-dom'

const HomeNavigation = props => {
    return (
        <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
    )
}

export default HomeNavigation