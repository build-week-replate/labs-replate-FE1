import React from 'react'

import VolunteerNav from './VolunteerNav'

class VolunteerDashboard extends React.Component {
    // componentDidMount() {
    //     this.props.getData()
    // }

    render() {
        return (
            <div>
            <VolunteerNav />
            <h2>This is the volunteer dashboard</h2>
            </div>
        )
    }
}

export default VolunteerDashboard