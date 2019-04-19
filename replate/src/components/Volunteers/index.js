import React, { useContext} from 'react'
import { Context } from '../context'

import Requests from '../../components/Requests/Requests'

const VolunteerDashboard = () => {
    const ctx = useContext(Context)
    console.log(ctx)
        return (
            <div>
            <Requests />
            </div>
        )
}

export default VolunteerDashboard