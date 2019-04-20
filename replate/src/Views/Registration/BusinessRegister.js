import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios'
import styled from 'styled-components'

import { register } from '../../actions/register'

const BusRegForm = styled.div`
    margin: 0 auto;
    max-width: 600px;
    border: 2px solid #8bc53e;
    padding: 20px;
    border-radius: 5px;
    margin-top: 60px;
    -webkit-box-shadow: 0px 0px 28px 8px rgba(0,0,0,0.14);
    -moz-box-shadow: 0px 0px 28px 8px rgba(0,0,0,0.14);
    box-shadow: 0px 0px 28px 8px rgba(0,0,0,0.14);
    
    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 40px;
        max-width: 80%;
    }

    input {
        padding: 15px;
        margin-top: 5px;
        margin-bottom: 15px;
        border-radius: 3px;
        border: 2px solid #8bc53e;
    }

    button {
        background-color: #8bc53e;
        color: #fff;
        width: 125px;
        margin: 0 auto;
        margin-top: 25px;
        margin-bottom: 25px;
        border: 2px solid #8bc53e;
        border-radius: 3px;
        padding: 15px 20px;
        font-size: 14px;
        cursor: pointer;

        :hover {
            background-color: #006837;
            border: 2px solid #006837;
            color: #fff;
            -moz-transform: translate(-2px, -2px);
            -ms-transform: translate(0, -2px);
            -o-transform: translate(0, -2px);
            -webkit-transform: translate(0, -2px);
            transform: translate(0, -2px);
            transition: 0.4s;
            -webkit-box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);
            -moz-box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);
            box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);
        }
    }

    p {
        color: #888;
    }

    h2 {
        color: #006837;
        font-size: 30px;
    }

    a {
        color: #8bc53e;
        text-decoration: none;
    }

`

class BusinessReg extends React.Component {
        state = {
            userInfo: {
                email: '',
                password: '',
                type: 'company',
                phone: '',
                name: ''
        }
    }

    handleChanges = event => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,            
            [event.target.name]: event.target.value
        }
        })
    }

    businessRegistration = event => {
        // console.log(this.props.volunteerRegistration)
        event.preventDefault()
        this.props.register(this.state.userInfo)
        .then(() => {
            this.props.history.push('/dashboard')   
        })
        .catch(() => null)
    }

    render() {
    return (
        <div>
        <div>

        </div>
        <BusRegForm>
            <h2>Register as a Business</h2>
            <p>Would you like to register as a Volunteer Instead?<br />
            <Link to='/volunteer-registration'>Register as a Volunteer</Link>
            </p>
        <form onSubmit={this.businessRegistration}>
            <input
                type='text'
                name='name'
                value={this.state.userInfo.name}
                onChange={this.handleChanges}
                placeholder='business name'
            />
            <input
                type='text'
                name='email'
                value={this.state.userInfo.email}
                onChange={this.handleChanges}
                placeholder='email'
            />
            <input
                type='password'
                name='password'
                value={this.state.userInfo.password}
                onChange={this.handleChanges}
                placeholder='password'
            />
             <input
                type='text'
                name='phone'
                value={this.state.userInfo.phone}
                onChange={this.handleChanges}
                placeholder='phone'
            />
            <button type='submit'>
                {this.props.isRegistering ? (
                    '...Registering'
                ) : (
                    'Register'
                )}
            </button>
        </form>
        <div>{this.props.error}</div>
        <p>
            Already Registered?  <Link to='/login'>Login Now!</Link>
        </p>
        </BusRegForm>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        isRegistering: state.isRegistering,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { register }
)(BusinessReg)