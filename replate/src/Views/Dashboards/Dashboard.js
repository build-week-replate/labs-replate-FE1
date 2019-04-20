
import React from 'react'

import VolunteerDashboard from './VolunteerDashboard';
import BusinessDashboard from './BusinessDashboard';

const Dashboard = props => {
    const userType = localStorage.getItem('type')
    console.log(userType)
    if (userType === 'company') {
        return <BusinessDashboard />
    } else {
        return <VolunteerDashboard />
    }
}

export default Dashboard