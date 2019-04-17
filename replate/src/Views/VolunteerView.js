import React from 'react'

import VolunteerNav from '../components/Volunteers/VolunteerNav'
import VolunteerDashboard from '../components/Volunteers'


const VolunteerView = props => {
    return (
    <div>
    <VolunteerNav />
    <VolunteerDashboard />
    </div>
    )
}

export default VolunteerView