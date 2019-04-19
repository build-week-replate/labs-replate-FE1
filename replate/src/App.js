import React from 'react';
import { Route, Link } from "react-router-dom"
import Login from './components/Login/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard/Dashboard'


import './App.css';
// import VolunteerDashboard from './components/Volunteers';

class App extends React.Component {


  render() {
    return (
      <div className="App">
       <img src={require('./assets/rePlateLogo.png')} alt="rePlate Logo" />
      {/* <button onClick={() => this.props.history.push('/login')}>Click to Login </button> */}
      <div className='container'>
       
        <Link to='/login'>Click to Login</Link>
        <Link to='/register'>Click to Register</Link>
    
        
          <div className='homeContainer'>
          </div>
  
      </div>   
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path='/dashboard' component={Dashboard} />
      </div>
    );
  }
}

export default App
