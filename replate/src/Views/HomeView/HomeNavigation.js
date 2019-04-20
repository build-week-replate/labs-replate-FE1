import React from 'react'
import { NavLink }from 'react-router-dom'

import styled from 'styled-components'

const HomeNav = styled.div`
    background-color: #006837;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    -webkit-box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);
    -moz-box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);
    box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);

    a {
        color: #fff;
        padding-right: 20px;
        text-decoration: none;
    }
`

const HomeNavigation = props => {
    return (
        <HomeNav>
            <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
            </div>
        </HomeNav>
    )
}

export default HomeNavigation