import React from 'react'

import VolunteerReg from './VolunteerReg'
import BusinessReg from './BusinessReg'

// import styled from 'styled-components'


const Register = props => {
    return (
        <div>
            <div>
                <img src={require('../../assets/rePlateLogo.png')} alt="rePlate Logo" />
            </div>
            <div>
                <div>
                    <VolunteerReg />
                </div>
                <div>
                <BusinessReg />
                </div>
            </div>
        </div>
    )
}

export default Register