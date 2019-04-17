import React from 'react'
import axios from 'axios'

import VolunteerView from './VolunteerView'
// import BusinessView from './BusinessView'

class View extends React.Component {
    
    render() {
        // const { type, user } = this.state
        return (
            
            // if (user.type === volunteer) {
            //     return (
            //         <VolunteerView />
            //     )
            // }
            <div>
                <VolunteerView />
            </div>
        )
    }

}

export default View