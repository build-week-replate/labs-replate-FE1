import React from 'react'

import { NavLink } from 'react-router-dom'
import Requests from '../Requests'

const VolunteerNav = () => {

    return (
        <div>
            <NavLink path='/requests' component={Requests}>
            View Available Requests
            </NavLink>
        </div>
    )

}

export default VolunteerNav