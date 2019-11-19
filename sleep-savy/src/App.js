import React from 'react';
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={props => <SignUp {...props} />} />
      </div>
    </Router>
  );
}

export default App;
