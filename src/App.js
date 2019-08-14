import React from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import History from './History'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>coucou</p>
        <BrowserRouter>
          <NavLink exact to="/" > Acceuil </NavLink>
          <NavLink exact to="/notre-histoire" activeClassName="selected"> About us </NavLink>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/notre-histoire" component={History}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
