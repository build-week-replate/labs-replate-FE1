import React from 'react';
import axios from 'axios'

import './App.css';
import { Route } from 'react-router-dom'

// import VolunteerDashboard from './components/Volunteers'
import Login from './components/Login'
// import Register from './components/Register'
// // import PrivateRoute from './components/PrivateRoute/PrivateRoute'
// // import Requests from './components/Requests'
// import SubmitRequest from './components/Businesses/SubmitRequest'
import View from './Views'
import VolunteerReg from './components/Register/VolunteerReg'


class App extends React.Component {
  



  render() {
    return (
      <div className="App">
      <div>
        <h1>My app</h1>
        {/* <Register />
        {/* <PrivateRoute path='/' component={TestComponent} /> */}
        {/* <SubmitRequest /> */} 
        <View />
        <Route path='/login' component={Login} />
        <VolunteerReg />
      </div>
        
      </div>
    );
  }
}

export default App;
