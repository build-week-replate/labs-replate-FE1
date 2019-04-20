import React from 'react'

import axios from 'axios'

class BusinessReg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            type: 'company',
            phone: '',
            name: ''
        }
    }

    // businessRegistration = () => {
    //     const phone = parseInt(this.state.phone)
    //     axios
    //     .post('https://replate-backend-turcan.herokuapp.com/api/users', {
    //         email: this.state.email,
    //         password: this.state.password,
    //         type: 'company',
    //         phone,
    //         name: this.state.name,

    //     })
    //     .then(res => {
    //         this.setState({
    //             email: '',
    //             password: '',
    //             type: 'company',
    //             phone: '',
    //             name: ''
    //         })
    //         localStorage.setItem('token', res.data.token)
    //     })
    //     .catch(err => console.log(err))
    // }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.businessRegistration()
    }

    render() {
    return (
        <div>
        <div>

        </div>
        <form onSubmit={this.handleSubmit}>
            <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleChanges}
                placeholder='email'
            />
            <input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChanges}
                placeholder='password'
            />
             <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChanges}
                placeholder='name'
            />
             <input
                type='text'
                name='phone'
                value={this.state.phone}
                onChange={this.handleChanges}
                placeholder='phone'
            />
            <button type='submit'>
                {this.props.loggingIn ? (
                    '...Singing Up'
                ) : (
                    'Sign Up'
                )}
            </button>
        </form>
        <p>Already Signed Up? Login Now!</p>
        </div>
    )
}
}

export default BusinessReg