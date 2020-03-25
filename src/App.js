import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from '../src/app/pages/homepage/homepage';
import Individual from '../src/app/pages/individual/individual';
import Group from '../src/app/pages/groups/groups';
import Activities from '../src/app/pages/activities/activities';
import LoginUser from '../src/app/pages/login/login';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/splitup" exact component={Homepage} />
        <Route path="/splitup/register" exact component={LoginUser} />
        <Route path="/splitup/individual" exact component={Individual} />
        <Route path="/splitup/groups" exact component={Group} />
        <Route path="/splitup/activities" exact component={Activities} />
      </BrowserRouter>
    </div>
  );
}

export default App;
