import React from 'react'

import VolunteerReg from './VolunteerReg'
import BusinessReg from './BusinessReg'

// import styled from 'styled-components'


const Register = props => {
    return (
        <div>
            <div>
            </div>
            <div>
                <div>
                <h2>Volunteer Registration</h2>
                <VolunteerReg />
                </div>
                <div>
                <h2>Business Registration</h2>
                <BusinessReg />
                </div>
            </div>
        </div>
    )
}

export default Register