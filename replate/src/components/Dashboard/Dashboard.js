import React, { useContext} from 'react'
import { Context } from '../context'
import VolunteerDashboard from '../Volunteers';
import BusinessDashboard from '../Businesses/BusinessDashboard';

const Dashboard = props => {
    const ctx = useContext(Context) 
    console.log(ctx)
    
    if (ctx.state.user.type === 'company') {
        return <BusinessDashboard />
    } else {
        return <VolunteerDashboard />
    }
}

export default Dashboard