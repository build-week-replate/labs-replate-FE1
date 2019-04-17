import React, { Component } from 'react';

import './App.css';
import { Route } from 'react-router-dom'

import VolunteerDashboard from './components/Volunteers'
import Login from './components/Login'
import Register from './components/Register'


class App extends Component {

  render() {
    return (
      <div className="App">
      <div>
        <h1>My app</h1>
        <Register />
        <Route path='/login' component={Login} />
        <VolunteerDashboard />
      </div>
        
      </div>
    );
  }
}

export default App;
