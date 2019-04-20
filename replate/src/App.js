import React, { Component } from 'react';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Links} from 'react-router-dom'

import './App.css';

// import VolunteerDashboard from './components/Volunteers'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div>
        <h1>My app</h1>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/protected' component={Dashboard} />
      </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
