import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='App-header'>  
          <h2>Friends Database</h2>
          <ul>
            <li>
              <Link to='/login'>Login.</Link>
            </li>
            <li>
              <Link to='/friends'>FriendsList.</Link>
            </li>
            <li>
              <Link to='/friends/add'>AddFriend.</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
            <Switch>
              <Route path='/logout' component={Logout}/>
              <PrivateRoute path='/friends/add' component={AddFriends}/>
              <PrivateRoute path='/friends' component={FriendsList} />
              <Route path='/login' component={Login} />
              <Route path='/' component={Login}/>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
