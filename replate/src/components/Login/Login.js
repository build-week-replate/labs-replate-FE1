import React from 'react'
import { Context } from '../context'

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
    static context = Context
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
    
    axios.defaults.baseURL = 'https://replate-backend-turcan.herokuapp.com/api';
    axios.interceptors.request.use(
     function(options) {
       options.headers.authorization = localStorage.getItem('replateToken')
    
       return options;
     },
     function(error) {
       // do something with the error
       return Promise.reject(error);
     }
    ); 
        
        const user = {
            email: this.state.email,
            password: this.state.password,
        }    
        // console.log(user) 
        axios
        .post('/users/login', user)
        .then(res => {
            const token = res.data.token
            console.log('Login Response: ', res)
            this.context.dispatch({ type: 'login', payload: res.data.user })
            localStorage.setItem('replateToken', JSON.stringify(token).slice(1, -1))
            
        }).then(() => {
            axios.get('/schedules')
            .then(res => {
                console.log('This is our Request Response: ', res)
                this.context.dispatch({ type: 'get_schedules', payload: res.data })
                this.props.history.push('/dashboard')
              })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err)) 
    }

    render() {
        console.log(this.context)
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
Login.contextType = Context;


export default Login