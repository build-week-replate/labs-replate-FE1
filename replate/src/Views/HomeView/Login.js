import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Route, Router, Link } from 'react-router-dom'
import styled from 'styled-components'

import { login } from '../../actions/login'

const LoginForm = styled.div`
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

class Login extends React.Component {
    state = {
        credentials: {
            email: '',
            password: '',
            type: ''
        }
    }

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
        .then(() => {
          this.props.history.push('/businesses')
        });
      };

    render() {
        return (
            <LoginForm>
                <h2>Welcome Back!</h2>
                <p>Please Login to Continue</p>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='email'
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                        placeholder='email'
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                        placeholder='password'
                    />
                    <button>
                        {this.props.loggingIn ? (
                            '...Logging In'
                        ) : (
                            'Log In'
                        )}
                    </button>
                    <p>
                        Not a member?  <Link to='/register'>Register Now!</Link>
                    </p>
                </form>
                {this.props.error && <p className="error">{this.props.error}</p>}
            </LoginForm>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggingIn: state.isLoggingIn
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login)