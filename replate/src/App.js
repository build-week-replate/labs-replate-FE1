import React, { Component } from 'react';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import HomeView from './Views/HomeView/HomeView'
import Login from './Views/HomeView/Login'
import RegisterStart from './Views/HomeView/RegisterStart'
import PrivateRoute from './components/PrivateRoute';

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
        <PrivateRoute exact path='/protected' component={Dashboard} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
