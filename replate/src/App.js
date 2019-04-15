import React, { Component } from 'react';

import './App.css';

// import VolunteerDashboard from './components/Volunteers'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <h1>My app</h1>
        <Login />
      </div>
        
      </div>
    );
  }
}

export default App;
