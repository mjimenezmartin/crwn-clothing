import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'

function HatsPage({match: {params}}) {
  return (
    <div>
      <h1>{params.param}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/:param' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
