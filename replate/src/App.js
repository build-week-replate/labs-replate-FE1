import React, { Component } from 'react';

import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import VolunteerDashboard from './components/Volunteers'
import Login from './components/Login'
import Register from './components/Register'
// import UserList from './components/Users/UserList'

class App extends Component {

  render() {
    return (
      <div className="App">
      <div>
        <h1>My app</h1>
        <Register />
        <Login />
        <VolunteerDashboard />
      </div>
        
      </div>
    );
  }
}

export default App;
