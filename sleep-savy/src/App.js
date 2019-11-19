import React from 'react';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={props => <Login {...props} />} />
      </div>
    </Router>
  );
}

export default App;
