import React, { useContext} from 'react'
import { Context } from '../context'

import Requests from '../Requests/Requests'
import SubmitRequest from './SubmitRequest';

const BusinessDashboard = () => {
    const ctx = useContext(Context)
    console.log(ctx)
    if (ctx.state.user.type === 'company' ) {
        return (
        <div>
        <SubmitRequest />
        <Requests />
        </div>
    )
}
}

export default BusinessDashboard