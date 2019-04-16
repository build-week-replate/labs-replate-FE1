import React from 'react'

import VolunteerReg from './VolunteerReg'

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
                    <p>Business Signup</p>
                </div>
            </div>
        </div>
    )
}

export default Register