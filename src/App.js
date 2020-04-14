import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../src/app/pages/homepage/homepage';
import Individual from '../src/app/pages/individual/individual';
import Group from '../src/app/pages/groups/groups';
import Activities from '../src/app/pages/activities/activities';
import LoginUser from '../src/app/pages/login/login';
import NotFound from '../src/app/pages/notFound/notFound';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/register" exact component={LoginUser} />
          <Route path="/individual" exact component={Individual} />
          <Route path="/groups" exact component={Group} />
          <Route path="/activities" exact component={Activities} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
