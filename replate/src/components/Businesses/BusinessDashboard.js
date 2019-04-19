import React, { useContext} from 'react'
import { Context } from '../context'

import BusinessRequests from './BusinessRequests'
import SubmitRequest from './SubmitRequest';

const BusinessDashboard = () => {
    const ctx = useContext(Context)
    console.log(ctx)
    if (ctx.state.user.type === 'company' ) {
        return (
        <div>
        <SubmitRequest />
        <BusinessRequests />
        </div>
    )
}
}

export default BusinessDashboard