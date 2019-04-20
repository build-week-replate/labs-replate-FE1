import React from 'react'
import { Route, Redirect, withRoute } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if(localStorage.getItem('token')) {
                    return <Component />
                } else {
                    console.log('Redirecting - Unauthorized!!!')
                    return <Redirect to='/login'/>
                }
            }}
            />
    )
}

export default PrivateRoute