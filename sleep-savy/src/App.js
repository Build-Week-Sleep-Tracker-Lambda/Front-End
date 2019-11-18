import React from 'react';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Sleep Savy is the best</h1>
        <Route exact path="/" render={props => <Login {...props} />} />
      </div>
    </Router>
  );
}

export default App;
