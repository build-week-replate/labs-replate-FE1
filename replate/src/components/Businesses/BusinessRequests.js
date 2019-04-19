import React from 'react'

import axios from 'axios';
import BusinessRequest from './BusinessRequest'

class BusinessRequests extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            schedules: []
        }
    }
    componentDidMount() {
        console.log('this is getting mounted')
        console.log(localStorage.getItem('replateToken'))
        // const replateToken = localStorage.getItem('replateToken')
        axios({
            method: 'get',
            url: 'https://replate-backend-turcan.herokuapp.com/api/schedules',
            // headers: {Authorization: replateToken}
        })
        .then(res => {
            console.log(res.data)
            this.setState({ 
                schedules: res.data})
            })
        .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.schedules, prevState)
    }

    render() {
        console.log('New one: ', this.state.schedules)
        return (
            
            <div className="Requests">
            <h1>This is where available requests are rendered</h1>
               {this.state.schedules.map(schedule => {
                   console.log('schedule', schedule)
                   return (
                   <BusinessRequest
                   request={schedule.pickup_name}
                   date={schedule.pickup_date}
                   timeExpires={schedule.pickup_time}
                   comment={schedule.pickup_comment}
                   taken={schedule.taken}
                   key={schedule.id}                
                   />
               )
               })}
            </div>
        )
    }
}

export default BusinessRequests