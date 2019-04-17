import React from 'react'

import VolunteerNav from './VolunteerNav'
import Requests from '../../components/Requests'

class VolunteerDashboard extends React.Component {

    render() {
        return (
            <div>
            <VolunteerNav />
            <Requests />
            </div>
        )
    }
}

export default VolunteerDashboard