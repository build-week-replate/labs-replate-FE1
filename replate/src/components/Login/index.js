import React from 'react'

import styled from 'styled-components'

const LoginDiv = styled.div`
    diplay: flex;
    background-color: #006837;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 5px;

    form {
        display: flex;
        flex-direction: column;
        max-width: 250px;
        margin: 0 auto;
    }
`

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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
        event.preventDefault()
        this.props.login(this.state.credentials)
        //needs logic to determine which dashboard to show, volunteer or business
        .then(() => {
            this.props.history.push('/protected')
        })
    }

    render() {
        return (
            <LoginDiv>
                <div>
                <div>

                </div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <button>
                        {this.props.loggingIn ? (
                            '...Logging In'
                        ) : (
                            'Log In'
                        )}
                    </button>
                </form>
                <p>Not registered? Signup Now!</p>
                </div>
                
            </LoginDiv>
        )
    }
}

export default Login