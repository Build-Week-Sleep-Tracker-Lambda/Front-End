import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
// import Login from './components/Login';
// import Registration from './components/Registration';
import Home from './components/Home';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';

import './App.css';

function App() {

  const [userID, setUserID] = useState(0);

  return (
    <Router>
      <div className="App">
        <nav className="nav">
          {/* <Link className="link" to="/">Login</Link>
          <Link className="link" to="/registration">Registration</Link> */}
          <Link className="link" to="/sleep">Home</Link>
        </nav>
        <Switch>
          {/* <Route exact path="/" render={props => <Login {...props} />} />
          <Route path="/registration" render={props => <Registration {...props} /> } /> */}
          <PrivateRoute path="/sleep" component={Home} />
          <Route path="/add" render={props => <AddForm {...props} />} />
          <Route path="/edit/:id" render={props => <EditForm {...props} /> } />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
