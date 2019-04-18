import React from 'react';
import { Route, Link } from "react-router-dom"
import Login from './components/Login/Login'

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
       
      {/* <button onClick={() => this.props.history.push('/login')}>Click to Login </button> */}
      <div className='container'>
       
        <Link to='/login'>Click to Login</Link>
    
        
          <div className='homeContainer'>
          </div>
  
      </div>   

      <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App
