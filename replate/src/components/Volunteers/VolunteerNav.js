import React from 'react'

import { NavLink } from 'react-router-dom'

const VolunteerNav = props => {

    return (
        <div>
            <NavLink exact to='/'>
                Dashboard
            </NavLink>
            <NavLink exact to='/available-pickups'>
                Available Pickups
            </NavLink>
        </div>
    )

}

export default VolunteerNav