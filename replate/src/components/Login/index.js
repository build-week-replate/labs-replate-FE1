import React from 'react'

import axios from 'axios'

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
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = event => {
        event.preventDefault()  
        const user = {
            email: this.state.email,
            password: this.state.password
        }    
        console.log(user)  
        axios
        .post('https://replate-backend-turcan.herokuapp.com/api/users/login', user)
        .then(res => {
            const token = res.data.token
            console.log(res)
            localStorage.setItem('token', JSON.stringify(token))
            this.props.refresh()
        })
        .catch(err => console.log(err))
    }

    render() {
        const { email, password } = this.state
        return (
            <LoginDiv>
                <div>
                <div>

                </div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChanges}
                    />
                    <button>
                        {this.props.login ? (
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