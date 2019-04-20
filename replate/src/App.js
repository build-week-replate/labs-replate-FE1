import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import HomeView from './Views/HomeView/HomeView'
import Login from './Views/HomeView/Login'
import RegisterStart from './Views/Registration/RegisterStart'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './Views/Dashboards/Dashboard'
// import BusinessDashboard from './Views/Dashboards/BusinessDashboard';
import VolunteerRegister from './Views/Registration/VolunteerRegister'
import BusinessRegister from './Views/Registration/BusinessRegister'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div>
      <HomeView />
        
      </div>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterStart} />
        <Route path="/volunteer-registration" component={VolunteerRegister} />
        <Route path="/business-registration" component={BusinessRegister} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
