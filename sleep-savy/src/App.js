import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import './App.css';

function App() {

  const [userID, setUserID] = useState(0);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route exact path="/registration" render={props => <SignUp {...props} />} />
        <Switch>
          <PrivateRoute path="/sleep" component={Home} />
          <Route path="/add" render={props => <AddForm {...props} />} />
          <Route path="/edit/:id" render={props => <EditForm {...props} /> } />
          <Route component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
