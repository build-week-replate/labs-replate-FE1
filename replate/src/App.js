import React, { Component } from 'react';

import './App.css';

import VolunteerDashboard from './components/Volunteers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VolunteerDashboard />
      </div>
    );
  }
}

export default App;
