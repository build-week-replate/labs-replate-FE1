import React from 'react'

const Request = props => {
    console.log('my props', props)
    return (
        <div>
            <h3>Business Name:
                {props.request}
            </h3>
            <p>Pickup Location:
                {props.location}
            </p>
            <p>Pickup Date:
                {props.date}
            </p>
            <p>Request Expires:
                {props.timeExpires}
            </p>
            <p>Comments:
                {props.comment}
            </p>
            <p>Already Assigned?
                {props.taken}
            </p>
        </div>
    )
}

export default Request