import React from 'react'
import { Route } from 'react-router-dom'

import Requests from '../../components/Requests'

class VolunteerDashboard extends React.Component {

    render() {
        return (
            <div>
            <Route path='/requests' component={Requests} />
            </div>
        )
    }
}

export default VolunteerDashboard