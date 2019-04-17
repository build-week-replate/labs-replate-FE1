import React from 'react'

import axios from 'axios'
// import Auth from '../../utils/axiosAuth'

class SubmitRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pickup_name: '',
            pickup_date: '',
            pickup_time: '',
            pickup_comment: '',
            pickup_additional_comment: ''
        }
    }

    addRequest = data => {
        const replateToken = localStorage.getItem('replateToken')
        console.log(replateToken)
        axios({
            method: 'post',
            url: 'https://replate-backend-turcan.herokuapp.com/api/schedules',
            headers: {Authorization: replateToken},
            data: {
                pickup_name: this.state.pickup_name,
                pickup_date: this.state.pickup_date,
                pickup_time: this.state.pickup_time,
                pickup_comment: this.state.pickup_comment,
                pickup_additional_comment: this.state.pickup_additional_comment
            }
        })
        .then(res => {
            this.setState({
                pickup_name: '',
                pickup_date: '',
                pickup_time: '',
                pickup_comment: '',
                pickup_additional_comment: ''
            })
        })
        .catch(err => console.log(err))
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.addRequest()
    }

    render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <input
                type='text'
                name='pickup_name'
                value={this.state.pickup_name}
                onChange={this.handleChanges}
                placeholder='Company Name'
            />
            <input
                type='date'
                name='pickup_date'
                value={this.state.pickup_date}
                onChange={this.handleChanges}
                placeholder='Pickup Date'
            />
             <input
                type='time'
                name='pickup_time'
                value={this.state.pickup_time}
                onChange={this.handleChanges}
                placeholder='Pickup Name'
            />
             <input
                type='text'
                name='pickup_comment'
                value={this.state.pickup_comment}
                onChange={this.handleChanges}
                placeholder='Pickup Comment'
            />
            <button type='submit'>
                Submit Request for Pickup
            </button>
        </form>
        </div>
    )
}
}

export default SubmitRequest

// .post('https://replate-backend-turcan.herokuapp.com/api/schedules', { "Authorization" : replateToken.slice(1, -1) }