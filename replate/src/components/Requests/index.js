import React from 'react'

import axios from 'axios';
import Request from './Request'

class Requests extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            schedules: []
        }
    }
    componentDidMount() {
        console.log('this is getting called')
        const replateToken = localStorage.getItem('replateToken')
        axios({
            method: 'get',
            url: 'https://replate-backend-turcan.herokuapp.com/api/schedules',
            headers: {Authorization: replateToken}
        })
        .then(res => {
            console.log(res.data)
            this.setState({ 
                schedules: res.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log('New one: ', this.state.schedules)
        return (
            <div className="Requests">
               {this.state.schedules.map(schedule => {
                   console.log('schedule', schedule)
                   return (
                   <Request
                   request={schedule.pickup_name}
                   date={schedule.pickup_date}
                   timeExpires={schedule.pickup_time}
                   comment={schedule.pickup_comment}
                   taken={schedule.taken}
                   key={schedule.id}                
                   />
               )
               })}
                <h1>hi</h1>
            </div>
        )
    }
}

export default Requests