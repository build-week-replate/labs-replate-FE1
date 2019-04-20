import React from 'react'
import { NavLink }from 'react-router-dom'

import styled from 'styled-components'

const HomeNav = styled.div`
    background-color: #006837;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
        color: #fff;
        padding-right: 20px;
        text-decoration: none;
    }
`

const HomeNavigation = props => {
    return (
        <HomeNav>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </HomeNav>
    )
}

export default HomeNavigation